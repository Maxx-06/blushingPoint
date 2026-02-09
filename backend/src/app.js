
import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

// --- ES Module Fix for __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Environment Variables ---
// Path: Up two levels (src -> backend -> root)
// Looks in p-2/backend/
dotenv.config({ path: path.join(__dirname, "../.env") });
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares ---
app.use(cors({ origin: true }));
app.use(express.json());

// --- Static File Path Setup ---
// Path: Up two levels (src -> backend -> root), then into frontend
const reactDistPath = path.join(__dirname, "../../frontend/parlour/dist");

// Path Verification Log
console.log("--- Path Debugging ---");
console.log("Looking for React build at:", reactDistPath);
if (fs.existsSync(reactDistPath)) {
  console.log("✅ Frontend build found!");
} else {
  console.error("❌ Frontend build NOT found! Run 'npm run build' in your frontend folder.");
}
console.log("----------------------");

// Serve static React files
app.use(express.static(reactDistPath));

// --- Cloudinary Configuration ---
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// --- API Routes ---
app.get("/gallery", async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const next_cursor = req.query.next_cursor || null;
  const folder = "gallery";

  try {
    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("created_at", "desc")
      .sort_by("public_id", "asc")
      .max_results(limit)
      .next_cursor(next_cursor)
      .execute();

    // Remove duplicates based on asset_id
    const uniqueResources = Array.from(
      new Map(result.resources.map(img => [img.asset_id, img])).values()
    );

    const images = uniqueResources.map(img => ({
      id: img.asset_id,
      thumbnail: cloudinary.url(img.public_id, { width: 300, height: 400, crop: "fill" }),
      full: img.secure_url,
      alt: img.public_id
    }));

    res.json({
      images,
      next_cursor: result.next_cursor || null
    });
  } catch (err) {
    console.error("Cloudinary Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// --- Catch-all Route for React Router ---
// IMPORTANT: Using RegEx (/.*/) for Express 5 compatibility to avoid PathError
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(reactDistPath, "index.html"));
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
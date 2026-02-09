// import React, { useState } from "react";

// const Gallroid = () => {
//   // 1. State to track the selected image for the lightbox
//   const [selectedImg, setSelectedImg] = useState(null);

//   const photos = [
//     {
//       id: 1,
//       src: "https://picsum.photos/800/600?random=1",
//       alt: "Gallery Image 1",
//     },
//     {
//       id: 2,
//       src: "https://picsum.photos/800/600?random=2",
//       alt: "Gallery Image 2",
//     },
//     {
//       id: 3,
//       src: "https://picsum.photos/800/600?random=3",
//       alt: "Gallery Image 3",
//     },
//     {
//       id: 4,
//       src: "https://picsum.photos/800/600?random=4",
//       alt: "Gallery Image 4",
//     },
//     {
//       id: 5,
//       src: "https://picsum.photos/800/600?random=5",
//       alt: "Gallery Image 5",
//     },
//     {
//       id: 6,
//       src: "https://picsum.photos/800/600?random=6",
//       alt: "Gallery Image 6",
//     },
//     {
//       id: 7,
//       src: "https://picsum.photos/800/600?random=7",
//       alt: "Gallery Image 7",
//     },
//     {
//       id: 8,
//       src: "https://picsum.photos/800/600?random=8",
//       alt: "Gallery Image 8",
//     },
//     {
//       id: 9,
//       src: "https://picsum.photos/800/600?random=9",
//       alt: "Gallery Image 9",
//     },
//     {
//       id: 10,
//       src: "https://picsum.photos/800/600?random=10",
//       alt: "Gallery Image 10",
//     },
//     {
//       id: 11,
//       src: "https://picsum.photos/800/600?random=11",
//       alt: "Gallery Image 11",
//     },
//     {
//       id: 12,
//       src: "https://picsum.photos/800/600?random=12",
//       alt: "Gallery Image 12",
//     },
//     {
//       id: 13,
//       src: "https://picsum.photos/800/600?random=13",
//       alt: "Gallery Image 13",
//     },
//     {
//       id: 14,
//       src: "https://picsum.photos/800/600?random=14",
//       alt: "Gallery Image 14",
//     },
//     {
//       id: 15,
//       src: "https://picsum.photos/800/600?random=15",
//       alt: "Gallery Image 15",
//     },
//     {
//       id: 16,
//       src: "https://picsum.photos/800/600?random=16",
//       alt: "Gallery Image 16",
//     },
//     {
//       id: 17,
//       src: "https://picsum.photos/800/600?random=17",
//       alt: "Gallery Image 17",
//     },
//     {
//       id: 18,
//       src: "https://picsum.photos/800/600?random=18",
//       alt: "Gallery Image 18  ",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-[#FFFBF3] pt-28 pb-20 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#543E33] mb-4">
//             Our Gallery
//           </h1>
//           <div className="w-24 h-1 bg-[#543E33] mx-auto opacity-30"></div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {photos.map((photo) => (
//             <div
//               key={photo.id}
//               onClick={() => setSelectedImg(photo.src)} // Open Modal on Click
//               className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
//             >
//               <img
//                 src={photo.src}
//                 alt={photo.alt}
//                 className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <span className="text-white font-medium border border-white px-4 py-2 rounded">
//                   View Image
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* --- Lightbox Modal --- */}
//       {selectedImg && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all"
//           onClick={() => setSelectedImg(null)} // Close when clicking background
//         >
//           {/* Close Button */}
//           <button
//             className="absolute top-10 right-10 text-white text-4xl hover:text-gray-300 transition-colors"
//             onClick={() => setSelectedImg(null)}
//           >
//             &times;
//           </button>

//           {/* Full Image */}
//           <img
//             src={selectedImg}
//             alt="Full view"
//             className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallroid;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Gallroid = () => {
//   const [selectedImg, setSelectedImg] = useState(null); // Lightbox
//   const [images, setImages] = useState([]); // Images from backend
//   const [nextCursor, setNextCursor] = useState(null); // Cursor for pagination
//   const [loading, setLoading] = useState(false); // Loading state
//   const [hasMore, setHasMore] = useState(true); // To check if more images exist

//   const fetchImages = async () => {
//     if (!hasMore) return; // Stop if no more images
//     setLoading(true);

//     try {
//       const res = await axios.get("http://localhost:5000/gallery", {
//         params: {
//           limit: 10,
//           next_cursor: nextCursor || "",
//         },
//       });

//       const newImages = res.data.images;
//       setImages(prev => [...prev, ...newImages]);

//       // Update next cursor and hasMore
//       if (res.data.next_cursor) {
//         setNextCursor(res.data.next_cursor);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch first batch on mount
//   useEffect(() => {
//     fetchImages();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-[#FFFBF3] pt-28 pb-20 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#543E33] mb-4">
//             Our Gallery
//           </h1>
//           <div className="w-24 h-1 bg-[#543E33] mx-auto opacity-30"></div>
//         </div>

//         {/* --- Grid --- */}
//         <div className="grid grid-cols-1 lg:auto-rows-[500px] sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {images.map((photo) => (
//             <div
//               key={photo.id}
//               onClick={() => setSelectedImg(photo.full)}
//               className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
//             >
//               <img
//                 src={photo.thumbnail}
//                 alt={photo.alt}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <span className="text-white font-medium border border-white px-4 py-2 rounded">
//                   View Image
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* --- Show More Button --- */}
//         {hasMore && (
//           <div className="text-center mt-6">
//             <button
//               onClick={fetchImages}
//               className="px-6 py-2 bg-[#543E33] text-white rounded hover:bg-[#765A4A] transition"
//               disabled={loading}
//             >
//               {loading ? "Loading..." : "Show More"}
//             </button>
//           </div>
//         )}
//       </div>

//       {/* --- Lightbox Modal --- */}
//       {selectedImg && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all"
//           onClick={() => setSelectedImg(null)}
//         >
//           <button
//             className="absolute top-10 right-10 text-white text-4xl hover:text-gray-300 transition-colors"
//             onClick={() => setSelectedImg(null)}
//           >
//             &times;
//           </button>

//           <img
//             src={selectedImg}
//             alt="Full view"
//             className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallroid;


import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Gallroid = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [images, setImages] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    try {
      const res = await axios.get("http://localhost:5000/gallery", {
        params: {
          limit: 10,
          next_cursor: nextCursor || "",
        },
      });

      const newImages = res.data.images;

      // Append only unique images by id
      setImages(prev => {
        const unique = new Map(prev.map(img => [img.id, img]));
        newImages.forEach(img => unique.set(img.id, img));
        return Array.from(unique.values());
      });

      if (res.data.next_cursor) setNextCursor(res.data.next_cursor);
      else setHasMore(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [nextCursor, hasMore, loading]);

  // Initial fetch
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.scrollHeight &&
        !loading
      ) {
        fetchImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchImages, loading]);

  return (
    <div className="w-full min-h-screen bg-[#FFFBF3] pt-28 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#543E33] mb-4">
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-[#543E33] mx-auto opacity-30"></div>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 lg:auto-rows-[500px] sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(photo => (
            <div
              key={photo.id}
              onClick={() => setSelectedImg(photo.full)}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
            >
              <img
                src={photo.thumbnail}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium border border-white px-4 py-2 rounded">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Loading Indicator --- */}
        {loading && (
          <div className="text-center mt-6 text-[#543E33] font-medium">
            Loading...
          </div>
        )}
      </div>

      {/* --- Lightbox Modal --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-10 right-10 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>

          <img
            src={selectedImg}
            alt="Full view"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default Gallroid;

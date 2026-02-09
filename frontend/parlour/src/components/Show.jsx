import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Show() {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        yPercent: 80,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <section className="w-full">
      <div 
        ref={wrapperRef} 
        className="relative w-full h-screen overflow-hidden"
      >
        <div 
          ref={imgRef}
          className="absolute left-0 w-full will-change-transform"
          style={{
            height: '200%',
            top: '-100%',
            backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_f4a2f0eb10ce4a2cb3c881e2d2e0d056~mv2.jpg/v1/fill/w_1713,h_1354,al_c,q_90,enc_avif,quality_auto/c837a6_f4a2f0eb10ce4a2cb3c881e2d2e0d056~mv2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </section>
  );
}

export default Show;
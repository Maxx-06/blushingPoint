function GalleryImages() {
  return (
    <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 my-10">
         <img
          className="w-full h-full object-center object-contain"
          src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
         <img
          className="w-full h-full object-center object-contain"
          src="https://plus.unsplash.com/premium_photo-1675851210850-de5525809dd9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
         <img
          className="w-full h-full object-center object-contain"
          src="https://images.unsplash.com/photo-1588436199517-f2b12041a7cc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
    </div>
  );
}
export default GalleryImages;

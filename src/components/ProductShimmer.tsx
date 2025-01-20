const ProductShimmer = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="h-[360px] w-[270px] mx-auto bg-gray-200 animate-pulse rounded-lg overflow-hidden"
          >
            <div className="h-[60%] w-full bg-gray-300"></div>
            <div className="flex flex-col items-center gap-3 h-[40%] mt-5 px-4">
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              <div className="flex gap-3">
                <div className="bg-gray-300 h-[3px] w-[15px] rounded"></div>
                <div className="bg-gray-300 h-[3px] w-[15px] rounded"></div>
                <div className="bg-gray-300 h-[3px] w-[15px] rounded"></div>
              </div>
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductShimmer;

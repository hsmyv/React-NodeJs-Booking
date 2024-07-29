export default function PlacePageSkeleton(){
    return (
            <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8 rounded-2xl animate-pulse">
              <div className="bg-gray-300 h-8 w-3/4 mb-4 rounded"></div>
              <div className="bg-gray-300 h-6 w-1/2 mb-4 rounded"></div>
              <div className="bg-gray-300 h-64 w-full mb-8 rounded"></div>
          
              <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                  <div className="my-4">
                    <div className="bg-gray-300 h-6 w-3/4 mb-4 rounded"></div>
                    <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
                    <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
                    <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
                  </div>
                </div>
                <div className="bg-gray-300 h-48 w-full rounded"></div>
              </div>
          
              <div className="bg-white -mx-8 px-8 py-8 border-t">
                <div className="bg-gray-300 h-6 w-3/4 mb-4 rounded"></div>
                <div className="bg-gray-300 h-4 w-full mb-4 rounded"></div>
              </div>
            </div>
          
    );
}
export default function SkeletonLoader(){
    return (
            <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-300 mb-2 rounded-2xl flex h-40">
                    <div className="bg-gray-200 w-full rounded-t-2xl h-full"></div>
                  </div>
                  <div className="bg-gray-200 -mt-2 rounded-b-2xl py-2">
                    <div className="flex ml-2 gap-1">
                      <div className="bg-gray-300 w-6 h-6 rounded-full"></div>
                      <div className="bg-gray-300 w-1/2 h-6 rounded"></div>
                    </div>
                    <div className="ml-3 mt-2">
                      <div className="bg-gray-300 w-3/4 h-4 rounded"></div>
                    </div>
                    <div className="ml-3 mt-1">
                      <div className="bg-gray-300 w-1/2 h-4 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    )
}
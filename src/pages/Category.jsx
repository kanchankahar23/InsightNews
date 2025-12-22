import React from 'react'

const Category = ({ news }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">
          Latest News
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.urlToImage || "https://via.placeholder.com/400"}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-red-600 font-semibold">
                  INSIGHT NEWS
                </span>
                <h2 className="mt-2 text-sm font-bold text-gray-800 line-clamp-2">
                  {item.title}
                </h2>
                <p className="mt-2 text-xs text-gray-600 line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-[10px] text-gray-500">
                    {item.publishedAt?.slice(0, 10)}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 text-xs font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
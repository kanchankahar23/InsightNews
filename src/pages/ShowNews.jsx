import React from 'react'
import Navbar from '../components/Navbar'

const Shownews = () => {

  const newsData = [
    {
      id: 1,
      title: 'India takes a big step in digital innovation',
      desc: 'Government launches new initiative to boost digital growth.',
      img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'Stock market shows positive trend',
      desc: 'Sensex and Nifty rise as market sentiment improves.',
      img: 'https://images.unsplash.com/photo-1559526324-593bc073d938',
      time: '3 hours ago'
    },
    {
      id: 3,
      title: 'New education policy announced',
      desc: 'Major reforms introduced to improve higher education.',
      img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
      time: '5 hours ago'
    },
    {
      id: 4,
      title: 'Technology startups grow rapidly',
      desc: 'Indian startups attract record funding this year.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      time: '6 hours ago'
    },
    {
      id: 5,
      title: 'Climate change concerns rise',
      desc: 'Experts warn about increasing global temperatures.',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      time: '8 hours ago'
    },
    {
      id: 6,
      title: 'Cricket team prepares for series',
      desc: 'Players focus on fitness and strategy.',
      img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2',
      time: '10 hours ago'
    },
    {
      id: 7,
      title: 'AI changing the future of jobs',
      desc: 'Experts discuss impact of AI on employment.',
      img: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a',
      time: '12 hours ago'
    },
    {
      id: 8,
      title: 'Tourism sector sees growth',
      desc: 'More travelers explore domestic destinations.',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      time: '1 day ago'
    }
  ]

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        
        <h1 className="text-2xl font-bold mb-6">
          Latest News
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <span className="text-xs text-red-600 font-semibold">
                  INSIGHT NEWS
                </span>

                <h2 className="mt-2 text-sm font-bold text-gray-800 line-clamp-2">
                  {news.title}
                </h2>

                <p className="mt-2 text-xs text-gray-600 line-clamp-3">
                  {news.desc}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <p className="text-[10px] text-gray-500">
                    {news.time}
                  </p>

                  <button className="text-blue-600 text-xs font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Shownews

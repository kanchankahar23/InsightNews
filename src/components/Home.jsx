import React from 'react'
import image from '../assets/image.png'

const Home = () => {

  const Premium = [
    { heading: "A bold step amid an ambitious nuclear energy target", name: "R.B. Grover" },
    { heading: "I find it very interesting when you open your soul and say what you’re thinking: Peter Leko", name: "P.K. Ajith Kumar" },
    { heading: "From the ‘Sincaraz’ takeover to the Sabalenka makeover", name: "N. Sudarshan" },
    { heading: "Sharif Osman Hadi: Man of the streets", name: "Kallol Bhattacherjee" },
    { heading: "Polavaram displaced families look to tide over livelihood crisis", name: "Kallol Bhattacherjee" },
    { heading: "A bold step amid an ambitious nuclear energy target", name: "R.B. Grover" }
  ]

  return (
    <div className="flex justify-evenly mt-6 gap-10 ml-5 ">

      {/* LEFT PREMIUM */}
      <div className="hidden md:flex flex-col w-1/5">
        <h1 className="text-red-600 font-bold mb-3">Premium</h1>

        {Premium.map((item, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-sm font-semibold mb-1">
              {item.heading}
            </h2>
            <p className="text-xs text-gray-500">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* CENTER MAIN NEWS */}
      <div className="w-full max-w-md p-4 md:max-w-3/5">
        <h1 className="text-red-600 font-bold mb-1">
          Tamil Nadu
        </h1>

        <h2 className="text-2xl font-bold mb-2">
          Over 97 lakh voters deleted from T.N. draft electoral roll after SIR
        </h2>

        <p className="text-sm text-gray-600 mb-3">
          Total number of voters removed after the SIR exercise is 97,37,831; as many as 14,25,018 names have been deleted in Chennai
        </p>

        <img
          src={image}
          alt="News"
          className="w-full rounded-lg"
        />
      </div>

      {/* RIGHT PREMIUM */}
      <div className="hidden md:flex flex-col w-1/5">
        <h1 className="text-red-600 font-bold mb-3">Premium</h1>
        <h2 className="text-sm font-semibold mb-1">
          A bold step amid an ambitious nuclear energy target
        </h2>
        <p className="text-xs text-gray-500">
          R.B. Grover
        </p>
      </div>

    </div>
  )
}

export default Home

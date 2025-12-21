import React from "react";
import { ArrowRight } from 'lucide-react';
const Home = () => {
    return (
        <div className="w-full bg-white">

            <h1 className="text-4xl font-bold text-center mt-10 mb-8 text-red-700">The Top Headlines</h1>
            {/* Main Section */}


            <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 px-4 py-6">

                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                    <div>
                        <img
                            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202512/imran-khan--bushra-bibi--imran-khan-bushra-bibi--imran-khan-bushra-bibi-marriage--imran-khan-in-jail-244343734-16x9.png?VersionId=d2ITu5xNcvgwEUMyY2ZTn5oHJpH45O_c&size=690:388"
                            alt=""
                            className="w-full"
                        />
                        <p className="text-red-600 text-sm font-semibold mt-2">WORLD</p>
                        <h3 className="font-semibold">
                            Former Pak PM Imran Khan sentenced in corruption case
                        </h3>
                    </div>

                    <div>
                        <img
                            src="https://th-i.thgim.com/public/incoming/9k2prg/article70417427.ece/alternates/LANDSCAPE_1200/2025-12-19T101652Z_858124792_RC2LJIAQ29HC_RTRMADP_3_BANGLADESH-POLITICS.JPG"
                            alt=""
                            className="w-full"
                        />
                        <p className="text-red-600 text-sm font-semibold mt-2">WORLD</p>
                        <h3 className="font-semibold">
                            Bangladesh violence: UN rights chief calls for peace
                        </h3>
                    </div>
                </div>

                {/* Center Column */}
                <div className="lg:col-span-2">
                    <img
                        src="https://th-i.thgim.com/public/incoming/5abg43/article70419448.ece/alternates/LANDSCAPE_1200/PTI12_20_2025_000167B.jpg"
                        className="w-full"
                    />
                    <p className="text-red-600 text-sm font-semibold mt-3">INDIA</p>
                    <h2 className="text-2xl font-bold leading-snug mt-1">
                        Modi Government bulldozed MGNREGA, says Sonia Gandhi,
                        vows fight against ‘black law’
                    </h2>
                    <p className="text-gray-600 mt-2">
                        “By weakening MGNREGA, the Modi Government attacked the
                        interests of millions of farmers and labourers,” she said.
                    </p>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1 space-y-6">
                    <div>
                        <p className="text-red-600 text-sm font-semibold">INDIA</p>
                        <h4 className="font-semibold">
                            People need freedom from mahajungle-raj in West Bengal: PM
                        </h4>
                    </div>

                    <div>
                        <p className="text-red-600 text-sm font-semibold">WORLD</p>
                        <h4 className="font-semibold">
                            U.S. says it struck Islamic State targets in Syria
                        </h4>
                    </div>

                    <div>
                        <p className="text-red-600 text-sm font-semibold">KERALA</p>
                        <h4 className="font-semibold">
                            Sreenivasan, renowned Malayalam actor, passes away
                        </h4>
                    </div>
                    <div>
                        <img
                            src="https://th-i.thgim.com/public/incoming/9k2prg/article70417427.ece/alternates/LANDSCAPE_1200/2025-12-19T101652Z_858124792_RC2LJIAQ29HC_RTRMADP_3_BANGLADESH-POLITICS.JPG"
                            alt=""

                            className="w-full"
                        />
                        <p className="text-red-600 text-sm font-semibold mt-2">WORLD</p>
                        <h3 className="font-semibold">
                            Bangladesh violence: UN rights chief calls for peace
                        </h3>
                    </div>
                </div>
            </main>
            <div className="w-full flex justify-center items-center">
                <button className="px-6 py-3 flex gap-1 border mt-8 mb-8 text-center bg-red-600 text-white hover:bg-white hover:text-red-500 hover:border-red-400 rounded-md font-bold">View to More News <ArrowRight /></button>
            </div>

        </div>

    );
};

export default Home;

import React from "react";

const Home = () => {
    return (
        <div className="w-full bg-white">

            <h1 className="text-4xl font-bold text-center mt-10 mb-8 text-red-600">The Top Headlines</h1>
            {/* Main Section */}
            

            <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 px-4 py-6">

                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1761839258289-72f12b0de058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
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
                            src="https://images.unsplash.com/photo-1761839258289-72f12b0de058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
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
                        src="https://images.unsplash.com/photo-1761839258289-72f12b0de058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                        alt=""
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
                            src="https://images.unsplash.com/photo-1761839258289-72f12b0de058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
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
        </div>
    );
};

export default Home;

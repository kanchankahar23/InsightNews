import React from "react";

const Middle = () => {
    return (
        <section className="w-full px-10 py-8 ">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                    <h3 className="text-red-600 font-semibold mb-4">Latest</h3>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <p className="font-semibold">
                                A bold step amid an ambitious nuclear energy target
                            </p>
                            <span className="text-gray-500 text-xs">R.B. Grover</span>
                        </li>
                        <li>
                            <p className="font-semibold">
                                A bold step amid an ambitious nuclear energy target
                            </p>
                            <span className="text-gray-500 text-xs">R.B. Grover</span>
                        </li>
                        <li>
                            <p className="font-semibold">
                                A bold step amid an ambitious nuclear energy target
                            </p>
                            <span className="text-gray-500 text-xs">R.B. Grover</span>
                        </li>

                        <li>
                            <p className="font-semibold">
                                A bold step amid an ambitious nuclear energy target
                            </p>
                            <span className="text-gray-500 text-xs">R.B. Grover</span>
                        </li>

                        <li>
                            <p className="font-semibold">
                                From the ‘Sincaraz’ takeover to the Sabalenka makeover
                            </p>
                            <span className="text-gray-500 text-xs">N. Sudarshan</span>
                        </li>

                        <li>
                            <p className="font-semibold">
                                Polavaram displaced families look to tide over livelihood crisis
                            </p>
                            <span className="text-gray-500 text-xs">Kallol Bhattacharjee</span>
                        </li>
                    </ul>
                </div>
                <div className="lg:col-span-6">
                    <span className="text-red-600 font-semibold text-sm">India</span>

                    <h2 className="text-2xl font-bold leading-snug mt-2">
                        Centre to review electoral roll revision process nationwide
                    </h2>

                    <p className="text-gray-600 mt-3 text-sm">
                        The Election Commission is expected to examine complaints related to
                        large-scale deletions and inclusions during recent verification drives.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
                        alt="news"
                        className="w-full rounded-md mt-4"
                    />

                    <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                        Officials said the review would focus on transparency, grievance
                        redressal, and ensuring that no eligible voter is excluded from the rolls.
                    </p>
                </div>
                <div className="lg:col-span-3">
                    <h3 className="text-red-600 font-semibold mb-4">Premium</h3>

                    <div className="space-y-4 text-sm">
                        <div>
                            <p className="font-semibold">
                                Why India’s nuclear future depends on policy clarity
                            </p>
                            <span className="text-gray-500 text-xs">R.B. Grover</span>
                        </div>

                        <div>
                            <p className="font-semibold">
                                The economics behind rising subscription journalism
                            </p>
                            <span className="text-gray-500 text-xs">Editorial</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Middle;

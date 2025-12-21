import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-3xl font-serif font-bold">INSIGHT NEWS</h1>

          <div className="flex gap-4 mt-4 md:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">

          <div>
            <h3 className="font-semibold border-b pb-2 mb-3">Insight News</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Editorial Values</li>
              <li>News Archive</li>
              <li>Sitemap</li>
              <li>Digital Subscription</li>
              <li>RSS Feeds</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold border-b pb-2 mb-3">Other Products</h3>
            <ul className="space-y-2">
              <li>Images</li>
              <li>Classifieds</li>
              <li>Books</li>
              <li>Special Publications</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold border-b pb-2 mb-3">Business</h3>
            <ul className="space-y-2">
              <li>Economy</li>
              <li>Markets</li>
              <li>Industry</li>
              <li>Budget</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold border-b pb-2 mb-3">Sports</h3>
            <ul className="space-y-2">
              <li>Cricket</li>
              <li>Football</li>
              <li>Tennis</li>
              <li>Other Sports</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold border-b pb-2 mb-3">Cities</h3>
            <ul className="space-y-2">
              <li>Bengaluru</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Hyderabad</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold border-b pb-2 mb-3">Trending</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Latest News</span>
                <span className="text-red-500">↗</span>
              </li>
              <li className="flex justify-between">
                <span>Stock Market</span>
                <span className="text-red-500">↗</span>
              </li>
              <li className="flex justify-between">
                <span>IPL Updates</span>
                <span className="text-red-500">↗</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          © 2025 Insight News. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

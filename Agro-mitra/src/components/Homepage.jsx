import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen w-full bg-[#fcfaf8] overflow-x-hidden" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between border-b border-solid border-b-[#f4eee7] px-4 sm:px-10 py-3">
          <div className="flex items-center gap-4 text-[#1c150d]">
            <div className="w-8 h-8">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#1c150d] text-lg font-bold leading-tight tracking-[-0.015em]">CropCare AI</h2>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <nav className="hidden sm:flex items-center gap-4 sm:gap-9">
              <Link to="/Services" className="text-[#1c150d] text-sm font-medium leading-normal">Services</Link>
              <Link to="/AboutUs" className="text-[#1c150d] text-sm font-medium leading-normal">About Us</Link>
              <Link to="/GovernmentScheme" className="text-[#1c150d] text-sm font-medium leading-normal">Government Scheme</Link>
              <Link to="/Contact" className="text-[#1c150d] text-sm font-medium leading-normal">Contact</Link>
            </nav>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f49a25] text-[#1c150d] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Get Started</span>
              </button>
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f4eee7] text-[#1c150d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="w-full max-w-6xl mx-auto">
              <div className="mb-12">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 sm:px-10 pb-10"
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/58040ba1-58a0-43f1-befe-3068eef5bf71.png")'}}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                      AI-Powered Soil Analysis
                    </h1>
                    <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                      Understand soil health, nutrient levels, and more with our AI-powered soil analysis. Get actionable insights for better crop care.
                    </h2>
                  </div>
                  <div className="w-full max-w-[480px]">
                    <div className="flex w-full items-stretch rounded-xl h-14 sm:h-16">
                      <div className="text-[#9c7849] flex border border-[#e8ddce] bg-[#fcfaf8] items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </div>
                      <input
                        placeholder="Enter your location"
                        className="flex-grow form-input min-w-0 resize-none overflow-hidden text-[#1c150d] focus:outline-none focus:ring-0 border border-[#e8ddce] bg-[#fcfaf8] focus:border-[#e8ddce] placeholder:text-[#9c7849] px-[15px] rounded-none border-l-0 text-sm sm:text-base font-normal leading-normal"
                      />
                      <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#e8ddce] bg-[#fcfaf8] pr-[7px]">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#f49a25] text-[#1c150d] text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                          <span className="truncate">Analyze Soil</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-[#1c150d] text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.033em] mb-4">
                  Unlock the full potential of your crops
                </h2>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#f49a25] text-[#1c150d] text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Learn More</span>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  "https://cdn.usegalileo.ai/stability/b025b8d6-95f1-4937-9ca5-0cdff0d4bcbc.png",
                  "https://cdn.usegalileo.ai/sdxl10/764d599b-322d-4c27-b15f-9a7694dd8cd3.png",
                  "https://cdn.usegalileo.ai/stability/7ead4119-5b15-4d3b-9bdb-4128eab290b8.png"
                ].map((url, index) => (
                  <div key={index} className="aspect-video">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl"
                      style={{backgroundImage: `url("${url}")`}}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h2 className="text-[#1c150d] text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.033em] mb-6">
                  Ready to grow smarter?
                </h2>
                <button className="inline-flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#f49a25] text-[#1c150d] text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
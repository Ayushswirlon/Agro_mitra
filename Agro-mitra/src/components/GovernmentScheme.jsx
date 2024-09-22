
import React from 'react';

const schemes = [
  "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
  "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
  "National Mission for Sustainable Agriculture (NMSA)",
  "Soil Health Card Scheme (SHC)",
  "Paramparagat Krishi Vikas Yojana (PKVY)",
  "National Agriculture Market (e-NAM)",
  "Rashtriya Krishi Vikas Yojana (RKVY)",
  "Agriculture Technology Management Agency (ATMA)",
  "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)"
];

const Icon = ({ children }) => (
  <div className="text-[#1c150d] flex size-7 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      {children}
    </svg>
  </div>
);

const MenuItem = ({ icon, text, isActive }) => (
  <div className={`flex items-center gap-3 px-3 py-2 ${isActive ? 'rounded-xl bg-[#f4eee7]' : ''}`}>
    <Icon>{icon}</Icon>
    <p className="text-[#1c150d] text-sm font-medium leading-normal">{text}</p>
  </div>
);

const SchemeItem = ({ name }) => (
  <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14 justify-between">
    <p className="text-[#1c150d] text-base font-normal leading-normal flex-1 truncate">{name}</p>
    <div className="shrink-0">
      <Icon>
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
      </Icon>
    </div>
  </div>
);

export default function GovernmentSchemes() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#fcfaf8] p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <MenuItem 
                    icon={<path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z" />} 
                    text="Home" 
                  />
                  <MenuItem 
                    icon={<path d="M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,151c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,168,54.58,54.58,0,0,0,87,162.33l25,25V216a8,8,0,0,0,16,0V186.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,133.21,250.67,91.65,247.63,39.89ZM47.81,147.6C32.47,138.31,23.79,116.32,24,88c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,114.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,153.24,55.82,152.45,47.81,147.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,128c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,90.34,220.14,123.44,197.12,137.38Z" />} 
                    text="Crop care" 
                  />
                  <MenuItem 
                    icon={<path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />} 
                    text="Farmers" 
                  />
                  <MenuItem 
                    icon={<path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm-36,80a12,12,0,1,1,12-12A12,12,0,0,1,180,152Z" />} 
                    text="Government Schemes" 
                    isActive 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#1c150d] tracking-light text-[32px] font-bold leading-tight">Government Schemes</p>
                <p className="text-[#9c7849] text-sm font-normal leading-normal">Explore and apply for government subsidies, loans, and schemes</p>
              </div>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#9c7849] flex border-none bg-[#f4eee7] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <Icon>
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </Icon>
                  </div>
                  <input
                    placeholder="Search for a scheme or loan"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c150d] focus:outline-0 focus:ring-0 border-none bg-[#f4eee7] focus:border-none h-full placeholder:text-[#9c7849] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  />
                </div>
              </label>
            </div>
            <h2 className="text-[#1c150d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Schemes and Subsidies</h2>
            {schemes.map((scheme, index) => (
              <SchemeItem key={index} name={scheme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

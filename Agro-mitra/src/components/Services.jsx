import React from 'react';

const ServiceCard = ({ title, description, imageUrl }) => (
  <div className="p-4 @container">
    <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
        <p className="text-[#1c150d] text-lg font-bold leading-tight tracking-[-0.015em]">{title}</p>
        <div className="flex items-end gap-3 justify-between">
          <p className="text-[#9c7849] text-base font-normal leading-normal">{description}</p>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f49a25] text-[#1c150d] text-sm font-medium leading-normal"
          >
            <span className="truncate">Order Now</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4eee7] px-10 py-3">
          <div className="flex items-center gap-4 text-[#1c150d]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#1c150d] text-lg font-bold leading-tight tracking-[-0.015em]">CropCare AI</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#1c150d] text-sm font-medium leading-normal" href="/">Home</a>
              <a className="text-[#1c150d] text-sm font-medium leading-normal" href="/GovernmentScheme">GovernmentScheme</a>
              <a className="text-[#1c150d] text-sm font-medium leading-normal" href="/AboutUs">About</a>
              <a className="text-[#1c150d] text-sm font-medium leading-normal" href="/Contact">Contact</a>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4eee7] text-[#1c150d] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Login</span>
            </button>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#1c150d] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Our Services</p>
            </div>
            <h3 className="text-[#1c150d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Soil Analysis</h3>
            <ServiceCard
              title="Soil Testing"
              description="Get a detailed soil report for a healthy crop"
              imageUrl="https://cdn.usegalileo.ai/stability/7f23d530-6905-48fd-8784-92f185bc457f.png"
            />
            <h3 className="text-[#1c150d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Crop Suggestions</h3>
            <ServiceCard
              title="Crop Planning"
              description="Get personalized crop suggestions and planting schedules"
              imageUrl="https://cdn.usegalileo.ai/sdxl10/0bfa7172-b78a-46c2-a61a-c8b3d659fc15.png"
            />
            <h3 className="text-[#1c150d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Pest Management</h3>
            <ServiceCard
              title="Pest Control"
              description="Identify and manage pests, diseases, and weeds"
              imageUrl="https://cdn.usegalileo.ai/stability/af83476b-60aa-44d5-9798-b23b79511dd6.png"
            />
            <h3 className="text-[#1c150d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Irrigation Management</h3>
            <ServiceCard
              title="Irrigation Scheduling"
              description="Optimize your irrigation system for water efficiency"
              imageUrl="https://cdn.usegalileo.ai/stability/1770b0f0-6c53-4274-b9dc-68942b364d18.png"
            />
            <h3 className="text-[#1c150d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Nutrient Management</h3>
            <ServiceCard
              title="Fertilizer Recommendations"
              description="Get expert guidance on fertilizer application"
              imageUrl="https://cdn.usegalileo.ai/stability/bf0bc80f-c888-41ce-b741-61eceeaeb7a4.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
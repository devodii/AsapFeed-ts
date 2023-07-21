import { CardGrid } from "./components";

const Pricing = () => {
  return (
    <main
      className={`bg-[#f9f8f9] text-gray-900 flex flex-col min-h-screen container gap-4 md:gap-8 lg:gap-12 mx-auto px-4 md:px-12 lg:px-24 py-6 md:mt-4`}
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-header-fallback">
          Start for Free, Upgrade as You Grow!
        </h1>
        <p className="text-gray-600">
          Grow with Us - Start Free, Unlock More Features
        </p>
      </div>
      
      <CardGrid />
    </main>
  );
};

export default Pricing;

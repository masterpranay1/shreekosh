const USPTitle = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-8 md:p-16">
      <h1 className="text-3xl md:text-5xl font-bold text-center flex flex-col md:flex-row gap-4">
        Our <span className="text-teal-400">Unique Selling Points</span>
      </h1>
      <p className="text-base md:text-lg text-gray-400 text-center">
        We are different from other companies in the market
      </p>
    </div>
  );
};

export default USPTitle;
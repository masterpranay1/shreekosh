const USPCard = ({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: number;
}) => {
  return (
    <div className="min-w-80 md:w-1/4 p-8 shadow-xl shadow-gray-200 bg-white flex flex-col gap-4 hover:shadow-2xl transition-all cursor-pointer">
      <span className="text-4xl md:text-6xl text-teal-200 font-bold">{number}</span>
      <h2 className="text-2xl md:text-3xl text-slate-600 font-bold uppercase">{title}</h2>
      <p className="text-base md:text-lg text-slate-400">{description}</p>
    </div>
  );
};

export default function USPCards() {
  const USPs = [
    {
      title: "Guaranteed 24/7 Access",
      description:
        "Get the medicines you need, anytime, anywhere in rural India. Shrikosh ensures reliable and timely delivery within 24 hours.",
    },
    {
      title: "One-Stop Medicine Shop",
      description:
        "No more searching for specific brands or scrambling between suppliers. Shrikosh offers a diverse range of high-quality generic, surgical, and OTC medicines, catering to all your pharmacy needs in one place.",
    },
    {
      title: "Flexible Cash Trade",
      description:
        "Manage your finances smoothly with flexible cash trade options. Enjoy convenient cash transactions with the added benefit of easy order cancellation and return policies, giving you peace of mind and control over your inventory.",
    },
    {
      title: "Competitive Prices, Top-Tier Quality",
      description:
        "At Shrikosh, you don't have to compromise affordability for quality. We offer competitive prices on a wide range of medicines, ensuring accessibility and value for your patients and community.",
    },
    {
      title: "Building a Stronger Healthcare Ecosystem",
      description:
        "Shrikosh is more than just a delivery service; it's a partner in progress. We are committed to continuously improving our delivery time and working alongside pharmacies and healthcare facilities to revolutionize the healthcare supply chain in rural India.",
    },
  ];

  return (
    <main className="flex flex-row flex-wrap justify-center gap-8 p-4 md:p-12">
      {USPs.map((USP, index) => {
        return (
          <USPCard
            title={USP.title}
            description={USP.description}
            key={index}
            number={index + 1}
          />
        );
      })}
    </main>
  );
}

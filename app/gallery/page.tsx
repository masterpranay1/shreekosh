export default function Gallery() {
  const cards = [
    {
      id: 1,
      content: "Our Warehouse Image 1",
      thumbnail: "/gallery/g1.jpeg",
      className: "h-96",
    },
    {
      id: 2,
      content: "Our Warehouse Image 2",
      thumbnail: "/gallery/g2.jpeg",
      className: "h-96",
    },
    {
      id: 3,
      content: "Our Warehouse Image 3",
      thumbnail: "/gallery/g3.jpeg",
      className: "h-96",
    },
    {
      id: 4,
      content: "Our Warehouse Image 4",
      thumbnail: "/gallery/g4.jpeg",
      className: "h-96",
    },
    {
      id: 6,
      content: "Our Warehouse Image 5",
      thumbnail: "/gallery/g6.jpeg",
      className: "h-96",
    },
    {
      id: 7,
      content: "Our Warehouse Image 6",
      thumbnail: "/gallery/g7.jpeg",
      className: "h-96",
    },
  ];

  return (
    <main className="flex flex-col items-center py-16 gap-12 px-4 md:px-12 lg:px-24 xl:px-32 border-y bg-grid-small-black/[0.2]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-800">Gallery</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="relative p-4">
              <img
                src={card.thumbnail}
                alt={card.content}
                className={`object-cover w-full ${card.className} rounded-xl`}
              />
              <div className="absolute bottom-8 left-16 flex items-center justify-center p-2 rounded-xl bg-teal-800 text-white text-center text-lg font-bold">
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

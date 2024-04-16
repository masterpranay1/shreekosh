export default function FoundingTeam() {
  return <section className="flex flex-col items-center gap-4 py-12 border-t bg-teal-50">
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-teal-800 font-bold text-center max-w-sm lg:max-w-xl">
      Meet the Founding Team
    </h2>
    <div className="flex flex-col md:flex-row gap-4 mt-12">
      <div className="w-full p-4 flex flex-col items-center gap-4">
        <img src="/founding-team/founder-1.jpg" alt="founder1" className="w-full rounded-xl max-w-sm max-h-96 object-cover"/>
        <span className="text-4xl text-center text-teal-800">Abhinav Varshney</span>
      </div>

      <div className="w-full p-4 flex flex-col items-center gap-4">
        <img src="/founding-team/founder-2.jpg" alt="founder2" className="w-full rounded-xl max-w-sm max-h-96 object-cover"/>
        <span className="text-4xl text-center text-teal-800">Chaitnaya Garg</span>
      </div>
    </div>
  </section>;
}

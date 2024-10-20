export default function Home() {
  return (
    <div>
      <main>
        {/* Use full width and center content */}
        <div className="bg-cyan h-screen flex items-center justify-start px-10">
          <div className="ml-10 max-w-xl">
            <h1 className="text-4xl font-bold text-black mb-4">
              Improve your <br /> mental well-being <br /> with Calmora
            </h1>
            <p className="text-lg text-black mb-6">
              Take a step to feeling better with the help of a licensed mental health professional. 
              Benefit from online therapy sessions and self-therapy tools.
            </p>
            <button className="bg-lightPink text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

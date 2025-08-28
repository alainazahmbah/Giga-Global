import React from 'react';

const AboutGiga: React.FC = () => {
  return (
    <>
      {/* Giga Description Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - STATS / HIGHLIGHT */}
          <div className="animate-fade-up opacity-0 animate-delay-100">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#277aff] mb-6 leading-tight">
              1 in 3 people lack Internet access
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              That includes more than <span className="font-semibold text-[#277aff]">1.3 billion children</span> who have no access at home.
              An estimated <span className="font-semibold text-[#277aff]">half of the world’s schools</span> remain offline.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Without Internet access, children miss out on learning and opportunities in today’s digital world.
            </p>
          </div>

          {/* RIGHT SIDE - GIGA MISSION */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-md animate-fade-up opacity-0 animate-delay-300">
            <h3 className="text-2xl font-semibold text-[#277aff] mb-4">What is Giga?</h3>
            <p className="text-md text-gray-800 leading-relaxed">
              <span className="font-semibold">Giga</span> is a joint initiative by the 
              <span className="text-[#277aff] font-medium"> United Nations Children’s Fund (UNICEF)</span> and the 
              <span className="text-[#277aff] font-medium"> International Telecommunication Union (ITU)</span>.
              <br /><br />
              It’s working to <span className="font-semibold text-[#277aff]">connect every school in the world to the Internet</span>, 
              and every young person to information, opportunity, and choice.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact Video Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* VIDEO CARD */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video link
                title="Giga Impact Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="animate-fade-up opacity-0 animate-delay-200">
            <h2 className="text-4xl font-bold text-[#277aff] mb-4">Our Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our open-source connectivity solutions and innovative technologies
              have helped countries, transformed communities, and changed lives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGiga;

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              porttitor ultrices hendrerit. Curabitur sed turpis at arcu
              bibendum bibendum in eu lectus. Sed vehicula libero vel felis
              tristique, non rhoncus sapien volutpat.
            </p>
            <p className="text-gray-600 leading-loose mt-4">
              Vivamus auctor, velit at suscipit eleifend, metus ligula varius
              nisi, eu vehicula ipsum odio at arcu. Sed eget vestibulum purus,
              id pharetra lectus.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/path-to-your-image.jpg"
              alt="Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

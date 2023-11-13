import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-black-700">Welcome to Our Bookstore!</h1>
        <p className="text-gray-700">
          At bookstore.com, we are on a mission to connect readers with the magic of
          literature. Our online bookstore is a haven for book lovers, offering a carefully
          curated selection of titles that cater to diverse tastes and interests.
        </p>
        <p className="text-gray-700 mt-4">
          Whether you're an avid reader, a casual bookworm, or a gift seeker, we've crafted
          an immersive experience for you. Navigate through our user-friendly platform,
          explore the latest releases, and discover hidden literary treasures.
        </p>
        <p className="text-gray-700 mt-4">
          Thank you for choosing bookstore.com as your literary companion. Embark on a
          journey of stories, knowledge, and imagination. Happy reading!
        </p>
      </div>
    </div>
  );
};

export default About;



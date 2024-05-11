import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const iconSize = "lg"; // Adjust the size here

  return (
    <div className="bg-black text-white px-4 py-8">
      <div className="container mx-auto flex justify-start">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold  mb-4">Hello, It's Me</h1>
          <h2 className="text-5xl font-bold mb-4">Emmanuel Ramamoorthy</h2>
          <p className="text-lg text-gray-200 mb-4">And I'm a Solidity Smart Contract Developer.</p>
          <p className="text-lg text-gray-200 mb-4">I'm a Web3 Developer with extensive training experience for over 2 years. Expertise is to create and design website design, Front-End, Back-End and many more...</p>
          <div className="flex items-center space-x-4">
            <div className="relative rounded-full p-3 border-2 border-white">
              <a href="https://www.linkedin.com/in/emmanuel-ramamoorthy-987429257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icon-link">
                <FontAwesomeIcon icon={faLinkedin} size={iconSize} className="text-white" />
              </a>
            </div>
            <div className="relative rounded-full p-3 border-2 hover:bg-gradient-to-r from-emerald-500 via-yellow-400 to-pink-500 border-white">
              <a href="https://github.com/EmmanuellDev" className="icon-link">
                <FontAwesomeIcon icon={faGithub} size={iconSize} className="text-white" />
              </a>
            </div>
            <div className="relative rounded-full p-3 border-2 hover:border-emerald-500  border-white">
              <a href="https://x.com/EmmanuelRsk04?t=AEelaoVhycRCkJ09zyVckQ&s=09" className="icon-link">
                <FontAwesomeIcon icon={faTwitter} size={iconSize} className="text-white" />
              </a>
            </div>
            <div className="relative rounded-full p-3 border-2 border-white">
              <a href="https://discord.com/emmanuelrsk" className="icon-link">
                <FontAwesomeIcon icon={faDiscord} size={iconSize} className="text-white hover:text-emerald-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

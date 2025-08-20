import React from 'react';
import { Link } from 'react-router-dom';
import LightRays from './LightRays';
import ProfileCard from './ProfileCard'; // Re-importing ProfileCard
import TextType from './TextType'; // Importing TextType

const LandingPage = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between h-screen bg-black">
            <LightRays
                raysOrigin="top-center"
                raysColor="#00ffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="custom-rays"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center pl-5 md:pl-20">
                <TextType 
                    text={["Welcome to My Digital Space", "Explore my work and let's connect!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-4xl md:text-5xl font-extrabold text-center md:text-left bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 bg-clip-text text-transparent drop-shadow-[0_0_12px rgba(200,200,200,0.9)]"

                />
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <Link
                        to="/main"
                        className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}
                    >
                        <span className="relative z-10">View My Profile</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    <Link
                        to="/book-call"
                        className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}
                    >
                        <span className="relative z-10">Book a Call</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </div>
            </div>
            <div className="absolute right-0 flex justify-center w-full md:w-1/3 pr-10 hidden md:flex">
                <ProfileCard
                    name="Harsh Kumar"
                    title="Software Engineer"
                    handle="harshcodes"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="src\assets\hi.png"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>
        </div>
    );
};

export default LandingPage;

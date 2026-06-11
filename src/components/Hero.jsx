import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/about_me.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        loop
        muted
        autoPlay
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <span data-aos="fade-up" className="text-[#ff2a2a] font-bold text-sm tracking-[0.3em] uppercase mb-4">
            Full Stack Developer
          </span>

          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-[1.1]"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-orange-400">Yahya_Ayz</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">I build digital experiences</span>
          </h1>

          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-sm md:text-lg font-medium mb-8 max-w-lg leading-relaxed"
          >
            Full-stack developer based in Qatar & Sri Lanka. I craft fast, scalable, and modern web applications 
            using React, Node.js, and cutting-edge technologies.
          </p>

          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </Link>
            
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={toggleMute}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {isMuted ? (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8.5v7a4.49 4.49 0 0 0 2.5-3.5zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8.5v7a4.49 4.49 0 0 0 2.5-3.5zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm4 8.77c0-2.22-1.21-4.15-3-5.19v10.38c1.79-1.04 3-2.97 3-5.19z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {isMuted ? "Unmute" : "Mute"}
          </span>
        </div>

      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center text-xs md:text-sm">
          {[
            { label: 'Experience', value: '5+ Years' },
            { label: 'Projects', value: '30+ Done' },
            { label: 'Tech Stack', value: '10+ Tools' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-[#ff2a2a] font-black">{stat.value}</span>
              <span className="text-gray-500 hidden sm:inline">{stat.label}</span>
            </div>
          ))}
          <div className="text-gray-500">
            <span className="text-green-400 mr-1">&#9679;</span> Available for work
          </div>
        </div>
      </div>

      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white/60" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import GitHubProfile from "@/components/GitHubProfile";
import SnowParticles from "@/components/SnowParticles";
import MoneyRain from "@/components/MoneyRain";
import InView from "@/components/InView";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main className="flex-1 bg-gray-900 relative">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        
        .hero-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }
      `}</style>
      
      {/* Hero Section with Snow */}
      <div className="hero-section relative">
        <SnowParticles />
      
        {/* Two column section: GitHub on left, Discord on right */}
        <section className="grid grid-cols-2 gap-8 p-8 min-h-screen items-center relative z-0">
          {/* Left - GitHub Profile */}
          <div className="flex items-center justify-center animate-fade-in-left delay-200">
            <GitHubProfile />
          </div>

          {/* Right - Card with Text */}
          <div className="flex items-center justify-center animate-fade-in-right delay-300">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 max-w-md text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Welcome 👋 </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
I'm a Computer Science student and a fullstack Roblox developer. I also program in other languages ​​and enjoy building diverse experiences
              </p>
              
              <div className="flex justify-center">
                <img 
                  src="https://skillicons.dev/icons?i=js,ts,nodejs,python,git,github" 
                  alt="Skills"
                  className="w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="min-h-screen bg-gray-900 py-20 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <InView delay="delay-200">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-12">
              <h2 className="text-4xl font-bold text-white mb-6">What I Do</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a developer with 3-4 years of specialized experience in Roblox development. I focus on creating immersive gaming experiences by combining strong front-end and back-end development skills. My expertise includes building complex gameplay systems, optimizing performance, and crafting engaging user interfaces.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Beyond Roblox, I work with multiple programming languages and technologies, constantly expanding my skillset to solve diverse problems. I'm passionate about turning creative ideas into interactive experiences of game development innovation.
              </p>
            </div>
          </InView>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-900 py-2 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Chat AI Roblox */}
            <InView delay="delay-200">
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <video 
                  width="100%" 
                  height="auto" 
                  controls
                  muted
                  className="w-full bg-black"
                >
                  <source src={`${BASE_PATH}/youtube/YTDown.com_YouTube_Chat-ai-Roblox-Studio-using-py_Media_j70S3iJ2rFs_001_1080p.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Chat AI Roblox Studio</h3>
                  <p className="text-gray-300">Building AI chatbot system for Roblox Studio using Python</p>
                </div>
              </div>
            </InView>

            {/* Project 2 - Fishing System */}
            <InView delay="delay-300">
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <video 
                  width="100%" 
                  height="auto" 
                  controls
                  muted
                  className="w-full bg-black"
                >
                  <source src={`${BASE_PATH}/youtube/YTDown.com_YouTube_fishing-system_Media_BhVTv-5rh6k_001_1080p.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Fishing System</h3>
                  <p className="text-gray-300">Interactive fishing mechanics and gameplay system</p>
                </div>
              </div>
            </InView>

            {/* Project 3 - Glide System */}
            <InView delay="delay-400">
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <video 
                  width="100%" 
                  height="auto" 
                  controls
                  muted
                  className="w-full bg-black"
                >
                  <source src={`${BASE_PATH}/youtube/YTDown.com_YouTube_glide-system_Media_7kEfGT7EEI_001_1080p.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Glide System</h3>
                  <p className="text-gray-300">Advanced movement and gliding mechanics</p>
                </div>
              </div>
            </InView>

            {/* Project 4 - Garden System */}
            <InView delay="delay-500">
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <video 
                  width="100%" 
                  height="auto" 
                  controls
                  muted
                  className="w-full bg-black"
                >
                  <source src={`${BASE_PATH}/youtube/YTDown.com_YouTube_Grow-a-Garden-System_Media_3uWj-QtPzIw_001_1080p.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Grow a Garden System</h3>
                  <p className="text-gray-300">Complete gardening gameplay with growth mechanics</p>
                </div>
              </div>
            </InView>

            {/* Project 5 - Menu Touchable */}
            <InView delay="delay-500">
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <video 
                  width="100%" 
                  height="auto" 
                  controls
                  muted
                  className="w-full bg-black"
                >
                  <source src={`${BASE_PATH}/youtube/YTDown.com_YouTube_menu-touchable_Media_nSEtiJYDI70_001_1080p.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Menu Touchable</h3>
                  <p className="text-gray-300">Interactive and responsive menu system</p>
                </div>
              </div>
            </InView>

            {/* Project 6 */}
            <InView delay="delay-600">
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <video 
                  width="100%" 
                  height="auto" 
                  controls
                  muted
                  className="w-full bg-black"
                >
                  <source src={`${BASE_PATH}/youtube/2026-03-30 02-40-12.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Spotify-Extension</h3>
                  <p className="text-gray-300">Save your music automatically when you listen, based on a percentage.</p>
                </div>
              </div>
            </InView>
          </div>
        </div>
      </section>

      {/* Payment & Contact Section */}
      <section id="contact" className="bg-gray-900 py-20 px-8 relative overflow-hidden">
        <MoneyRain />
        <div className="max-w-6xl mx-auto relative z-10">
          <InView delay="delay-200">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Payment Method */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Payment Method</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Payment is accepted exclusively through PayPal. We use this secure and reliable platform to handle all transactions.
                </p>
              </div>

              {/* Contact Me */}
              <div className="flex flex-col items-center justify-center border-l border-gray-700 pl-12">
                <img 
                  src={`${BASE_PATH}/icon-discord.gif`}
                  alt="! ∀∀∀"
                  className="w-24 h-24 rounded-full border-2 border-purple-500 mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-6">! ∀∀∀</h3>
                
                <a 
                  href="https://discordapp.com/users/670291485530259479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.009-.119c.125-.093.25-.19.371-.287a.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.195.371.288a.072.072 0 0 1-.01.119c-.598.349-1.222.648-1.871.892a.07.07 0 0 0-.038.099c.36.687.772 1.341 1.225 1.937a.076.076 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.556-4.751-.94-8.968-3.968-12.68a.06.06 0 0 0-.031-.03zM8.02 15.278c-1.122 0-2.05-1.027-2.05-2.285c0-1.258.904-2.286 2.05-2.286c1.159 0 2.067 1.027 2.05 2.286c0 1.258-.904 2.285-2.05 2.285zm7.975 0c-1.122 0-2.05-1.027-2.05-2.285c0-1.258.904-2.286 2.05-2.286c1.159 0 2.067 1.027 2.05 2.286c0 1.258-.891 2.285-2.05 2.285z" />
                  </svg>
                  Contact on Discord
                </a>
              </div>
            </div>
            </div>
          </InView>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8 px-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 emmA. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}

import GitHubProfile from "@/components/GitHubProfile";
import ProjectCard from "@/components/ProjectCard";
import InView from "@/components/InView";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const projects = [
  {
    title: "Chat AI Roblox Studio",
    description: "AI chatbot system for Roblox Studio, built with Python.",
    video: "chat-ai-roblox-studio.mp4",
  },
  {
    title: "Fishing System",
    description: "Interactive fishing mechanics and gameplay system.",
    video: "fishing-system.mp4",
  },
  {
    title: "Glide System",
    description: "Advanced movement and gliding mechanics.",
    video: "glide-system.mp4",
  },
  {
    title: "Grow a Garden System",
    description: "Complete gardening gameplay with growth mechanics.",
    video: "grow-a-garden-system.mp4",
  },
  {
    title: "Menu Touchable",
    description: "Interactive and responsive menu system.",
    video: "menu-touchable.mp4",
  },
  {
    title: "Spotify Extension",
    description: "Automatically saves the music you listen to, based on a completion percentage.",
    video: "spotify-extension.mp4",
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
        <div className="flex items-center justify-center animate-fade-in-left delay-200">
          <GitHubProfile />
        </div>

        <div className="flex items-center justify-center animate-fade-in-right delay-300">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 max-w-md text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I&apos;m a Computer Science student and full-stack Roblox developer. I also work
              with other languages and enjoy building diverse software experiences.
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

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <InView delay="delay-200">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-12">
              <h2 className="text-4xl font-bold text-white mb-6">What I Do</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m a developer with 3-4 years of specialized experience in Roblox
                development. I focus on creating immersive gaming experiences by combining
                strong front-end and back-end development skills. My expertise includes
                building complex gameplay systems, optimizing performance, and crafting
                engaging user interfaces.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Beyond Roblox, I work with multiple programming languages and technologies,
                constantly expanding my skillset to solve diverse problems. I&apos;m
                passionate about turning creative ideas into interactive experiences.
              </p>
            </div>
          </InView>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-2 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <InView key={project.title} delay={`delay-${Math.min(200 + index * 100, 600)}`}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  videoSrc={`${BASE_PATH}/youtube/${project.video}`}
                />
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Contact Section */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <InView delay="delay-200">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Payment Method */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Payment Method</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Payment is accepted exclusively through PayPal. We use this secure and
                    reliable platform to handle all transactions.
                  </p>
                </div>

                {/* Contact Me */}
                <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-700 pt-12 md:pt-0 md:pl-12">
                  <img
                    src={`${BASE_PATH}/icon-discord.gif`}
                    alt="emmA on Discord"
                    className="w-24 h-24 rounded-full border-2 border-purple-500 mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-6">emmA</h3>

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
    </main>
  );
}

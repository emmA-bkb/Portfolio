import GitHubProfile from "@/components/GitHubProfile";
import ProjectCard from "@/components/ProjectCard";
import InView from "@/components/InView";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const skills = ["JavaScript", "TypeScript", "Node.js", "Python", "Lua", "Git"];

const highlights = [
  { value: "3-4 yrs", label: "Roblox development" },
  { value: "6+", label: "Shipped systems" },
  { value: "Full-stack", label: "Front-end & back-end" },
  { value: "Multi-lang", label: "JS · TS · Python · Lua" },
];

const projects = [
  {
    title: "Chat AI Roblox Studio",
    description: "AI chatbot system for Roblox Studio, built with Python.",
    video: "chat-ai-roblox-studio.mp4",
    tags: ["Python", "Roblox Studio", "AI"],
  },
  {
    title: "Ocean System",
    description: "Physics-based ocean system with dynamic waves and buoyancy.",
    video: "ocean-system.mp4",
    tags: ["Lua", "Physics", "Roblox Studio"],
    allowVolume: true,
  },
  {
    title: "Glide System",
    description: "Advanced movement and gliding mechanics.",
    video: "glide-system.mp4",
    tags: ["Lua", "Physics"],
  },
  {
    title: "Grow a Garden System",
    description: "Complete gardening gameplay with growth mechanics.",
    video: "grow-a-garden-system.mp4",
    tags: ["Lua", "Systems Design"],
  },
];

export default function Home() {
  return (
    <main className="flex-1 relative">
      {/* Hero */}
      <section className="px-6 pt-20 pb-28 md:pt-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div className="animate-fade-in-left delay-100">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-4">
              Full-Stack Roblox Developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Hi, I&apos;m <span className="text-red-400">emmA</span>.
              <br />
              I build interactive game experiences.
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mb-8">
              Computer Science student and full-stack Roblox developer with 3-4 years of
              experience building complex gameplay systems, optimizing performance, and crafting
              engaging user interfaces. I also work across other languages and enjoy building
              diverse software.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-white/15 hover:border-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right delay-300">
            <GitHubProfile />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <InView delay="delay-200">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What I Do</h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                I am a software developer and Computer Science student, specializing in the
                development of robust, scalable, and high-quality systems.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                I have experience with multiple{" "}
                <strong className="text-white font-semibold">programming languages</strong>,
                including{" "}
                <strong className="text-white font-semibold">
                  Lua, Luau, JavaScript, TypeScript, C#, and Python
                </strong>
                .
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                In addition to programming languages, I have extensive experience with{" "}
                <strong className="text-white font-semibold">
                  libraries, frameworks, and development tools
                </strong>
                , including{" "}
                <strong className="text-white font-semibold">
                  Roact, Bytenet, ProfileStore, BitAntiCheat, TopBarPlus, Satchel
                </strong>
                , among others. I leverage these technologies to build performant, maintainable,
                and well-structured systems while following modern software engineering
                practices.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                I develop systems from the ground up, maintain existing projects, fix bugs,
                optimize performance, and refactor code. My primary goal is to deliver clean,
                modular, and scalable solutions with a strong emphasis on architecture, code
                quality, and maintainability.
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Every project I build is designed with long-term maintenance in mind. I
                prioritize clear project organization, comprehensive documentation, and readable
                code, ensuring that other developers can quickly understand the codebase and
                extend or modify it without unnecessary complexity.
              </p>
            </div>
          </InView>

          <InView delay="delay-300">
            <div className="grid grid-cols-2 gap-4 md:sticky md:top-28">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-red-400/30 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="text-2xl font-bold text-red-400 mb-1">{h.value}</div>
                  <div className="text-sm text-neutral-400">{h.label}</div>
                </div>
              ))}
            </div>
          </InView>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Projects</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              A selection of gameplay systems, tools, and experiments I&apos;ve built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <InView key={project.title} delay={`delay-${Math.min(200 + index * 100, 600)}`}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  videoSrc={`${BASE_PATH}/youtube/${project.video}`}
                  tags={project.tags}
                  allowVolume={project.allowVolume}
                />
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <InView delay="delay-200">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12">
              {/* Contact */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s work together</h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  Have a project in mind or just want to say hi? I&apos;m most responsive on
                  Discord.
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={`${BASE_PATH}/icon-discord.jpg`}
                    alt="! qeuzy"
                    className="w-14 h-14 rounded-full border-2 border-red-500"
                  />
                  <div>
                    <div className="text-white font-semibold">! qeuzy</div>
                    <div className="text-neutral-500 text-sm">Usually replies within a day</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://discordapp.com/users/670291485530259479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.009-.119c.125-.093.25-.19.371-.287a.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.195.371.288a.072.072 0 0 1-.01.119c-.598.349-1.222.648-1.871.892a.07.07 0 0 0-.038.099c.36.687.772 1.341 1.225 1.937a.076.076 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.556-4.751-.94-8.968-3.968-12.68a.06.06 0 0 0-.031-.03zM8.02 15.278c-1.122 0-2.05-1.027-2.05-2.285c0-1.258.904-2.286 2.05-2.286c1.159 0 2.067 1.027 2.05 2.286c0 1.258-.904 2.285-2.05 2.285zm7.975 0c-1.122 0-2.05-1.027-2.05-2.285c0-1.258.904-2.286 2.05-2.286c1.159 0 2.067 1.027 2.05 2.286c0 1.258-.891 2.285-2.05 2.285z" />
                    </svg>
                    Message on Discord
                  </a>
                  <a
                    href="https://discord.gg/dsVBdMeMs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 hover:border-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.009-.119c.125-.093.25-.19.371-.287a.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.195.371.288a.072.072 0 0 1-.01.119c-.598.349-1.222.648-1.871.892a.07.07 0 0 0-.038.099c.36.687.772 1.341 1.225 1.937a.076.076 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.556-4.751-.94-8.968-3.968-12.68a.06.06 0 0 0-.031-.03zM8.02 15.278c-1.122 0-2.05-1.027-2.05-2.285c0-1.258.904-2.286 2.05-2.286c1.159 0 2.067 1.027 2.05 2.286c0 1.258-.904 2.285-2.05 2.285zm7.975 0c-1.122 0-2.05-1.027-2.05-2.285c0-1.258.904-2.286 2.05-2.286c1.159 0 2.067 1.027 2.05 2.286c0 1.258-.891 2.285-2.05 2.285z" />
                    </svg>
                    Join Server
                  </a>
                  <a
                    href="https://github.com/emmA-bkb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/15 hover:border-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
                  >
                    <img src={`${BASE_PATH}/github-icon.png`} alt="" className="w-5 h-5" />
                    View GitHub
                  </a>
                </div>
              </div>

              {/* Payment */}
              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                  Payment
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Payment is accepted exclusively through PayPal. We use this secure and reliable
                  platform to handle all transactions.
                </p>
              </div>
            </div>
          </InView>
        </div>
      </section>
    </main>
  );
}

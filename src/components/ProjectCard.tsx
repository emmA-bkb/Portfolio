interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Demo →
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Código →
          </a>
        )}
      </div>
    </div>
  );
}

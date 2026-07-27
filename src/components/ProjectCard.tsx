interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc: string;
}

export default function ProjectCard({ title, description, videoSrc }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <video width="100%" height="auto" controls muted className="w-full bg-black">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc: string;
  tags?: string[];
  allowVolume?: boolean;
}

export default function ProjectCard({
  title,
  description,
  videoSrc,
  tags = [],
  allowVolume = false,
}: ProjectCardProps) {
  const lockVolume = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!video.muted || video.volume !== 0) {
      video.muted = true;
      video.volume = 0;
    }
  };

  const setDefaultVolume = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.volume = 0.5;
  };

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-red-500/40 hover:-translate-y-1">
      <div className="aspect-video bg-black">
        <video
          width="100%"
          height="100%"
          controls
          muted
          onVolumeChange={allowVolume ? undefined : lockVolume}
          onLoadedMetadata={allowVolume ? setDefaultVolume : undefined}
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-red-300 bg-red-500/10 border border-red-500/20 rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

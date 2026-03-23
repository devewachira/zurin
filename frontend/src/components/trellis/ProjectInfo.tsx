interface ProjectInfoProps {
  description: string;
  headquarters: string;
  industry: string;
  services: string[];
}

const ProjectInfo = ({ description, headquarters, industry, services }: ProjectInfoProps) => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#737c85] text-lg md:text-xl leading-relaxed mb-16 text-justify font-medium">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <h3 className="text-[#32a386] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Headquarters
            </h3>
            <p className="text-[#1e1e3f] text-lg font-bold">{headquarters}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[#32a386] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Industry
            </h3>
            <p className="text-[#1e1e3f] text-lg font-bold leading-snug">
              {industry}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[#32a386] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Services Provided
            </h3>
            {services.map((service, idx) => (
              <p key={idx} className="text-[#1e1e3f] text-lg font-bold">
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;

import { experience } from "@/content/experience";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <h2 className="text-sm tracking-[2px] text-primary uppercase font-medium">
              Experience
            </h2>
          </div>
          <div className="border-t border-primary/10">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.org}`}
                  className="flex flex-col gap-4 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between">
                    <div>
                      <h5>{item.role}</h5>
                      <p className="text-primary text-sm sm:text-base">{item.org}</p>
                    </div>
                    {!item.dates.startsWith("TODO") && (
                      <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                        <p className="text-sm text-secondary">{item.dates}</p>
                      </div>
                    )}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {item.bullets.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-base font-normal text-secondary"
                      >
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-secondary/50 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { capabilities } from "@/content/capabilities";

const Capabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-16">
            <h2 className="text-sm tracking-[2px] text-primary uppercase font-medium">
              Product Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              {capabilities.map((c) => (
                <div key={c.title} className="flex flex-col gap-1.5">
                  <h5>{c.title}</h5>
                  <p className="text-sm text-secondary">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

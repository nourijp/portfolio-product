const AboutMe = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col gap-5 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-16">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl">
              I&apos;m a product and technology professional working at the intersection of user
              needs, business problems, and technical execution.
            </h2>
            <p className="text-secondary max-w-2xl">
              My background spans enterprise platform rollouts, product and workflow design,
              AI-enabled automation, communications, analytics, and hands-on prototyping.
              I&apos;ve worked with Product, Engineering, IT, executives, users, developers,
              designers, and distributed teams to move ideas from problem definition through
              release and iteration.
            </p>
            <p className="text-secondary max-w-2xl">
              I especially enjoy messy problems where understanding the workflow is as important
              as building the solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

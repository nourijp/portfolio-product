import Link from "next/link";
import TagList from "./tag-list";

const ProjectCard = ({
  href,
  title,
  copy,
  tags,
  external,
  bordered = false,
}: {
  href: string;
  title: string;
  copy: string;
  tags: string[];
  external?: boolean;
  bordered?: boolean;
}) => {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex flex-col gap-4 p-5 sm:p-6 rounded-xl transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring ${
        bordered ? "border border-primary/10" : ""
      }`}
    >
      <div className="flex flex-col gap-2">
        <h4 className="group-hover:underline underline-offset-4">{title}</h4>
        <p className="text-sm sm:text-base">{copy}</p>
      </div>
      <TagList tags={tags} />
    </Link>
  );
};

export default ProjectCard;

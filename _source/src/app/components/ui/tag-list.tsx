import { Badge } from "@/components/ui/badge";

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="outline" className="py-1.5 px-3 rounded-lg">
          <p className="text-xs sm:text-sm font-medium text-primary">{tag}</p>
        </Badge>
      ))}
    </div>
  );
};

export default TagList;

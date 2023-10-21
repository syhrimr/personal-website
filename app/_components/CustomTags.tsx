type TagsProps = {
  data: string[];
  tagClassess: string;
  expand: boolean;
};

const MAX_SHOWED_TAGS = 2;

export default function CustomTags({ data, tagClassess, expand }: TagsProps) {
  const totalTags = data.length;
  const tags =
    totalTags > MAX_SHOWED_TAGS && !expand
      ? [...data.slice(0, 2), `+${totalTags - MAX_SHOWED_TAGS}`]
      : data;

  return (
    <div className="flex flex-row gap-1">
      {tags.map((tag, index) => (
        <div key={index} className={tagClassess}>
          <span className="text-xs text-">{tag}</span>
        </div>
      ))}
    </div>
  );
}

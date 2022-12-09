//Only ment to be used in HSandwich and VSandwich because it asumes the parent has flex declared in its className
const SandwichLayout: CFC<{
  start?: Children;
  content?: Children;
  end?: Children;
}> = ({ start, content, children, end }) => {
  return (
    <>
      {start && <div className="shrink-0">{start}</div>}
      <div className="flex-1">{content ?? children}</div>
      {end && <div className="shrink-0">{end}</div>}
    </>
  );
};

export default SandwichLayout;

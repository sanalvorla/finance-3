import { twMerge } from "tailwind-merge";
import SandwichLayout from "./_SandwichLayout";

const HSandwichLayout: CFC<{
  className?: string;
  left?: Children;
  content?: Children;
  right?: Children;
}> = ({ left, content, right, children, className }) => {
  return (
    <div className={twMerge("flex h-full", className)}>
      <SandwichLayout start={left} content={content} end={right}>
        {children}
      </SandwichLayout>
    </div>
  );
};

export default HSandwichLayout;

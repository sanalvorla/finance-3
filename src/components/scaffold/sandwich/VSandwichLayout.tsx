import { twMerge } from "tailwind-merge";
import SandwichLayout from "./_SandwichLayout";

const VSandwichLayout: CFC<{
  className?: string;
  top?: Children;
  content?: Children;
  bottom?: Children;
}> = ({ top, content, bottom, children, className }) => {
  return (
    <div className={twMerge("flex h-full flex-col", className)}>
      <SandwichLayout start={top} content={content} end={bottom}>
        {children}
      </SandwichLayout>
    </div>
  );
};

export default VSandwichLayout;

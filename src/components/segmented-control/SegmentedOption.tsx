import type { CSSProperties, HTMLAttributes } from "react";
import { useContext } from "react";
import type { SegmentedValueType } from "./SegmentedControl";
import { SegmentedControlContext } from "./SegmentedControl";
import { twMerge } from "tailwind-merge";

export const SegmentedOption: CFC<
  HTMLAttributes<HTMLButtonElement> & {
    value?: SegmentedValueType;
    onClick?: (value: SegmentedValueType) => void;
  }
> = ({ children, value, onClick, ...passedProps }) => {
  const { useDefaultStyle, color, selection, disabled, setSelection } =
    useContext(SegmentedControlContext);

  const isSelected = selection && selection == value;

  function handleClick() {
    if (onClick) onClick;
    if (value) setSelection(value);
  }

  const {
    className: passedClassName,
    style: passedStyle,
    ...otherPassedProps
  } = passedProps;

  const buttonClassName = useDefaultStyle
    ? twMerge(
        "px-4 h-full w-full whitespace-nowrap w-fit py-2",
        passedClassName
      )
    : passedClassName;

  const buttonStyle: CSSProperties | undefined = useDefaultStyle
    ? {
        borderColor: color,
        color: isSelected ? "white" : color,
        backgroundColor: isSelected ? color : "white",
      }
    : passedStyle;

  const buttonProps = {
    disabled: disabled,
    ...otherPassedProps,
    className: buttonClassName,
    style: buttonStyle,
    onClick: handleClick,
  };

  return <button {...buttonProps}>{children}</button>;
};

import type { CSSProperties, HTMLAttributes } from "react";
import { useEffect, useId } from "react";
import { createContext, useState } from "react";
import { twMerge } from "tailwind-merge";

const DefaultColor = "#007AFF";
const DefaultDisabledColor = "#94a3b8";

export type SegmentedValueType = string | number | symbol;

type SegmenteControlContextType = {
  useDefaultStyle: boolean;
  color: string;
  disabled: boolean;
  selection: SegmentedValueType | null;
  setSelection: (value: SegmentedValueType | null) => void;
};

export const SegmentedControlContext =
  createContext<SegmenteControlContextType>({
    useDefaultStyle: false,
    color: DefaultColor,
    disabled: false,
    selection: null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelection: (value: SegmentedValueType | null) => undefined,
  });

export const SegmentedControl: CFC<
  HTMLAttributes<HTMLDivElement> & {
    useDefaultStyle?: boolean;
    color?: string;
    disabledColor?: string;
    disabled?: boolean;
    value?: SegmentedValueType | null;
    onChange?: (value: SegmentedValueType | null) => void;
  }
> = ({
  useDefaultStyle: passedUseDefaultStyle,
  color: passedColor,
  disabledColor: passedDisabledColor,
  children,
  value,
  disabled: passedDisabled,
  onChange,
  ...passedProps
}) => {
  // Defaults
  const useDefaultStyle = passedUseDefaultStyle ?? false;
  const disabled = passedDisabled ?? false;
  const enabledColor = passedColor ?? DefaultColor;
  const disabledColor = passedDisabledColor ?? DefaultDisabledColor;
  const color = disabled ? disabledColor : enabledColor;

  const defaultId = useId();

  const [selection, performSetSelection] = useState<SegmentedValueType | null>(
    value ?? defaultId
  );

  useEffect(() => {
    performSetSelection(value ?? defaultId);
  }, [value, defaultId]);

  function setSelection(value: SegmentedValueType | null) {
    performSetSelection(value);
    if (onChange) onChange(value);
  }

  const divClassName = useDefaultStyle
    ? twMerge(
        "text-xs flex divide-x border rounded-md divide-x font-normal",
        passedProps.className
      )
    : passedProps.className;

  const divStyle: CSSProperties | undefined = useDefaultStyle
    ? {
        borderColor: color,
        ...passedProps.style,
      }
    : passedProps.style;

  const divProps = {
    ...passedProps,
    className: divClassName,
    style: divStyle,
  };

  const contextProps = {
    value: {
      useDefaultStyle,
      color,
      disabled,
      selection,
      setSelection,
    },
  };

  return (
    <SegmentedControlContext.Provider {...contextProps}>
      <div {...divProps}>{children}</div>
    </SegmentedControlContext.Provider>
  );
};

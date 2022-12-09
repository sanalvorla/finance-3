import type { ChangeEvent, HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type InputProps<T> = Omit<
  HTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
  type?: "text" | "number" | "checkbox";
  className?: string;
  value?: T | null;
  isValid?: boolean;
  onChange?: (value: T | null) => void;
  disabled?: boolean;
};

export const TextInput: CFC<InputProps<string>> = (props) => {
  const { onChange, value, isValid, disabled, ...remainingProps } = props;

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    if (!onChange) return;
    const value = event.target.value == "" ? null : event.target.value;
    onChange(value);
  }

  const inputProps = {
    type: "text",
    ...remainingProps,
    className: twMerge(
      isValid != undefined && isValid == false
        ? "border-destructive outline-destructive"
        : "",
      props.className
    ),
    value: value === undefined ? undefined : value ?? "",
    onChange: handleOnChange,
    disabled: disabled ?? false,
  };

  return <input {...inputProps} />;
};

export const NumberInput: CFC<InputProps<number>> = ({
  onChange,
  value,
  isValid,
  disabled,
  ...props
}) => {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    if (!onChange) return;
    let value = event.target.value == "" ? null : Number(event.target.value);
    value = Number.isNaN(value) ? null : value;
    onChange(value);
  }

  const inputProps = {
    type: "number",
    ...props,
    className: twMerge(
      isValid != undefined && isValid == false
        ? "border-destructive outline-destructive"
        : "",
      props.className
    ),
    value: value === undefined ? undefined : value ?? "",
    onChange: handleOnChange,
    disabled: disabled ?? false,
  };

  return <input {...inputProps} />;
};

type CheckboxInputProps = Omit<InputProps<boolean>, "onChange"> & {
  onChange?: (value: boolean) => void;
};

export const CheckboxInput: CFC<CheckboxInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState(value ?? false);

  useEffect(() => {
    if (onChange) onChange(checked);
  }, [checked, onChange]);

  function handleOnChange() {
    setChecked(!checked);
  }

  const inputProps = {
    type: "checkbox",
    ...props,
    checked: checked,
    onChange: handleOnChange,
  };

  return <input {...inputProps} />;
};

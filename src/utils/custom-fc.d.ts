import type { FunctionComponent, ReactNode } from "react";

declare global {
  type Children = ReactNode | ReactNode[];

  type FCProps<Props = Record<string, unknown>> = Props & {
    children?: Children;
  };

  type CFC<Props = Record<string, unknown>> = FunctionComponent<
    Props & { children?: Children }
  >;
}

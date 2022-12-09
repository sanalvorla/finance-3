import type { NextPage } from "next";

declare module "next" {
  interface NextPageWithLayout<P = Record<string, unknown>, IP = P>
    extends NextPage<P, IP> {
    getLayout?: (page: ReactElement) => ReactNode;
  }
}

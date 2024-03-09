import { ReactNode } from "react";

export type DefaultLayoutProps = {
  children: ReactNode;
};

declare const DefaultLayout: React.FC<DefaultLayoutProps>;
export default DefaultLayout;
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="container mx-auto px-4 md:px-8 lg:px-24">
      <header className="min-h-[100px]">Asapfeed</header>
      <div className="md:px-6 lg:px-12 ">{children}</div>
    </main>
  );
};

export default Layout;

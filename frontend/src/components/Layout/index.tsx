import { useRouter } from "next/router";
import { AuthProvider } from "../AuthProvider";
import { AuthHeader, HomeHeader } from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();

  if (["/", "/pricing"].includes(pathname)) {
    return (
      <>
        <HomeHeader />
        <div>{children}</div>
      </>
    );
  } else if (["/login", "/signup"].includes(pathname)) {
    return (
      <AuthProvider>
        <AuthHeader />
        <section className="flex flex-col h-screen">
          <div className="flex-1 container mx-auto">{children}</div>
        </section>
      </AuthProvider>
    );
  }

  return <div>{children}</div>;
};

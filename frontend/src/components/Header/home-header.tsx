import Link from "next/link";

const metaLinks: Record<string, string>[] = [
  {
    name: "How it works",
    href: "/how-it-works",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export const HomeHeader = () => {
  return (
    <header className="flex items-end justify-between gap-2 border-b pb-4 sticky top-0 pt-6 px-4 lg:px-8 bg-white ">
      <div className="flex flex-col gap-2">
        <Link href={"/"}>
          <h1 className="text-xl">Asap Feed</h1>
        </Link>
        <nav>
          <ul className="flex gap-4">
            {metaLinks.map((each: Record<string, string>, index: number) => (
              <li key={index}>
                <Link
                  href={each.href}
                  className="hover:text-thick-blue font-medium tracking-tight hover:underline hover:underline-offset-8 "
                >
                  <span className="text-base">{each.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-2 lg:gap-4 text-thick-blue items-center">
        <Link href={"/login"} className="font-medium tracking-tight">
          Login
        </Link>
        <Link
          href={"/signup"}
          tabIndex={30}
          className=" font-medium bg-primary-orange text-white md:text-lg px-4 py-2 rounded-lg"
        >
          <span className="text-base">Start for free</span>
        </Link>
      </div>
    </header>
  );
};

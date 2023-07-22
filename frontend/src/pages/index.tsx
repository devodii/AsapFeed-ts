import { Hero, ListenToFriends, SignUpCard } from "@/Components";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <main
      className={`text-gray-900 flex flex-col min-h-screen container gap-4 md:gap-8 lg:gap-12 mx-auto px-4 md:px-12 lg:px-24 py-6`}
    >
      <Hero />
      {/* <Testimonial /> */}
      <ListenToFriends />
      <SignUpCard />
    </main>
  );
}

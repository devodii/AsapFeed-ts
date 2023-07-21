import { Hero } from "@/Components";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <main
      className={`text-gray-900 flex flex-col min-h-screen container gap-2 mx-auto px-4 md:px-12 lg:px-24 py-6`}
    >
      <Hero />
      <Testimonial />
    </main>
  );
}

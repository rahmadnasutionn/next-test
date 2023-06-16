import DragSlider from "@/components/drag-slider";
import Hero from "@/components/hero";
import TeamMember from "@/components/team.member";

import { default as team } from '@/data/team.json';
import { default as splashes } from '@/data/splashes.json';
import Marquee from "@/components/marquee";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
          <p>Explore out cars you might like</p>
        </div>

        <div
          className="overflow-hidden w-full my-8 md:my-16 flex flex-col justify-center h-96 sm:h-[32rem] md:h-[48rem]
          word-spacing-6 text-6xl sm:text-8xl md:text-9xl font-bold font-display"
        >
          <Marquee rotation={8} className="text-neutral-300" scrollBoost={0.25}>
            {splashes.join(" ")}
          </Marquee>
          <div className="h-4 md:h-12">
          <Marquee rotation={8} baseVelocity={-1} className="text-gray-200 outline-pink-500" scrollBoost={0.25}>
            {splashes.join(" ")}
          </Marquee>
          </div>
        </div>

        <section className="w-full flex justify-center flex-col items-center gap-16 mb-32">
          <h2 className="font-display font-bold text-5xl lg:text-7xl text-center">Team Member</h2>
          <DragSlider>
            {team.map(({ img, ...member }, i) => (
              <TeamMember 
                key={i}
                img={img}
                buttonText="Contact"
                {...member}
              />
            ))}
          </DragSlider>
        </section>
      </div>
    </main>
  )
}

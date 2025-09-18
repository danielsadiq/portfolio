import { IoIosArrowRoundForward } from "react-icons/io";
import BgAnimation from "./BgAnimation";

function Intro() {
  return (
    <section className="flex flex-col justify-center h-[calc(100vh-4rem)] md:mx-24">
      <BgAnimation/>
      <div className="flex flex-col justify-center space-y-2">
        <h2 className="text-xl md:text-3xl font-semibold">Hello; My name is</h2>
        <h1 className="font-bold text-4xl my-2 md:text-6xl md:my-4">
          Daniel Sadiq
        </h1>
        <h1 className="font-bold text-4xl mb-2 md:text-6xl md:mb-4">
          I'm a Front End Engineer
        </h1>
        <p className="inline-block md:w-xl">
          I am a frontend engineer who builds functional and efficient web
          applications using React, Next.js, and TypeScript, focusing on clean
          code and practical solutions.
        </p>
        <button className="border-1 w-fit rounded-sm px-4 py-2">
          <a href="#" className=" flex items-center gap-1">
            Projects <IoIosArrowRoundForward />
          </a>
        </button>
      </div>
    </section>
  );
}

export default Intro;

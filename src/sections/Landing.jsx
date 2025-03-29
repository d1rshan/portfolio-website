import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const Landing = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      nameRef.current,
      { y: -800, opacity: 0 }, // Start position (above screen)
      {
        y: 0, // Final position
        opacity: 1,
        duration: 1,
        ease: "elastic.out(0.8, 0.8)", // Bouncy effect
      }
    );
  }, []);
  return (
    <section
      id="home"
      class="h-screen w-full flex flex-col justify-end items-start px-5 "
    >
      <div id="hero-content">
        <p class="text-xl sm:text-2xl md:text-4xl font-medium tracking-tight text-gray-600 dark:text-gray-400 px-3 text-left">
          Meet your trusted dev partner,
          <br /> crafting sleek Flutter apps & modern websites.
        </p>
        <h1
          ref={nameRef}
          class="hidden lg:block text-[14vw] font-semibold tracking-[-0.08em] leading-none"
        >
          Darshan Paccha
        </h1>
        <h1
          id="heroTitle"
          class="lg:hidden text-[23.3vw] font-semibold tracking-[-0.08em] leading-none"
        >
          Darshan <br />
          Paccha
        </h1>
      </div>
    </section>
  );
};
export default Landing;

import { CardContainer, CardBody, CardItem } from "../components/CardContainer";
import RainbowButton from "../components/RainbowButton";

import "../index.css";
const About = () => {
  return (
    <section className="flex items-center justify-center h-screen reveal-section slide-left">
      <CardContainer>
        <CardBody className="border border-white/[0.2]  rounded-xl p-6  h-auto w-[1100px] bg-white ">
          <CardItem
            translateZ={40}
            className="text-7xl font-medium tracking-tight text-black"
          >
            About me
          </CardItem>
          <CardItem
            translateZ={30}
            className="text-xl text-left sm:text-2xl text-gray-500 font-medium"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            commodi laudantium corporis ut quos quidem nostrum architecto ipsum
            magnam sapiente! Amet ullam ipsum voluptas iste, aliquam, minima
            enim praesentium sunt non alias totam aspernatur iusto provident,
            pariatur impedit? Officiis voluptate excepturi sequi perferendis
            veritatis, perspiciatis nihil cum, soluta aperiam fugiat delectus.
            Voluptate, commodi inventore. Placeat culpa nobis, deleniti ipsam
            voluptates dolores eos debitis magni commodi, similique saepe? Sed,
            cumque sapiente? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Numquam harum libero tempore excepturi omnis consequatur
            aliquid nulla quod repellat veniam repellendus, nihil unde quam ex
            corporis officia consequuntur distinctio vitae?
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
};
export default About;

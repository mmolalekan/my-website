import { Button } from "@/components/ui/button";
import { FiDownload, FiMail } from "react-icons/fi";
import Link from "next/link";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            {/* <h1 className="h1 text-4xl mb-6">
              Hi, I am <span className="text-4xl text-accent">Abdulmuhaymin</span>
            </h1> */}
            <p className="max-w-[500px] mb-9 text-justify">
              As a dedicated Full Stack Developer with over three years of experience, I specialize in crafting dynamic and responsive web applications, with a particular affinity for front-end development. My expertise lies in leveraging modern technologies such as <span className="text-accent">React</span> to create seamless user experiences that are both visually compelling and highly functional. While I possess a solid foundation in back-end development, working with <span className="text-accent">Django</span>, <span className="text-accent">Django Restframework</span>, and <span className="text-accent">MySQL</span>, my passion truly shines in the intricacies of front-end design and development. I am committed to continuously honing my skills and staying abreast of industry trends to deliver innovative solutions that meet and exceed client expectations.            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/assets/Abdulmuhaymin Olalekan.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Contact</span>
                  <FiMail className="text-xl" />
                </Button>
              </Link>

            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default Home;
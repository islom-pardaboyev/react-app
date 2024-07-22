import HeroButton from "./HeroButton/HeroButton";
import bgImg from "../../assets/images/bg-image.png";
import HeroText from "./HeroText/HeroText";
import ScrollDownImg from '../../assets/images/scroll-down-img.svg'

const HeroSection = () => {
  return (
    <section className="container relative mx-auto max-w-[1320px]">
      <img src={bgImg} alt={"img"} className="mx-auto" />

      <div className="absolute top-[163px] left-[110px] right-[136px] text-center">
        <HeroText />
        <div className="flex items-center justify-center gap-[10px]">
          <HeroButton title={"Buy Template"} type={true}/>
          <HeroButton title={"Explore Page"} type={false}/>
        </div>
        <img src={ScrollDownImg} alt={"img"} className="mx-auto mt-[41px]"/>
      </div>
    </section>
  );
};

export default HeroSection;

import HomePageImg from "../HomePageImgs/HomePageImgs";
import HomePageText from "../HomePageText/HomePageText";
import img3 from "../../assets/images/home-bg-3.png";
import img4 from "../../assets/images/home-bg-4.png";

const StunningCaseStudies = () => {
  return (
    <section className="bg-[#EDF0F9] pb-[109px]">
      <div className="container mx-auto max-w-[1320px]">
        <HomePageText
          heading={"Stunning Case Studies"}
          about={
            "Create an optimal visual experience for your users with these inspiring layouts."
          }
        />
        <HomePageImg
          img1={img3}
          img2={img4}
          titleImg1={"Case Study Single - Web"}
          titleImg2={"Case Study Single - Mobile"}
        />
      </div>
    </section>
  );
};

export default StunningCaseStudies;

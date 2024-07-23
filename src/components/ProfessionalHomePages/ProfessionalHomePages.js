import HomePageImg from "../HomePageImgs/HomePageImgs";
import HomePageText from "../HomePageText/HomePageText";
import img1 from "../../assets/images/home-bg-1.png";
import img2 from "../../assets/images/home-bg-2.png";

const ProfessionalHomePages = () => {
  return (
    <section className="container mx-auto max-w-[1320px] pb-[109px]">
      <HomePageText
        heading={"Professional Home Pages"}
        about={
          "Attractive and stylish home layouts bring your portfolio website to the next level."
        }
      />
      <HomePageImg
        img1={img1}
        img2={img2}
        titleImg1={"Home UX Designer"}
        titleImg2={"Home UI Designer"}
      />
    </section>
  );
};

export default ProfessionalHomePages
import HomePageImg from "../HomePageImgs/HomePageImgs";
import HomePageText from "../HomePageText/HomePageText";
import img1 from "../../assets/images/home-bg-1.png";
import img2 from "../../assets/images/home-bg-2.png";
import img3 from "../../assets/images/home-bg-3.png";
import img4 from "../../assets/images/home-bg-4.png";


const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;

import HomePageImg from "../HomePageImgs/HomePageImgs";
import HomePageText from "../HomePageText/HomePageText";

import img1 from "../../assets/images/up-1.png";
import img2 from "../../assets/images/up-2.png";
import img3 from "../../assets/images/home-bg-8.png";
import img4 from "../../assets/images/up-3.png";

const UtilityPages = () => {
  return (
    <section className="pb-[109px] bg-[#2A2C32]">
      <div className="container mx-auto max-w-[1320px]">
        <HomePageText
          color={true}
          heading={"Utility Pages"}
          about={"Get the best of both worlds with these utility pages."}
        />
        <HomePageImg
          img1={img1}
          img2={img2}
          titleImg1={"Changelog"}
          titleImg2={"Protected Page"}
          mode={true}
        />
        <HomePageImg
          img1={img3}
          img2={img4}
          titleImg1={"Licenses"}
          titleImg2={"Style Guide"}
          mode={true}
        />
      </div>
    </section>
  );
};

export default UtilityPages;

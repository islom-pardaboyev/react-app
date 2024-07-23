import HomePageImg from "../HomePageImgs/HomePageImgs";
import HomePageText from "../HomePageText/HomePageText";
import img5 from "../../assets/images/home-bg-5.png";
import img6 from "../../assets/images/home-bg-6.png";
import img7 from "../../assets/images/home-bg-7.png";
import img8 from "../../assets/images/home-bg-8.png";

const SupportivePages = () => {
    return (
        <section className="mb-[109px]">
            <div className="container mx-auto max-w-[1320px]">
                <HomePageText heading={"Supportive Pages"} about={"Feel the feature of creativity with these inner page layouts that perfectly match your site."}/>
                <HomePageImg img1={img5} img2={img6} titleImg1={"About Me"} titleImg2={"Blog"}/>
                <HomePageImg img1={img7} img2={img8} titleImg1={"Blog Single"} titleImg2={"Blog Single"}/>
            </div>
        </section>
    )
}

export default SupportivePages;
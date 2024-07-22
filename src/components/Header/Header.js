import Logo from "../../assets/images/logo.png";
import NavbarItem from "../NavbarItem/NavbarItem";

const Header = () => {
  return (
    <header className="container py-[15px] my-[35px] max-w-[1320px] mx-auto flex items-center justify-between">
      <a className="" href="index.html">
        <img width={176} height={41} src={Logo} alt="site_logo" />
      </a>

      <div className="flex items-center justify-between w-[577px]">
        <NavbarItem title={"Home"}/>
        <NavbarItem title={"About Me"}/>
        <NavbarItem title={"Pages"}/>
        <NavbarItem title={"Contact Us"}/>
      </div>
    </header>
  );
};

export default Header;

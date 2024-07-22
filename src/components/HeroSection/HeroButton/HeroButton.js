import './hero.css'

const HeroButton = ({title, type}) => {
   return (
    <button className={`${type ? "bg-[#FF774C] hover:text-[#FF774C] hover:border-[#FF774C]" : "bg-[#7390F9] hover:text-[#7390F9] hover:border-[#7390F9]"} box-style`}>{title}</button>
   ) 
}


export default HeroButton;
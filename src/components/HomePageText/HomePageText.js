const HomePageText = ({ heading, about, color }) => {
    return (
        <>
            <h1 className={`text-center pt-[120px] leading-[56px] tracking-[0.4px] font-normal text-[40px] ${color === true ? "text-white" : "text-[#242F65]"}`}>
                {heading}
            </h1>
            <p className={`text-center mt-[10px] font-normal text-[20px] leading-[30px] tracking-[0.4px] ${color === true ? "text-white" : "text-[#242F65]"}`}>{about}</p>
        </>
    );
}

export default HomePageText;
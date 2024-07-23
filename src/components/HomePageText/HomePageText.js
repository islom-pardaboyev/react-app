const HomePageText = ({heading, about}) => {
    return (
        <>
            <h1 className="text-[#242F65] text-center pt-[120px] leading-[56px] tracking-[0.4px] font-normal text-[40px]">{heading}</h1>
            <p className="text-center mt-[10px] font-normal text-[20px] leading-[30px] tracking-[0.4px]">{about}</p>
        </>
    )
}

export default HomePageText
const HomePageImg = ({titleImg1, titleImg2, img1, img2}) => {
    return (
        <main className="mt-[60px] flex items-center justify-between">
            <div className="flex items-center flex-col gap-[39px]">
                <img src={img1} alt={"img"} width={694} height={881}/>
                <p className="leading-[37.5px] tracking-[0.4px] text-[25px] font-normal">{titleImg1}</p>
            </div>
            <div className="flex items-center flex-col gap-[39px]">
                <img src={img2} alt={"img"} width={694} height={881}/>
                <p className="leading-[37.5px] tracking-[0.4px] text-[25px] font-normal">{titleImg2}</p>
            </div>
        </main>
    )
}

export default HomePageImg
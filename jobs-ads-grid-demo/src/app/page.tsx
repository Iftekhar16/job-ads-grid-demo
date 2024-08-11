import Image from "next/image";
import BtnPrimary from "./components/BtnPrimary";
import LineGradHorizontal from "./components/LineGradHorizontal";
import LineGradVertical from "./components/LineGradVertical";
import iconAiSparkle from '../../public/images/ai-sparkle.svg';
import iconHandshake from '../../public/images/handshake.svg';
import iconSelectChecked from '../../public/images/select-checked.svg';
import iconSort from '../../public/images/sort.svg';
import iconViewGrid from '../../public/images/view-grid.svg';
import iconViewList from '../../public/images/view-list.svg';

export default function Home() {
    return (
        <div className="bg-[#040404] text-white w-screen h-screen flex">
            <div className="sidebar bg-[#1C1C1C] w-20 h-screen"></div>
            <div className="content h-screen flex-grow py-10 overflow-y-scroll">
                <div className="title-container px-10">
                    <p className="title text-3xl font-semibold mb-3">Lorem ipsum dolor sit.</p>
                    <p className="subtitle text-lg mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nesciunt?</p>
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
                        <BtnPrimary>
                            Create an Ad
                        </BtnPrimary>
                        <BtnPrimary>
                            Create an Ad with AI
                            <Image src={iconAiSparkle} alt="" width ="20" height="20"/>
                        </BtnPrimary>
                    </div>
                    <LineGradHorizontal/>
                    <div className="job-ad-list-container mt-5">
                        <div className="flex justify-between items-center gap-3 mb-5">
                            <p className="title text-lg">Job Advertisement List</p>
                            <div className="flex items-center gap-1">
                                <button className="text-xs text-[#585858F0] flex items-center gap-3 border border-[#585858F0] rounded-lg px-3 py-2">
                                <Image src={iconSort} alt="" width ="13" height="15"/>
                                    sort
                                </button>
                                <div className="flex items-center gap-2 border border-[#585858F0] rounded-lg px-3 py-2">
                                    <button>
                                        <Image src={iconViewGrid} alt="" width="16" height="16"/>
                                    </button>
                                    <div className="bg-[#585858F0] w-[1px] h-[15px]"></div>
                                    <button>
                                        <Image src={iconViewList} alt="" width ="18" height="14"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cards-container grid grid-rows-[auto_1fr_auto_auto] grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
                            <JobCard 
                                title="Senior frontend developer"
                                subtitle="We are looking for a skilled Senior Frontend Developer to take charge of developing and enhancing our..."
                                matched="08"
                                selected="02"
                            />
                            <JobCard
                                title="Senior frontend developer"
                                // subtitle="We are looking for a skilled Senior Frontend Developer to take charge of developing and enhancing our..."
                                subtitle="asd"
                                matched="08"
                                selected="02"
                            />
                            <JobCard
                                title="Senior frontend developer"
                                subtitle="We are looking for a skilled Senior Frontend Developer to take charge of developing and enhancing our..."
                                matched="08"
                                selected="02"
                            />
                            <JobCard
                                title="Senior frontend developer"
                                subtitle="We are looking for a skilled Senior Frontend Developer to take charge of developing and enhancing our..."
                                matched="08"
                                selected="02"
                            />
                            <JobCard
                                title="Senior frontend developer"
                                subtitle="We are looking for a skilled Senior Frontend Developer to take charge of developing and enhancing our..."
                                matched="08"
                                selected="02"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const JobCard = ({title, subtitle, matched, selected}) => {
    return(
        <div className="job-card grid grid-rows-subgrid row-span-4 bg-[#1C1C1C] rounded-lg p-3 md:p-5">
            <p className="title text-lg font-semibold md:w-8/12 mb-1">{title}</p>
            <p className="subtitle text-[#98979B] text-sm line-clamp-3 mb-3">{subtitle}</p>
            <LineGradHorizontal/>
            <div className="stats bg-[#040404] w-full rounded-lg flex items-center mt-3">
                <div className="matched p-3 md:p-5 w-full">
                    <Image src={iconHandshake} alt="" width ="23" height="14"/>
                    <p className="text-sm font-medium text-[#7932B0] mt-1">Matched</p>
                    <p className="stat-matched text-xl font-semibold">{matched}</p>
                </div>
                <div className="w-[2px] h-[70px]">
                    <LineGradVertical/>
                </div>
                <div className="selected p-3 md:p-5 w-full">
                    <Image src={iconSelectChecked} alt="" width ="17" height="17"/>
                    <p className="text-sm font-medium text-[##0B896B] mt-1">Selected</p>
                    <p className="stat-matched text-xl font-semibold">{selected}</p>
                </div>
            </div>
        </div>
    )
}
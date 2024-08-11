import Image from "next/image";
import BtnPrimary from "./components/BtnPrimary";
import LineGradHorizontal from "./components/LineGradHorizontal";
import iconAiSparkle from '../../public/images/ai-sparkle.svg';
import iconSort from '../../public/images/sort.svg';
import iconViewGrid from '../../public/images/view-grid.svg';
import iconViewList from '../../public/images/view-list.svg';
import JobCard from "./components/JobCard";

const jobs = [
    {
        title: "Senior Frontend Developer",
        subtitle: "We are looking for a skilled Senior Frontend Developer to take charge of developing and enhancing our web applications using cutting-edge technologies and best practices.",
        matched: "08",
        selected: "02"
    },
    {
        title: "Full Stack Developer",
        subtitle: "Join our dynamic team to build scalable web applications.",
        matched: "12",
        selected: "04"
    },
    {
        title: "UX/UI Designer",
        subtitle: "We're seeking a creative UX/UI Designer to craft intuitive and visually appealing user interfaces for our products. The ideal candidate will have a strong portfolio demonstrating their ability to create engaging designs across various platforms.",
        matched: "06",
        selected: "01"
    },
    {
        title: "DevOps Engineer",
        subtitle: "Streamline our deployment processes and maintain cloud infrastructure.",
        matched: "09",
        selected: "03"
    },
    {
        title: "Data Scientist",
        subtitle: "Analyze complex datasets and drive data-driven decision making in our organization using advanced statistical and machine learning techniques. You'll work closely with cross-functional teams to derive actionable insights from our data.",
        matched: "07",
        selected: "02"
    },
    {
        title: "Mobile App Developer",
        subtitle: "Create innovative iOS and Android applications for our growing user base.",
        matched: "10",
        selected: "03"
    },
    {
        title: "Product Manager",
        subtitle: "Lead the development and launch of new software products. You'll coordinate cross-functional teams and ensure alignment with business objectives.",
        matched: "05",
        selected: "01"
    }
];

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
                        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-3 mb-5">
                            <p className="title w-full md:w-auto text-lg">Job Advertisement List</p>
                            <div className="flex items-center gap-1">
                                <button className="text-xs text-[#585858F0] flex items-center gap-3 border border-[#585858F0] rounded-lg px-3 py-2">
                                <Image src={iconSort} alt="" width ="13" height="15"/>
                                    sort
                                </button>
                                <div className="flex items-center gap-2 border border-[#585858F0] rounded-lg px-3 py-2">
                                    <button title="icon-view-grid" name="icon-view-grid">
                                        <Image src={iconViewGrid} alt="" width="16" height="16"/>
                                    </button>
                                    <div className="bg-[#585858F0] w-[1px] h-[15px]"></div>
                                    <button title="icon-view-list" name="icon-view-list">
                                        <Image src={iconViewList} alt="" width ="18" height="14"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cards-container grid grid-rows-[auto_auto_auto_auto] grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
                            {
                                jobs.map((job, index) => (
                                    <JobCard key={index} title={job.title} subtitle={job.subtitle} matched={parseInt(job.matched)} selected={parseInt(job.selected)} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
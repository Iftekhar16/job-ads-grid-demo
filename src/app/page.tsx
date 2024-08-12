"use client";
import Image from "next/image";
import BtnPrimary from "./components/BtnPrimary";
import LineGradHorizontal from "./components/LineGradHorizontal";
import iconAiSparkle from '../../public/images/ai-sparkle.svg';
import iconViewGrid from '../../public/images/view-grid.svg';
import iconViewList from '../../public/images/view-list.svg';
import JobCard from "./components/JobCard";
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const initialJobs = [
    {
        title: "Senior Frontend Developer",
        subtitle: "We are looking for a skilled Senior Frontend Developer to take charge of developing and enhancing our web applications using cutting-edge technologies and best practices.",
        matched: 8,
        selected: 2
    },
    {
        title: "Full Stack Developer",
        subtitle: "Join our dynamic team to build scalable web applications.",
        matched: 2,
        selected: 4
    },
    {
        title: "UX/UI Designer",
        subtitle: "We're seeking a creative UX/UI Designer to craft intuitive and visually appealing user interfaces for our products. The ideal candidate will have a strong portfolio demonstrating their ability to create engaging designs across various platforms.",
        matched: 6,
        selected: 1
    },
    {
        title: "DevOps Engineer",
        subtitle: "Streamline our deployment processes and maintain cloud infrastructure.",
        matched: 9,
        selected: 3
    },
    {
        title: "Data Scientist",
        subtitle: "Analyze complex datasets and drive data-driven decision making in our organization using advanced statistical and machine learning techniques. You'll work closely with cross-functional teams to derive actionable insights from our data.",
        matched: 7,
        selected: 2
    },
    {
        title: "Mobile App Developer",
        subtitle: "Create innovative iOS and Android applications for our growing user base.",
        matched: 0,
        selected: 3
    },
    {
        title: "Product Manager",
        subtitle: "Lead the development and launch of new software products. You'll coordinate cross-functional teams and ensure alignment with business objectives.",
        matched: 5,
        selected: 1
    }
];

export default function Home() {

    const [view, setView] = useState(false);
    const [sortMethod, setSortMethod] = useState("title-ascending");
    const [jobs, setJobs] = useState(initialJobs);

    useEffect(()=>{
        console.log("changed!",jobs);
        switch(sortMethod){
            case "title-ascending":
                jobs.sort((a,b)=> a.title.localeCompare(b.title));
                break;
            case "title-descending":
                jobs.sort((a,b)=> b.title.localeCompare(a.title));
                break;
            case "matched-ascending":
                jobs.sort((a,b)=> a.matched-b.matched);
                break;
            case "matched-descending":
                jobs.sort((a,b)=> b.matched-a.matched);
                break;
            case "selected-ascending":
                jobs.sort((a,b)=> a.selected-b.selected);
                break;
            case "selected-descending":
                jobs.sort((a,b)=> b.selected-a.selected);
                break;
        }
        setJobs([...jobs])
    },[sortMethod])

    return (
        <div className="bg-[#040404] text-white w-screen h-screen flex">
            <div className="sidebar hidden md:block bg-[#1C1C1C] w-20 h-screen"></div>
            <div className="content h-screen w-full py-10 overflow-y-scroll">
                <div className="title-container p-3 md:px-10">
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
                                <div className="w-fit">
                                    <Select onValueChange={(value)=>{setSortMethod(value)}}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="sort"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="title-ascending">Title (ascending)</SelectItem>
                                            <SelectItem value="title-descending">Title (descending)</SelectItem>
                                            <SelectItem value="matched-ascending">Matched (ascending)</SelectItem>
                                            <SelectItem value="matched-descending">Matched (descending)</SelectItem>
                                            <SelectItem value="selected-ascending">Selected (ascending)</SelectItem>
                                            <SelectItem value="selected-descending">Selected (descending)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-grow items-center border border-[#585858F0] rounded-lg">
                                    <button className="px-3 py-2" title="icon-view-grid" name="icon-view-grid" onClick={()=>{setView(false)}}>
                                        <Image className="" src={iconViewGrid} alt="" width="16" height="16"/>
                                    </button>
                                    <div className="bg-[#585858F0] w-[1px] h-[15px]"></div>
                                    <button className="px-3 py-2" title="icon-view-list" name="icon-view-list" onClick={()=>{setView(true)}}>
                                        <Image className="" src={iconViewList} alt="" width ="18" height="14"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`cards-container grid grid-cols-1 gap-3 ${view?"":"grid-rows-[auto_auto_auto] md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6"}`}>
                            {
                                jobs.map((job, index) => (
                                    <JobCard key={index} title={job.title} subtitle={job.subtitle} view={view} matched={parseInt(job.matched)} selected={parseInt(job.selected)} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
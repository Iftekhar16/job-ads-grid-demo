import Image from "next/image";
import LineGradHorizontal from "./LineGradHorizontal";
import LineGradVertical from "./LineGradVertical";
import iconHandshake from '../../../public/images/handshake.svg';
import iconSelectChecked from '../../../public/images/select-checked.svg';

interface jobCardProps{
    title: string;
    subtitle: string;
    matched: number;
    selected: number;
}

const JobCard = ({title, subtitle, matched, selected}: jobCardProps) => {
    return(
        <div className="job-card grid grid-rows-subgrid row-span-4 bg-[#1C1C1C] rounded-lg p-3 md:p-5">
            <p className="title text-lg font-semibold md:w-8/12 mb-1">{title}</p>
            <p className="subtitle text-[#98979B] text-sm line-clamp-3 mb-3">{subtitle}</p>
            <LineGradHorizontal/>
            <div className="stats bg-[#040404] w-full rounded-lg flex items-center mt-3">
                <div className="matched p-3 md:p-5 w-full">
                    <Image src={iconHandshake} alt="" width ="23" height="14"/>
                    <p className="text-sm font-medium text-[#7932B0] mt-1 mb-2">Matched</p>
                    <p className="stat-matched text-xl font-semibold">{matched}</p>
                </div>
                <div className="w-[2px] h-[70px]">
                    <LineGradVertical/>
                </div>
                <div className="selected p-3 md:p-5 w-full">
                    <Image src={iconSelectChecked} alt="" width ="17" height="17"/>
                    <p className="text-sm font-medium text-[#0B896B] mt-1 mb-2">Selected</p>
                    <p className="stat-matched text-xl font-semibold">{selected}</p>
                </div>
            </div>
        </div>
    )
}
export default JobCard;
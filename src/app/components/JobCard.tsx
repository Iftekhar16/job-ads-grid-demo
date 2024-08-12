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
    view: boolean;
}

const JobCard = ({title, subtitle, matched, selected, view}: jobCardProps) => {
    return(
        <div className={`job-card bg-[#1C1C1C] rounded-lg p-3 md:p-5 ${view?"flex flex-col sm:flex-row":"grid grid-rows-subgrid row-span-3"}`}>
            <div className={`${view?"w-full":""}`}>
                <p className={`title text-lg font-semibold md:w-8/12 ${view?"mb-3":"mb-1"}`}>{title}</p>
                <p className={`subtitle text-[#98979B] text-sm line-clamp-3 mb-3 ${view?"md:w-8/12":""}`}>{subtitle}</p>
            </div>
            <div className={`${view?"hidden":""}`}>
                <LineGradHorizontal/>
            </div>
            <div className={`stats rounded-lg flex items-center mt-3 ${view?"w-full md:w-fit":"w-full bg-[#040404]"}`}>
                <div className={`matched w-full ${view?"pr-3 md:pr-5":"p-3 md:p-5"}`}>
                    <Image src={iconHandshake} alt="" width ="23" height="14"/>
                    <p className="text-xs font-medium text-[#7932B0] mt-1 mb-2">Matched</p>
                    <p className="stat-matched text-xl font-semibold">{matched}</p>
                </div>
                <div className="w-[2px] h-[70px]">
                    <LineGradVertical/>
                </div>
                <div className={`selected w-full ${view?"pl-3 md:pl-5":"p-3 md:p-5"}`}>
                    <Image src={iconSelectChecked} alt="" width ="17" height="17"/>
                    <p className="text-xs font-medium text-[#0B896B] mt-1 mb-2">Selected</p>
                    <p className="stat-matched text-xl font-semibold">{selected}</p>
                </div>
            </div>
        </div>
    )
}
export default JobCard;
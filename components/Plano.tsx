import { iconMusic } from "./Icons"

export default function Plano(props){
    return(
        <div className="px-6 desk:px-14">
            <div className="flex flex-row items-center justify-around bg-gray-50 rounded-xl py-4 desk:py-6">
                <span className="desk:pl-4">{iconMusic}</span>
                <div className="pr-8">
                    <p className="text-darkBlue font-bold text-14px desk:text-16px desk:pr-8">Annual Plan</p>
                    <p className="text-desaturatedBlue font-medium text-14px desk:text-16px desk:pr-8">$59.99/year</p>
                 </div>
                <p className="text-brightBlue font-bold underline text-14px desk:pr-4 desk:cursor-pointer desk:hover:text-purple-400">Change</p>
            </div>    
        </div>     
    )
}



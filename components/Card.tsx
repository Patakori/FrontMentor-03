import Botao from "./Botao";
import Plano from "./Plano";
import Texto from "./Texto";
import Titulo from "./Titulo";

export default function Card(props){
    return(
        <div className="px-6 py-16 flex flex-col items-center desk:items-center desk:pt-28">
            <div>
                <img className="rounded-t-xl" src="/img/illustration-hero.svg" alt="icone"/>
            </div>
            <div className="text-center bg-white rounded-b-xl desk:w-450px">
                <Titulo />
                <Texto />
                <Plano />
                <Botao />
                <p className="font-bold text-desaturatedBlue pt-4 pb-8 desk:pt-6 desk:cursor-pointer desk:hover:text-darkBlue">Cancel Order</p>
            </div>
        </div>    
    )
}
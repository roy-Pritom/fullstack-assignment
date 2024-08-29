import { TCard } from "../../types";


const Card = ({card}:{card:TCard}) => {
    // console.log(card);
    return (
        <div className=" bg-[#F4F6F8] w-96  md:w-[500px] h-[215px] rounded-xl border-2 border-blue-100">
        <div className="">
            <h2 className="p-4 text-2xl font-bold text-[#3D3638]">{card?.title}</h2>
            <hr className="border border-blue-100" />
            <div className="px-4 pb-4 pt-2">
            <p className="text-2xl text-[#41434F] w-[90%]">{card?.description}</p>
            </div>
           
        </div>
    </div>
    );
};

export default Card;
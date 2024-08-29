import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addSearchTerm } from "../../redux/features/searchInputSlice";
import { GoArrowRight } from "react-icons/go";

const InputBox = () => {
  const [searchTerm,setSearchTerm]=useState<string>('')
  const dispatch = useAppDispatch();
  dispatch(addSearchTerm(searchTerm))

    return (
        <div className="">
        <label className="flex items-center gap-2 border border-black rounded-md overflow-hidden input h-[70px]  md:w-[700px] lg:w-[750px] focus:outline-none outline-none">
          <input 
            type="text" 
            className="grow h-[64px] px-4 py-2 text-lg" 
            placeholder="Search" 
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
           <GoArrowRight className="w-7 h-7 hover:text-blue-400" />
        </label>
      </div>
      
    );
};

export default InputBox;
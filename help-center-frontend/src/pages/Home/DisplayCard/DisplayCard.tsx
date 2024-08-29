import { useState } from "react";
import Card from "../../../components/ui/Card";
import Loader from "../../../components/ui/Loader";
import { useGetAllCardQuery } from "../../../redux/api/card/cardApi";
import { TCard } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";
import Pagination from "../../../components/ui/Pagination";
import CreateCard from "../CreateCard/CreateCard";

const DisplayCard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const postPerPage=4;
    const searchTerm=useAppSelector((state)=>state.addSearchTerm.searchTerm)
    // console.log(searchTerm);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: Record<string, any> = {};
    query['searchTerm'] = searchTerm;
    const { data: cards, isLoading } = useGetAllCardQuery({ ...query });
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentCards = cards?.data?.slice(firstPostIndex, lastPostIndex);

    return (
     <div className="">
        <div className="flex justify-center items-center mt-14">
        <CreateCard/>
        </div>
           <div className="flex items-center justify-center  mt-10 px-4">
            {isLoading ? (
                <Loader />
            ) : (
              <div className="">
                {
                    searchTerm &&
                    <div className="mb-10">
                        <p className="text-[40px] font-medium mb-2">Search results</p>
                        <p className="text-[#696B6C] text-2xl ">{cards?.data?.length} results for " {searchTerm}"</p>
                    </div>
                }
                  <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-14 gap-x-10 max-w-6xl w-full mx-auto">
                    {currentCards?.map((card: TCard) => (
                        <Card card={card} key={card.id} />
                    ))}
                </div>
              </div>
            )}
       
        </div>
        <div className="flex justify-center items-center mt-5">
                <Pagination
                    totalPosts={cards?.data?.length}
                    postPerPage={postPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
     </div>
    );
};

export default DisplayCard;

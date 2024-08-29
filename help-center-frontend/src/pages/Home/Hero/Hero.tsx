import InputBox from "../../../components/ui/InputBox";

const Hero = () => {
    return (
        <div className="bg-secondary  md:h-[400px] h-[300px] flex justify-center items-center gap-4">
         <div className="flex flex-col md:gap-12 gap-5 justify-center items-center">
         <div className="flex justify-center items-center mb-4">
            <h3 className="md:text-[82px] text-4xl font-normal text-black ">How can we help?</h3>
            </div>
            <div className="flex justify-center items-center ">
            <InputBox/>
            </div>
         </div>
        </div>
    );
};

export default Hero;
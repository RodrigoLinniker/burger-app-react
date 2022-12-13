import { Header } from "../../components/Header";
import Burger from "../../assets/burger.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-[1800px] max-md:flex-col md:flex-col lg:flex-row max-md:gap-20 md:gap-20 pl-6 lg:gap-32 mx-auto flex items-center justify-center xl:gap-[345px] max-md:mt-12 md:mt-12 lg:mt-3 ">
        <div>
          <h1 className="text-7xl font-bold">
            Faça <br /> Seu <br />
            Burger
          </h1>
        </div>

        <div className="relative">
          <Link
            className="max-lg:w-[120px] max-lg:h-[120px] lg:w-[180px] lg:h-[180px] flex absolute max-md:top-[35%] max-md:left-[30%] md:top-[35%] md:left-[30%]  xl:top-[529px] xl:-left-20 rounded-[90px] justify-center items-center bg-[#5243C2] hover:bg-violet-700"
            to="/burger"
          >
            <h1 className="sm:text-base lg:text-2xl text-center font-extrabold text-white">
              FAÇA <br /> O BURGER
            </h1>
          </Link>
          <img
            src={Burger}
            alt="burger"
            className=" max-md:max-h-[396px] md:max-h-[450px] lg:max-h-[596px] xl:max-h-[830px]"
          />
        </div>
      </div>
    </div>
  );
}

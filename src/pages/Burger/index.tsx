import { Header } from "../../components/Header";
import { Alimentos } from "../../components/Alimentos";
import BasePao from "../../assets/base_pao.png";
import Ketchup from "../../assets/ketchup.png";
import CarneImage from "../../assets/carne.png";
import MaioneseImage from "../../assets/maionese.png";
import CebolaImage from "../../assets/cebola.png";
import TomateImage from "../../assets/tomate.png";
import PiclesImage from "../../assets/picles.png";
import QueijoImage from "../../assets/queijo.png";
import AlfaceImage from "../../assets/alface.png";
import TopPaoImage from "../../assets/top_pao.png";
import fundoBurger from "../../assets/bg.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { formatCurrecy } from "../../utils/formatCurrecy";
import { IoScaleSharp, IoTime } from "react-icons/io5";
import { ImFire } from "react-icons/im";
import { useCart } from "../../context/useAlimento";
import { Alimento } from "../../types/alimento";
import { SwiperSlide } from "swiper/react";
import { SwiperAlimentos } from "../../components/SwiperAlimentos";

interface AlimentosCapa {
  name: string;
  src: string;
}

export function Burger() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { addProduct, cart, removeProduct } = useCart();

  const totalPreco = cart.reduce((total, { preco, amount }) => {
    return total + preco * amount;
  }, 0);

  const totalTime = cart.reduce((totalTime, { time, amount }) => {
    return totalTime + time * amount;
  }, 0);

  const totalGramas = cart.reduce((totalGramas, { gramas, amount }) => {
    return totalGramas + gramas * amount;
  }, 0);

  const totalKcal = cart.reduce((totalKcal, { kcal, amount }) => {
    return totalKcal + kcal * amount;
  }, 0);

  const [alimentosCapa] = useState<AlimentosCapa[]>([
    {
      name: "Carne",
      src: CarneImage,
    },
    {
      name: "Maionese",
      src: MaioneseImage,
    },
    {
      name: "Alface",
      src: AlfaceImage,
    },
    {
      name: "Cebola",
      src: CebolaImage,
    },
    {
      name: "Tomate",
      src: TomateImage,
    },
    {
      name: "Picles",
      src: PiclesImage,
    },
    {
      name: "Queijo",
      src: QueijoImage,
    },

    {
      name: "Topo do Pão",
      src: TopPaoImage,
    },
  ]);

  const handleQuantidadeMenos = async (name: string) => {
    if (name === "Carne") {
      removeProduct(name);
    } else if (name === "Maionese") {
      removeProduct(name);
    } else if (name === "Cebola") {
      removeProduct(name);
    } else if (name === "Tomate") {
      removeProduct(name);
    } else if (name === "Picles") {
      removeProduct(name);
    } else if (name === "Queijo") {
      removeProduct(name);
    } else if (name === "Alface") {
      removeProduct(name);
    } else if (name === "Topo do Pão") {
      removeProduct(name);
    }
  };
  const handleQuantidadeMais = (name: string) => {
    if (name === "Carne") {
      addProduct(name, 3, 5, 50, 100);
    } else if (name === "Maionese") {
      addProduct(name, 0.5, 1, 25, 170);
    } else if (name === "Cebola") {
      addProduct(name, 0.5, 0, 10, 4);
    } else if (name === "Tomate") {
      addProduct(name, 0.5, 0, 50, 18);
    } else if (name === "Picles") {
      addProduct(name, 0.5, 0, 30, 5);
    } else if (name === "Queijo") {
      addProduct(name, 1, 1, 30, 113);
    } else if (name === "Alface") {
      addProduct(name, 0.5, 0, 10, 1);
    } else if (name === "Topo do Pão") {
      addProduct(name, 2, 0, 50, 142);
    }
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Header />
      <div className="w-full flex flex-row max-xl:flex-col justify-between max-w-[1544px] m-auto px-4 max-xl:mt-24 mt-36 ">
        <h1 className="flex text-7xl font-bold max-xl:justify-center max-xl:text-center">
          Faça <br /> Seu <br />
          Burger
        </h1>
        <div className="w-full xl:max-w-[950px] gap-8 flex max-lg:flex-col max-xl:justify-center justify-between max-lg:mt-10 ">
          <div className="relative self-end max-xl:self-center max-xl:mt-64">
            <img
              src={fundoBurger}
              alt="fundo"
              className="max-w-[510px] max-xl:max-w-[485px] max-lg:max-w-[475px] max-lg:-left-[1%] absolute -bottom-10 right-0 -left-[5%] -z-10"
            />

            {cart.map((item: Alimento, index: number) => {
              {
                if (item.name === "Carne") {
                  if (item.amount === 1) {
                    return (
                      <img
                        src={CarneImage}
                        key={index}
                        alt="Carne"
                        className={`w-[454px] absolute left-1
                      right-0
                      mx-auto
                      bottom-[45%] z-[35]`}
                      />
                    );
                  } else if (item.amount === 2) {
                    return (
                      <div key={index}>
                        <img
                          src={CarneImage}
                          alt="Carne"
                          className={`w-[454px] absolute left-0
                      right-0
                      mx-auto
                      bottom-[45%] z-[35]`}
                        />

                        <img
                          src={CarneImage}
                          key={index}
                          alt="Carne"
                          className={`w-[454px] absolute left-1
                    right-0
                    mx-auto
                    bottom-[70%] z-[45]`}
                        />
                      </div>
                    );
                  }
                } else if (item.name === "Topo do Pão") {
                  return (
                    <img
                      src={TopPaoImage}
                      key={index}
                      alt="Topo do Pão"
                      className={`w-[454px] absolute
                    right-0
                    left-0
                    mx-auto
                    bottom-[100%] z-[60]`}
                    />
                  );
                } else if (item.name === "Alface") {
                  return (
                    <img
                      src={AlfaceImage}
                      key={index}
                      alt="Alface"
                      className="w-[454px] absolute left-0
                    right-0
                    mx-auto
                    bottom-[45%] z-[15]"
                    />
                  );
                } else if (item.name === "Maionese") {
                  if (item.amount === 1) {
                    return (
                      <img
                        src={MaioneseImage}
                        key={index}
                        alt="Maionese"
                        className={`w-[454px] absolute left-0
                      right-0
                      mx-auto
                      bottom-[1%] z-10`}
                      />
                    );
                  } else if (item.amount === 2) {
                    return (
                      <div key={index}>
                        <img
                          src={MaioneseImage}
                          alt="Maionese"
                          className={`w-[454px] absolute left-0
                      right-0
                      mx-auto
                      bottom-[1%] z-10`}
                        />
                        <img
                          src={MaioneseImage}
                          alt="Maionese"
                          className={`w-[454px] absolute left-0
                      right-0
                      mx-auto
                      bottom-[65%] z-[55]`}
                        />
                      </div>
                    );
                  }
                } else if (item.name === "Cebola") {
                  if (item.amount === 1) {
                    return (
                      <img
                        src={CebolaImage}
                        key={index}
                        alt="Cebola"
                        className="w-[200px] absolute left-10
                      
                      mx-auto
                      bottom-[40%] z-[25]"
                      />
                    );
                  } else if (item.amount === 2) {
                    return (
                      <div key={index}>
                        <img
                          src={CebolaImage}
                          alt="Cebola"
                          className="w-[200px] absolute 
                      mx-auto
                      bottom-[40%] z-[25]"
                        />

                        <img
                          src={CebolaImage}
                          alt="Cebola"
                          className="w-[200px] absolute 
                  right-0
                  mx-auto
                  bottom-[40%] z-[25]"
                        />
                      </div>
                    );
                  } else if (item.amount === 3) {
                    return (
                      <div key={index}>
                        <img
                          src={CebolaImage}
                          alt="Cebola"
                          className="w-[200px] absolute 
                     
                      mx-auto
                      bottom-[40%] z-[25]"
                        />

                        <img
                          src={CebolaImage}
                          alt="Cebola"
                          className="w-[200px] absolute 
                  right-0
                  mx-auto
                  bottom-[40%] z-[25]"
                        />
                        <img
                          src={CebolaImage}
                          alt="Cebola"
                          className="w-[200px] absolute left-10
                  right-0
                  mx-auto
                  bottom-[40%] z-[26]"
                        />
                      </div>
                    );
                  }
                } else if (item.name === "Tomate") {
                  if (item.amount === 1) {
                    return (
                      <img
                        src={TomateImage}
                        key={index}
                        alt="Tomate"
                        className="w-[175px] absolute left-0
                     right-0
                      mx-auto
                      bottom-[42%] z-[25]"
                      />
                    );
                  } else if (item.amount === 2) {
                    return (
                      <div key={index}>
                        <img
                          src={TomateImage}
                          alt="Tomate"
                          className="w-[175px] absolute 
                      mx-auto
                      bottom-[75%] z-40"
                        />
                        <img
                          src={TomateImage}
                          alt="Tomate"
                          className="w-[175px] absolute left-22
                      right-0
                      mx-auto
                      bottom-[75%] z-40"
                        />
                      </div>
                    );
                  } else if (item.amount === 3) {
                    return (
                      <div key={index}>
                        <img
                          src={TomateImage}
                          alt="Tomate"
                          className="w-[175px] absolute 
                      mx-auto
                      bottom-[75%] z-40"
                        />
                        <img
                          src={TomateImage}
                          alt="Tomate"
                          className="w-[175px] absolute left-0
                      right-0
                      mx-auto
                      bottom-[75%] z-40"
                        />
                        <img
                          src={TomateImage}
                          alt="Tomate"
                          className="w-[175px] absolute left-22
                      right-0
                      mx-auto
                      bottom-[75%] z-40"
                        />
                      </div>
                    );
                  }
                } else if (item.name === "Picles") {
                  if (item.amount === 1) {
                    return (
                      <img
                        src={PiclesImage}
                        key={index}
                        alt="Picles"
                        className="w-[200px] absolute 
                      right-10
                      mx-auto
                      bottom-[20%] z-20"
                      />
                    );
                  } else if (item.amount === 2) {
                    return (
                      <div key={index}>
                        <img
                          src={PiclesImage}
                          alt="Picles"
                          className="w-[175px] absolute
                     
                      mx-auto
                      bottom-[28%] z-20"
                        />

                        <img
                          src={PiclesImage}
                          alt="Picles"
                          className="w-[175px] absolute 
                    right-0
                    mx-auto
                    bottom-[28%] z-20"
                        />
                      </div>
                    );
                  } else if (item.amount === 3) {
                    return (
                      <div key={index}>
                        <img
                          src={PiclesImage}
                          alt="Picles"
                          className="w-[175px] absolute 
                      mx-auto
                      bottom-[28%] z-20"
                        />

                        <img
                          src={PiclesImage}
                          alt="Picles"
                          className="w-[175px] absolute left-0
                    right-0
                    mx-auto
                    bottom-[20%] z-20"
                        />
                        <img
                          src={PiclesImage}
                          alt="Picles"
                          className="w-[175px] absolute 
                    right-0
                    mx-auto
                    bottom-[28%] z-20"
                        />
                      </div>
                    );
                  }
                } else if (item.name === "Queijo") {
                  if (item.amount === 1) {
                    return (
                      <img
                        src={QueijoImage}
                        key={index}
                        alt="Queijo"
                        className="w-[454px] absolute left-0
                      right-0
                      mx-auto
                      bottom-[5%] z-30"
                      />
                    );
                  } else if (item.amount === 2) {
                    return (
                      <div key={index}>
                        <img
                          src={QueijoImage}
                          alt="Queijo"
                          className="w-[454px] absolute left-0
                      right-0
                      mx-auto
                      bottom-[5%] z-30"
                        />
                        <img
                          src={QueijoImage}
                          alt="Queijo"
                          className="w-[454px] absolute left-0
                      right-0
                      mx-auto
                      bottom-[55%] z-50"
                        />
                      </div>
                    );
                  }
                }
              }
            })}
            <img src={BasePao} alt="base_pao" className="w-[454px]  m-auto" />
            <div className="absolute max-sm:-right-12 sm:right-10 md:-right-12 lg:-right-20 xl:-right-24 -bottom-10 ">
              <img
                src={Ketchup}
                alt="ketchup"
                className="w-[172px] max-sm:w-[150px]"
              />
            </div>
          </div>
          <div className="w-full max-w-[405px] max-xl:items-center flex max-xl:self-center max-lg:mt-10 max-xl:mt-20 flex-col gap-20">
            <div className="flex flex-col gap-12">
              <h1 className="text-4xl font-semibold max-xl:self-center ">
                Sumário
              </h1>

              <div className="flex justify-between items-center">
                <h1 className="text-violet-700 text-4xl font-extrabold">
                  {formatCurrecy(totalPreco)}
                </h1>
                <button
                  onClick={handleOpenModal}
                  className="bg-[#5243C2] px-11 py-4 text-white rounded-full hover:bg-violet-700"
                >
                  Checkout
                </button>
              </div>
              <div className="flex gap-11 bg-gray-100 p-4 rounded-full">
                <div className="flex items-center gap-2">
                  <IoTime size={32} className="text-pink-600" />
                  <h1> {totalTime} min</h1>
                </div>
                <div className="flex items-center gap-2">
                  <IoScaleSharp size={32} className="text-orange-600" />
                  <h1> {totalGramas} g</h1>
                </div>
                <div className="flex items-center gap-2">
                  <ImFire size={32} className="text-red-600" />
                  <h1>{totalKcal} kcal</h1>
                </div>
              </div>
            </div>
            <h1>
              <span className="text-red-500 mt-10">+Ketchup 20</span> mg
            </h1>
          </div>
        </div>
      </div>

      <SwiperAlimentos>
        {alimentosCapa.map((item: AlimentosCapa, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Alimentos
                src={item.src}
                name={item.name}
                alimentosFull={cart}
                alt={item.name}
                handleQuantidadeMenos={handleQuantidadeMenos}
                handleQuantidadeMais={handleQuantidadeMais}
              />
            </SwiperSlide>
          );
        })}
      </SwiperAlimentos>

      <Modal
        visible={isModalVisible}
        onClose={handleCloseModal}
        gramas={totalGramas}
        preco={totalPreco}
        alimentosFull={cart}
        kcal={totalKcal}
        time={totalTime}
      />
    </div>
  );
}

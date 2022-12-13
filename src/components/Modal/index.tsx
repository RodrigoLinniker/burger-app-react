import { AiOutlineClose } from "react-icons/ai";
import { VscStopCircle } from "react-icons/vsc";
import { TbCurrencyReal } from "react-icons/tb";
import { formatCurrecy } from "../../utils/formatCurrecy";
import { ItemModal } from "./ItemModal";
import { IoFastFoodOutline, IoScaleSharp, IoTime } from "react-icons/io5";
import { ImFire } from "react-icons/im";
import { Alimento } from "../../types/alimento";
import { useCart } from "../../context/useAlimento";

interface ModalProps {
  gramas: number;
  kcal: number;
  time: number;
  preco: number;
  visible: boolean;
  alimentosFull: Alimento[];
  onClose: () => void;
}
export function Modal({
  visible,
  onClose,
  preco,
  gramas,
  kcal,
  alimentosFull,
  time,
}: ModalProps) {
  if (!visible) {
    return null;
  }
  const { removeAllProduct } = useCart();

  function handleClickClear() {
    removeAllProduct();
    onClose();
  }
  return (
    <div>
      <div
        onClick={onClose}
        className="fixed flex top-0 bottom-0 left-0 p-4 right-0 bg-[#5243C2]/90 backdrop-blur-sm items-center justify-center z-[999]"
      >
        <div
          className="w-full max-w-[608px] flex flex-col items-center justify-center bg-white  rounded-md"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="w-full flex items-center p-4 gap-2 border-b-2 border-gray-200">
            <VscStopCircle size={24} />
            <div className="w-full flex items-center justify-between">
              <strong className="text-xl">Checkout</strong>{" "}
              <AiOutlineClose
                size={24}
                className="hover:text-[#5243C2] cursor-pointer"
                onClick={onClose}
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-4 p-4 border-b-2 border-gray-200">
            <ItemModal
              name={formatCurrecy(preco)}
              icon={<TbCurrencyReal size={20} className="text-[#5243C2]" />}
            />
            <ItemModal
              name={`${gramas} g`}
              icon={<IoScaleSharp size={20} className="text-orange-600" />}
            />
            <ItemModal
              name={`${kcal} kcal`}
              icon={<ImFire size={20} className="text-red-600" />}
            />
            <ItemModal
              name={`${time} min`}
              icon={<IoTime size={20} className="text-pink-600" />}
            />
            {alimentosFull.map((item: Alimento, index: number) => {
              if (item.name) {
                return (
                  <ItemModal
                    key={index}
                    icon={
                      <IoFastFoodOutline size={20} className="text-green-600" />
                    }
                    name={`${item.name}`}
                    amount={item.amount}
                  />
                );
              }
            })}
          </div>
          <div className="w-full flex justify-end p-4 gap-4">
            <button
              className="bg-gray-200  rounded-full hover:bg-gray-300  py-4 px-8  text-[#5243C2] font-semibold"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-[#5243C2]  rounded-full hover:bg-violet-700 py-4 px-8 text-white font-semibold"
              onClick={handleClickClear}
            >
              Limpar Tudo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

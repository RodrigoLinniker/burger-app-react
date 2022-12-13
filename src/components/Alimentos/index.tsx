import { Alimento } from "../../types/alimento";

interface AlimentosProps {
  src: string;
  alt: string;
  name: string;
  alimentosFull: Alimento[];
  handleQuantidadeMenos: (name: string) => void;
  handleQuantidadeMais: (name: string) => void;
}
export function Alimentos({
  src,
  alt,
  name,
  alimentosFull,
  handleQuantidadeMenos,
  handleQuantidadeMais,
}: AlimentosProps) {
  let carne = alimentosFull
    .filter((item: Alimento) => item.name === "Carne")
    .map((item) => {
      return item.amount;
    });
  let maionese = alimentosFull
    .filter((item: Alimento) => item.name === "Maionese")
    .map((item) => {
      return item.amount;
    });
  let cebola = alimentosFull
    .filter((item: Alimento) => item.name === "Cebola")
    .map((item) => {
      return item.amount;
    });
  let tomate = alimentosFull
    .filter((item: Alimento) => item.name === "Tomate")
    .map((item) => {
      return item.amount;
    });
  let picles = alimentosFull
    .filter((item: Alimento) => item.name === "Picles")
    .map((item) => {
      return item.amount;
    });
  let queijo = alimentosFull
    .filter((item: Alimento) => item.name === "Queijo")
    .map((item) => {
      return item.amount;
    });
  let alface = alimentosFull
    .filter((item: Alimento) => item.name === "Alface")
    .map((item) => {
      return item.amount;
    });
  let topPao = alimentosFull
    .filter((item: Alimento) => item.name === "Topo do Pão")
    .map((item) => {
      return item.amount;
    });

  const disableButtonMenos = (name: string) => {
    if (name === "Carne" && Number(carne) <= 0) {
      return true;
    } else if (name === "Maionese" && Number(maionese) <= 0) {
      return true;
    } else if (name === "Cebola" && Number(cebola) <= 0) {
      return true;
    } else if (name === "Tomate" && Number(tomate) <= 0) {
      return true;
    } else if (name === "Picles" && Number(picles) <= 0) {
      return true;
    } else if (name === "Queijo" && Number(queijo) <= 0) {
      return true;
    } else if (name === "Alface" && Number(alface) <= 0) {
      return true;
    } else if (name === "Topo do Pão" && Number(topPao) <= 0) {
      return true;
    }
  };

  const disableButtonMais = (name: string) => {
    if (name === "Carne" && Number(carne) >= 2) {
      return true;
    } else if (name === "Maionese" && Number(maionese) >= 2) {
      return true;
    } else if (name === "Cebola" && Number(cebola) === 3) {
      return true;
    } else if (name === "Tomate" && Number(tomate) === 3) {
      return true;
    } else if (name === "Picles" && Number(picles) === 3) {
      return true;
    } else if (name === "Queijo" && Number(queijo) >= 2) {
      return true;
    } else if (name === "Alface" && Number(alface) === 1) {
      return true;
    } else if (name === "Topo do Pão" && Number(topPao) === 1) {
      return true;
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 py-6 px-4">
      <img src={src} alt={alt} className={`w-[104px] h-[49px]`} />
      <h1>{name}</h1>
      <div className="flex gap-5 justify-center items-center">
        <button
          onClick={() => {
            handleQuantidadeMenos(name);
          }}
          disabled={disableButtonMenos(name)}
          className="text-3xl font-semibold hover:text-violet-700 text-violet-500 disabled:text-gray-300 px-1"
        >
          -
        </button>

        <h1 className="text-xl font-semibold">
          0{name === "Carne" && carne}
          {name === "Maionese" && maionese}
          {name === "Cebola" && cebola}
          {name === "Tomate" && tomate}
          {name === "Picles" && picles}
          {name === "Queijo" && queijo}
          {name === "Alface" && alface}
          {name === "Topo do Pão" && topPao}
        </h1>
        <button
          onClick={() => {
            handleQuantidadeMais(name);
          }}
          disabled={disableButtonMais(name)}
          className="text-3xl font-semibold hover:text-violet-700 text-violet-500 disabled:text-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
}

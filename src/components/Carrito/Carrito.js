import CarritoCompras from "/public/img/icons/carrito-de-compras.png";
import Cerrar from "/public/img/icons/cerrar.png";

import "./style.css";
import Image from "next/image";
export default function Carrito() {
  return (
    <div className="carrito-compras">
      <aside className="car w-80 h-screen fixed">
        <div className="flex justify-between mt-4 mx-3 items-center">
          <div className="flex row-auto gap-2 items-center">
            <Image
              className="carrito-buy"
              src={CarritoCompras}
              width={80}
              height={0}
              alt="imagen de carrito de compras"
            />
            <h1 className="font-marker text-[22px]">MI CARRITO</h1>
          </div>
          <button>
            <Image
              className="cerrar"
              src={Cerrar}
              width={80}
              height={0}
              alt="imagen cerrar"
            />
          </button>
        </div>
        <div className="contenedor-compras h-52 bg-orange-100 m-10 rounded-md p-4">
          xd
        </div>
      </aside>
    </div>
  );
}

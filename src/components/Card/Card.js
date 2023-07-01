import Image from "next/image";
import "./style.css";
export default function Card({ imagen, nombre, precio, categoria }) {
  const limiteCaracteres = 24;

  return (
    <div className="card2">
      <div id="img-producto">
        <Image
          id="product"
          className="p-5"
          src={imagen}
          width={180}
          height={0}
          alt="imagen"
        />
      </div>
      <div className="card__content uppercase tracking-tighter font-semibold">
        <div className="card__label">{categoria}</div>
        <h2>
          <p className="card__link" target="_blank">
            Nombre
          </p>
        </h2>
        <p className="text-black">
          {nombre.length > limiteCaracteres
            ? `${nombre.substring(0, limiteCaracteres)}...`
            : nombre}
        </p>

        <p>
          <span className="text-black">${precio} / unit</span>
        </p>
        <div className="card__cta-container">
          <button className="card__cta bg-slate-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

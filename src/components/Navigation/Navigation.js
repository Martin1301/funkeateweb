import Image from "next/image";
import Logo from "/public/img/logo.png";
import Carrito from "/public/img/icons/carrito.png";
import MenuHamburguesa from "/public/img/icons/menu.png";
import Link from "next/link";
import "./style.css";
export default function Navigation({ btncategoria }) {
  return (
    <nav className="flex pb-2.5 h-16 font-concert" id="menu">
      <div className="bgnav pt-4 pb-2.5 fixed w-full z-40">
        <div className="flex items-center justify-between md:mx-11 mx-5 ml-0">
          <a href="/">
            <Image
              src={Logo}
              width={140}
              height={0}
              alt="logo de funkeate"></Image>
          </a>
          <ul className="flex views">
            <li id="vistas">
              <a href="/">Inicio</a>
            </li>
            <li id="vistas">
              <Link href="/productos">Productos</Link>
            </li>
            <li id="vistas">
              <Link href="/categoria">Categorias</Link>
              {/*     <ul>
                <li>
                  <Link className="subcategoria" href="/categoria">
                    Categorias-2
                  </Link>
                </li>
                <li>
                  <Link className="subcategoria" href="/productos">
                    Categorias-3
                  </Link>
                </li>
              </ul> */}
            </li>
          </ul>
          <ul className="p-10 items-center">
            <li className="carrito-box">
              <button>
                <Image
                  className="carrito"
                  src={Carrito}
                  width={32}
                  height={0}
                  alt="icon carrito"></Image>
              </button>
            </li>
            <li className="ml-7 mr-5">
              <button className="sesion">Iniciar Sesión</button>
            </li>
            <li className="md:hidden block">
              <Image
                src={MenuHamburguesa}
                width={35}
                height={0}
                alt="icon menu"></Image>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

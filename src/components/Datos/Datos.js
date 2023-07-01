"use client";
import Image from "next/image";
import { API_URL } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import Card from "../Card/Card";
import Loading from "../Card/Loading";
export default function Datos({ data: propData }) {
  const { data, isLoading } = useFetch(API_URL);
  const datos = propData || data;

  return (
    <main className="flex flex-wrap gap-7 justify-center items-center my-5">
      {isLoading ? (
        <Loading></Loading>
      ) : datos.length > 0 ? (
        datos.map((producto) => (
          <div key={producto.id}>
            <Card
              imagen={producto.image}
              nombre={producto.title}
              precio={producto.price}
              categoria={producto.category}
            />
          </div>
        ))
      ) : (
        <Loading></Loading>
      )}
    </main>
  );
}

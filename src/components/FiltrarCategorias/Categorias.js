"use client";
import { useFetch } from "@/services/useFetch";
import { useState, useEffect } from "react";
import Datos from "../Datos/Datos";
import { API_URL } from "@/services/api";
import "./style.css";
export default function Categorias() {
  const { data: initialData } = useFetch(API_URL);
  const [types, setTypes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchTypes = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();
    setTypes(data);
  };

  const handleOnChangePokemon = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory) {
      const filtered = initialData.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(initialData);
    }
  }, [selectedCategory, initialData]);

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div className="grid">
      <div>
        <div className="fixed filtrar-categoria ml-5 rounded-md mt-5 font-bold w-[200px] text-center ">
          <button onClick={handleOnChangePokemon} className="my-3">
            <option className="border-b-2">TODOS</option>
            {types.map((type) => (
              <div key={type}>
                <button
                  className="uppercase p-2 hover:bg-slate-500 hover:rounded-md mx-2 tracking-tighter"
                  value={type}>
                  {type}
                </button>
              </div>
            ))}
          </button>
        </div>
      </div>
      <div className="mt-2 mr-[30px]">
        <h2 className="bg-red font-extrabold text-[24px] text-center uppercase">
          Productos {selectedCategory}
        </h2>
        <Datos data={filteredData.length > 0 ? filteredData : initialData} />
      </div>
    </div>
  );
}

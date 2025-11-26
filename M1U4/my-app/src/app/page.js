import { TituloPrincipal } from "@/components/tituloPrincipal";
const titulo2="Aprendemos Nexts.js"

import { ListaProductos } from "@/components/listaSuper";

const productos = [
  { id: 1, nombre: "Leche", precio: 5000 },
  { id: 2, nombre: "Pan", precio: 3000 },
  { id: 3, nombre: "Huevos", precio: 7000 },
];

const contenidoNovedad = {
  id: 1,
  titulo: "Nueva Novedad",
  subtitulo: "Subtitulo de la novedad",
  autor: "Autor de la novedad",
  cuerpo: "Este es el cuerpo de la novedad.",
}




import { NovedadItem } from "@/components/novedadItem";

export default function Home() {
  return (
    <div>
      
      <h2>Ejemplos Props </h2>
      <TituloPrincipal titulo="Hola cursoo" />
      <TituloPrincipal titulo={titulo2} />
      <hr/>
      <ListaProductos items={productos} />
      <hr/>
      <NovedadItem
      title={contenidoNovedad.titulo}
      subtitle={contenidoNovedad.subtitulo}
      author={contenidoNovedad.autor}
      body={contenidoNovedad.cuerpo}
      
      
      />
    </div>
    
  );
}

import NovedadItem from "@/app/components/NovedadItem";

export default async function Novedades() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/novedades`,
    { cache: "no-store" }
  );

  const novedades = await res.json();

  return (
    <section className="holder">
      <h2>Novedades</h2>

      {novedades.length === 0 ? (
        <p>No hay novedades por el momento.</p>
      ) : (
        novedades.map(item => (
          <NovedadItem
            key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            imagen={item.imagen}
            body={item.cuerpo}
          />
        ))
      )}
    </section>
  );
}

export default function NovedadItem({ title, subtitle, imagen, body }) {
  return (
    <div className="novedades">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      {imagen && (
        <img src={imagen} alt={title} />
      )}

      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

import "@/app/styles/home.css";


export default function Home() {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="/IMG/img/home/img01.jpg" alt="avion"></img>
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Home</h2>
          <p> lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
          </p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">" Simpelmente excelente "</span>
            <span className="autor">Juan Perez</span>
          </div>
        </div>
      </div>
    </main>
  );
}

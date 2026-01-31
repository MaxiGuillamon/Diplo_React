import "@/app/styles/nosotros.css";


export const metadata = {
    title: "Nosotros :: Savia DecoHome",
    description: "Pagina de nosotros de Savia DecoHome",
};

export default function Nosotros() {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <div>
                    <p>lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
                        lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
                        lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
                    </p>

                    <p>lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
                        lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
                        lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20   </p>
                </div>
            </div>
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="/IMG/img/nosotros/nosotros1.jpg" width="75" alt="persona1" />
                    <h5>Juan Perez</h5>
                    <h6>Gerente General</h6>
                    <p>lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20</p>
                </div>
            </div>
        </section>
    );
}
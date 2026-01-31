import ContactForm from "@/app/components/ContactForm";

import "@/app/styles/contacto.css";


export const metadata = {
    title: "Contacto",
    description: "Pagina de contacto de Savia DecoHome",
};
export default function Contacto() {
    return ( 
        <main className="holder contacto">
            <div className="columna">
                <h2> Complete el siguiente formulario.</h2>
                {/* Formulario de contacto */}
                <ContactForm />
            </div>
            <div className="columna datos">
                <h2> Otras vias de contacto </h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Telefono: 1234-5678</li>
                    <li>Email:  contacto@saviadecohome.com</li>
                    <li>Facebook: saviadecohome</li>
                    <li>Instagram: @saviadecohome</li>
                </ul>
            </div>
        </main>
    );
}
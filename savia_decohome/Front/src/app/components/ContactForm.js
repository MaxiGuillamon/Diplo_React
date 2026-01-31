export default function ContactForm() {
    return (
        <form action="/contacto" method="post" className="formulario">
            <p>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" />
            </p>
            <p>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
            </p>
            <p>
                <label>Telefono</label>
                <input type="tel" name="telefono" />
            </p>
            <p>
                <label>Comentario</label>
                <textarea name="comentario"></textarea>
            </p>
            <p className="centrar"><input type="submit" value="Enviar" /></p>
        </form>

    );
}
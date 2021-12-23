/*
    document  es un archivo principal de nuestra pagina donde los cambios se 
    pueden aplicar a una escala global

    Advertencias sobre extender el Document:

    • Ya que el Document se renderiza en servidor, los eventos como onClick 
    no funcionarán.
    • Los componentes de React fuera de <Main /> no serán inicializados por 
    el navegador. No añadir lógica de la aplicación aquí o CSS personalizado 
    (como styled-jsx). Si necesita componentes compartidos en todas sus páginas 
    (como un menú o una barra de herramientas).
    • getInitialPropsfunción de Document no se llama durante las transiciones 
    del lado del cliente, ni cuando una página está optimizada estáticamente.
*/

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // Cosas que podemos hacer desde el server
    // static async getInitialProps(ctx) {
    //     // todos los cambios aplican para todas las paginas
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/* lo modificamos para */}
                    {/* favicon */}
                    {/* webfonts personalizadas */}
                    {/* stylesheet externos */}
                    {/* script/js externos */}
                </Head>
                {/* No es muy comun editar adentro del body */}
                {/* pero se puede usar para agregar una clase */}
                <body className="my-body-class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
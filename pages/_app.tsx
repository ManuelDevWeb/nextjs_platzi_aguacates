/*
    En el archivo _app podemos inyectarle anábolicos (providers, themes, props, 
    o cualquier cosa que necesitemos) a toda nuestra aplicación.

    Para crear contenedores de nuestra aplicaciones, que deseemos aplicarlo a 
    nivel global, es muy util usar el app de Next.js creando el archivo _app.js
*/

import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
    // Aditional props
    // Aditional layout
    // Manejar errores - componentDidCatch
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    )
}

export default MyApp
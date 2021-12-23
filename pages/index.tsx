import React, { useEffect, useState } from 'react';

// Components
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'


const Home = () => {
    // State para almacenar el listado de los aguacates
    const [productList, setProductList] = useState<TProduct[]>([]);

    // UseEffect para el llamado de la API '/api/avo/
    useEffect(() => {
        window.fetch('/api/avo/')
            .then(response => response.json())
            // .then(data=>console.log(data))
            .then(({ allEntries, length }) => {
                // Seteamos el state de productList con el listado de aguacates
                setProductList(allEntries);
            });
    }, [])

    return (
        <Layout>
            <KawaiiHeader />
            <ProductList products={productList} />
        </Layout>
    )
}

export default Home;
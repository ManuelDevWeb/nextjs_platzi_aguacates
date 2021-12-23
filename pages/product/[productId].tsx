import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductItem = () => {
    // State para almacenar el producto
    const [product, setProduct] = useState<TProduct | null>(null)

    // Router para obtener el id del producto por parametro
    const {
        query: { productId }
    } = useRouter();

    // UseEffect para obtener el producto de la API 'api/avo/id'
    useEffect(() => {
        if (productId) {
            window.fetch(`/api/avo/${productId}`)
                .then(response => response.json())
                //.then(data => console.log(data)));
                .then((data) => setProduct(data));
        }
    }, [productId])

    return (
        <Layout>
            {product == null ? null : <ProductSummary product={product} />}
        </Layout>
    )
}

export default ProductItem;

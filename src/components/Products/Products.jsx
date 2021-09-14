import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product';

const products = [
    {
        id:1,
        name: 'KitKat',
        description: 'Chocolate',
        price: '$2.30',
        image: 'https://tiendaproalmex.com/301-large_default/chocolate-con-leche-kitkat-milk-de-415g.jpg'
    },
    {
        id: 2,
        name: 'Chips',
        description: 'Spicey Chips',
        price: '$1.50',
        image: 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/7/5/7503018544755_image.jpg'
    }
];

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;
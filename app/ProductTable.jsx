import React, { useState, useEffect } from 'react';

export default function ProductTable() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm)
        );

        setFilteredProducts(filtered);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ maxWidth: '50px', maxHeight: '50px' }}
                                />
                            </td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
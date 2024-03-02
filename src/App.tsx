import React from 'react';
import './App.css';
import ProductCard from './compound_component/ProductCard/ProductCard';
import Company_logo from './Image/Company_logo1.png'

function App() {
  return (
    <>
      <ProductCard>
        <ProductCard.Description>Description</ProductCard.Description>
        <ProductCard.Image src={Company_logo} alt={'alt_text'}></ProductCard.Image>
        <ProductCard.Title>Product Title</ProductCard.Title>
        <ProductCard.Category>Product Category</ProductCard.Category>
        <ProductCard.Price>Price</ProductCard.Price>
      </ProductCard>
    </>
  );
}

export default App;

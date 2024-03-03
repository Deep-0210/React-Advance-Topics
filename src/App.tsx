import React from 'react';
import './App.css';
// import ProductCard from './compound_component/ProductCard/ProductCard';
// import Company_logo from './Image/Company_logo1.png'
import Hoc from './HOC/Hoc';

function App() {
  return (
    <>
      {/* Compound Component */}
      {/* <ProductCard>
        <ProductCard.Description>Description</ProductCard.Description>
        <ProductCard.Image src={Company_logo} alt={'alt_text'}></ProductCard.Image>
        <ProductCard.Title>Product Title</ProductCard.Title>
        <ProductCard.Category>Product Category</ProductCard.Category>
        <ProductCard.Price>Price</ProductCard.Price>
      </ProductCard> */}

      {/* HOC */}
      <Hoc />
    </>
  );
}

export default App;

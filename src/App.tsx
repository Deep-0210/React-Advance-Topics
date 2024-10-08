import React from 'react';
import './App.css';
// import ProductCard from './compound_component/ProductCard/ProductCard';
// import Company_logo from './Image/Company_logo1.png'
// import Hoc from './HOC/Hoc';
// import Index from './RenderProps/index';
// import ControlledComponent from './ControlledVsUnControlled/ControlledComponent';
// import UnControlledComponent from './ControlledVsUnControlled/UnControlledComponent';
// import ErrorHandling from './ErrorHandling/ErrorHandling';
// import Main from './ErrroBoundries/Main';
// import Modal from './Portals/Modal';
// import Main from './ReactMemoComponent/Main'
// import RenderLargeList from './RenderLargeList/RenderLargeList'
// import ReactLazyLoading from './ReactLazyLoading/ReactLazyLoading';
// import TodoRedux from './ReactStatManagement/Redux/Main';
import Todo from './ReactStatManagement/Mobx/Todo/Todo'
import CharCountRecoil from './ReactStatManagement/Recoil/Main';

const App: React.FC = () => {
  return (
    <>
      <div className='flex justify-evenly'>
        <div>
          {/* Compound Component */}
          {/* <ProductCard>
            <ProductCard.Description>Description</ProductCard.Description>
            <ProductCard.Image src={Company_logo} alt={'alt_text'}></ProductCard.Image>
            <ProductCard.Title>Product Title</ProductCard.Title>
            <ProductCard.Category>Product Category</ProductCard.Category>
            <ProductCard.Price>Price</ProductCard.Price>
          </ProductCard> */}
        </div>

        <div>
          {/* we can render this when we will showing the product preview to the client and that time we can remove description */}
          {/* <ProductCard>
            <ProductCard.Image src={Company_logo} alt={'alt_text'}></ProductCard.Image>
            <ProductCard.Title>Product Title</ProductCard.Title>
            <ProductCard.Price>Price</ProductCard.Price>
          </ProductCard> */}
        </div>
      </div>
      {/* HOC */}
      {/* <Hoc /> */}

      {/* Render prop methods */}
      {/* <Index /> */}

      {/* Controlled vs unControlled component */}
      {/* <ControlledComponent /> */}
      {/* <UnControlledComponent /> */}

      {/* Error handling */}
      {/* <ErrorHandling /> */}

      {/* Error boundary */}
      {/* <Main /> */}

      {/* React portals */}
      {/* <Modal /> */}

      {/* React use-memo */}
      {/* <Main /> */}

      {/* Render Large List */}
      {/* <RenderLargeList /> */}

      {/* React Lazy Loading */}
      {/* <ReactLazyLoading /> */}

      {/* Redux stat management */}
      {/* <TodoRedux /> */}

      {/* MobX for global stat management */}
      {/* <Todo /> */}

      {/* Recoil for global stat management */}
      <CharCountRecoil />
    </>
  );
}

export default App;

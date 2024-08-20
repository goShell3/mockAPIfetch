// import logo from './logo.svg'; 
// import './App.css';
// import SearchBar from './component/SearchBar';
// // import ShippingDetails from './component/ShipingDetail';
import ProductList from './component/ProductLists';
// import ListofResult from "./component/ListofResult";
import MainComponent from "./component/MainComponent";
import Sidebar from "./component/SideBar";
import ProductInformation from './component/ProductInfo';
import React, {useState} from 'react';

function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      {/* <ShippingDetails/> */}
      {/* <SearchBar/>
      <ProductDisplay/> */}
      <MainComponent/>
      {/* <ListofResult/> */}
    
      <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-5 bg-gray-100">
        {selectedProduct ? (
          <ProductInformation product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        ) : (
          <ProductList onProductClick={setSelectedProduct} />
        )}
      </main>
    </div>

      {/* <ProductInfo/> */}

    </div>
  );
}

export default App;

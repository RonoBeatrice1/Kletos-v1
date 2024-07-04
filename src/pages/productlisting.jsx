// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCard from "../pages/components/productcard/productcard";
import { Frame } from "../pages/components/frame";
import { Frame2 } from "../pages/components/frame";
import "../css/productlistingcss/productlisting.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const products = [
  {
    productName: "Hand-dyed Batik Fabric",
    price: 2000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHwSEpO8Ce4xWywwq6pnrFjS3vEy9IW16Og&usqp=CAU",
  },
  {
    productName: "Handwoven Kiondo Basket",
    price: 3000,
    imageUrl:
      "https://d17a17kld06uk8.cloudfront.net/products/7RWB8UR/YY7RALPM-original-rCP1BNQ.jpg",
  },
  {
    productName: "Maasai Beaded Necklace",
    price: 2500,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBpN9W4uGPbifxZf-0hPG9v7tYotkTwgPeQ&usqp=CAU",
  },
  {
    productName: "Soapstone Sculpture",
    price: 3500,
    imageUrl:
      "https://fathomstone.com/cdn/shop/products/IMG_0251.jpg?v=1557445495&width=1445",
  },
  {
    productName: "Carved Wooden Mask",
    price: 4500,
    imageUrl:
      "https://www.goodkarmaworld.com/cdn/shop/files/download_73_1445x.jpg?v=1704134775",
  },
  {
    productName: "Banana Leaf Art",
    price: 2200,
    imageUrl:
      "https://cdn11.bigcommerce.com/s-kg2w7z8739/images/stencil/1280x1280/products/7295/24457/A-P200__03358.1704916477.jpg?c=1",
  },
  {
    productName: "Clay Pottery Vase",
    price: 3200,
    imageUrl:
      "https://w7.pngwing.com/pngs/401/883/png-transparent-two-brown-clay-jars-pottery-vase-ceramic-urn-artifact-jar-flowers-jar-objects.png",
  },
  {
    productName: "Sisal Fiber Rug",
    price: 5000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VaWC3OrTQjqjK4Hf0wCexUInUiT1RG_nKA&usqp=CAU",
  },
];

const ProductListing = () => (
  <>
    <NavBar />
    <div className="product-list-page">
      <div className="div-2">
        <div>
          <Frame className="" />
          <Frame2 className="" />
        </div>
        <div className="divider1"></div>

        <div className="frame-2">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productName={product.productName}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>

        <div className="frame-5">
          <div className="frame-6">
            <div className="text-wrapper-5">1</div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-5">2</div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-5">3</div>
          </div>
          <div className="text-wrapper-6">....</div>
          <div className="frame-6">
            <div className="text-wrapper-5">4</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default ProductListing;

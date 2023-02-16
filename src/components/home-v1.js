import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner-v5";
import ProSlider from "./section-components/product-slider-v1";
import Category from "./section-components/category-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";


const Home_V1 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* <SearchForm /> */}
      <Category />
      <ProSlider />
      {/* <Aboutv1 /> */}
      <BlogSlider customClass="section-subtitle-2" />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V1;

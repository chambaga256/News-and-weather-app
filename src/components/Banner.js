import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="http://mightyscoops.com/wp-content/uploads/2021/10/Barack-Obama-70-Million.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://mightyscoops.com/wp-content/uploads/2021/11/1635740974_083418_1635741124_noticia_normal_recorte1.jpeg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://mightyscoops.com/wp-content/uploads/2021/10/Bernie-Sanders-3-Million.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

import { Card } from "react-bootstrap";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      spaceBetween={5}
      slidesPerView={1}
    >
      <SwiperSlide>
        <Card className="bg-dark text-white border border-0">
          <Card.Img
            src="https://i.ibb.co/9WwqnLW/Untitled-design-7.png"
            alt="banner image"
          />
          <Card.ImgOverlay className="d-flex justify-content-center ">
            <div className="align-self-center text-center  bg-dark opacity-75 p-4">
              <Card.Title className="">
                <h2 className="fw-bold banner-title">
                  Indian Best Chef Are Here!!!
                </h2>
              </Card.Title>
              <Card.Text>
                <p className="fs-bold ">Find you favorite recipes here. </p>
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="bg-dark text-white border border-0">
          <Card.Img
            src="https://i.ibb.co/rxGSMVV/Untitled-design-6.png"
            alt="banner image"
          />
          <Card.ImgOverlay className="d-flex justify-content-center ">
            <div className="align-self-center text-center  bg-dark opacity-75 p-4">
              <Card.Title className="">
                <h2 className="fw-bold banner-title">
                  Indian Best Chef Are Here!!!
                </h2>
              </Card.Title>
              <Card.Text>
                <p className="fs-bold">Find you favorite recipes here. </p>
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="bg-dark text-white border border-0">
          <Card.Img
            src="https://i.ibb.co/mv5YPtD/Untitled-design-5.png"
            alt="banner image"
          />
          <Card.ImgOverlay className="d-flex justify-content-center ">
            <div className="align-self-center text-center  bg-dark opacity-75 p-4">
              <Card.Title className="">
                <h2 className="fw-bold banner-title">
                  Most Popular Recipes!!!
                </h2>
              </Card.Title>
              <Card.Text>
                <p className="fs-bold ">Find you favorite recipes here. </p>
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="bg-dark text-white border border-0">
          <Card.Img
            src="https://i.ibb.co/3kHqds8/Untitled-design-3.png"
            alt="banner image"
          />
          <Card.ImgOverlay className="d-flex justify-content-center ">
            <div className="align-self-center text-center  bg-dark opacity-75 p-4">
              <Card.Title className="">
                <h2 className="fw-bold banner-title">
                  Indian Best Chef Are Here!!!
                </h2>
              </Card.Title>
              <Card.Text>
                <p className="fs-bold ">Find you favorite recipes here. </p>
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

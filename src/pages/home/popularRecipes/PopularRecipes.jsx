import React from "react";
import { Card } from "react-bootstrap";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const PopularRecipes = () => {
  return (
    <div className="my-3">
      <h1 className="text-center fw-bold my-3">Most Popular Recipes</h1>
      {/* slide is responsive and it will autoplay after 2sec */}
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          300: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={4}
        className="pb-4"
      >
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              className="w-100"
              src="https://i.ibb.co/zV6GcHz/author-banner.jpg"
              alt="food image"
            />
            <Card.Body>
              <Card.Text>
                <h3 className="text-center">Biriyani</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              className="w-100"
              src="https://i.ibb.co/V2mLjJG/food2.png"
              alt="food image"
            />
            <Card.Body>
              <Card.Text>
                <h3 className="text-center">Chicken Korma</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              className="w-100"
              src="https://i.ibb.co/PDjFkmz/food3.png"
              alt="food image"
            />
            <Card.Body>
              <Card.Text>
                <h3 className="text-center">Shrimp and Rice</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              className="w-100"
              src="https://i.ibb.co/LngMGKk/food4.png"
              alt="food image"
            />
            <Card.Body>
              <Card.Text>
                <h3 className="text-center">Butter Chicken</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              className="w-100"
              src="https://i.ibb.co/FBCPnZj/Untitled-design.png"
              alt="food image"
            />
            <Card.Body>
              <Card.Text>
                <h3 className="text-center">Dodhal curry</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularRecipes;

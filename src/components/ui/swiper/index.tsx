import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";
import { Navigation } from "swiper/modules";
import { Rate } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function App() {
  return (
    <Swiper
      loop={true}
      breakpoints={{
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      navigation={true}  // Use Swiper's built-in navigation without specifying custom elements
      modules={[Navigation]}
      className="mySwiper"
    >
      {new Array(10).fill(null).map((_, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="customers-swiper">
              <Rate value={5} disabled />
              <div>
                <h5>Sarah M.</h5>
                <CheckCircleOutlined style={{ color: "#01AB31" }} />
              </div>
              <p>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </SwiperSlide>
        );
      })}
      {/* Navigation buttons will be automatically generated */}
    </Swiper>
  );
}

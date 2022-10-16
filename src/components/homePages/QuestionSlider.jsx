// 9月21日（水）
// スライダーの作成、微調整が必要と思うが...

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../css/Slider.css";
// import { Pagination } from "swiper";

import { useFirebase } from "../../hooks/useFirebase";

export function QuestionSlider() {
  const navigate = useNavigate();
  const WhatCategory = (e) => {
    console.log(e.target.innerText);
    const categoryName = e.target.innerText;
    const categoryId = e.target.id;
    navigate("/questionsamples", {
      state: { categoryName: categoryName, categoryId: categoryId },
    });
  };
  const { data } = useFirebase("questionCategory");

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {Object.entries(data).map(([key, item]) => (
          <SwiperSlide
            key={key} className="category_box">
            <button onClick={WhatCategory} id={key}>
              <div className="category_name">{String(item.content)}</div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


// 9月21日（水）
// スライダーの作成、微調整が必要と思うが...

import { useNavigate } from "react-router-dom";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../css/Slider.css";

// import required modules
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
      <div
        // slidesPerView={3}
        // spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="category_wrap"
      >
        {Object.entries(data).map(([key, item]) => (
          <div key={key} className="category_box">
            <button onClick={WhatCategory} id={key}>
              <div className="category_name">{String(item.content)}</div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

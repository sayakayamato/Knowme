import "../../css/Home.css";
import "../../css/App.css";
import "swiper/css/navigation";
import { QuestionSlider } from "./QuestionSlider";

export function HomeContents() {
  return (
    <>
      <div className="home_greed">
        <div className="home_greed_bold">
          {/* <p>Welcome!</p>
          <p>Please hear myself!</p> */}
        </div>
        <div className="home_greed_regular">
          <p>カテゴリを選んで</p>
          <p>友達に質問してみよう！</p>
        </div>
      </div>
      <div className="home_contents">
        <QuestionSlider />
      </div>
    </>
  );
}

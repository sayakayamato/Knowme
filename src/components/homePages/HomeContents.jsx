import "../../css/Home.css";
import "../../css/App.css";
import "swiper/css/navigation";
import { QuestionSlider } from "./QuestionSlider";
import { CollectMyAnswer } from "./CollectMyAnswer";
import { FeedContents } from "../feedPages/FeedContents";

export function HomeContents() {
  return (
    <>
      <div className="collect_feedback_category">
        <p>フィードバックを集める</p>
        <QuestionSlider />
      </div>
      <div className="collect_my_answer">
        <p>質問に答える</p>
        <CollectMyAnswer />
      </div>

      <div className="feed_contents">
      <FeedContents />
      </div>
    </>

  );
}

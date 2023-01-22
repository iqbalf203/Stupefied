import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Split(props) {
  return (
    <div class="container">
      <div class="left-box">
        <LeftSide details={props.details} />
      </div>
      <div class="left-box">
        <RightSide />
      </div>
    </div>
  );
}

export default Split;

import "./FlexCourses.css";
import "./FlexCourses-media.css";
import Cart from "../Cart/Cart";
export default function FlexCourses({infos}) {
  
  return (
    <div className="flexCourses">
      {infos?.map((info, index) => (<Cart key={index} info={info} />))}
    </div>
  );
}

import "./FlexCourses.css";
import "./FlexCourses-media.css";
import Cart from "../Cart/Cart";
export default function FlexCourses({infos, button}) {
  
  return (
    <div className="flexCourses">
      {infos.length ? infos.map((info, index) => (<Cart key={index} info={info} button={button} />)): (<div className="flexCourses__alert">No Course Here ...</div>)}
    </div>
  );
}

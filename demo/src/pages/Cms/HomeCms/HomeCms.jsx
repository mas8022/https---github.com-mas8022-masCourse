import Chart from "../../../component/Chart/Chart";
import "./HomeCms.css";
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function HomeCms() {
  return (
    <div className="homeCms">
      <div className="cms__homeCms__watchDiv">

        <div className="cms__homeCms__watchDiv__watchBox">
          <div className="sggdsffds">
            <p className="cms__homeCms__watchDiv__watchBox__title">
              Satisfaction percentage
            </p>
            <p className="cms__homeCms__watchDiv__watchBox__text">
              The percentage of students' satisfaction with the educational site
            </p>
          </div>
          <div className="sdgsd">
            <p>64%</p>
            <MovingIcon style={{fontSize:36, color: 'green'}}/>
          </div>
        </div>

        <div className="cms__homeCms__watchDiv__watchBox">
          <div className="sggdsffds">
            <p className="cms__homeCms__watchDiv__watchBox__title">
              Sales growth
            </p>
            <p className="cms__homeCms__watchDiv__watchBox__text">
              The growth of the sales of educational videos in the last week
              until today
            </p>
          </div>
          <div className="sdgsd">
            <p>70%</p>
            <MovingIcon style={{fontSize:36, color: 'green'}}/>
          </div>
        </div>

        <div className="cms__homeCms__watchDiv__watchBox">
          <div className="sggdsffds">
            <p className="cms__homeCms__watchDiv__watchBox__title">
              Student recruitment rate
            </p>
            <p className="cms__homeCms__watchDiv__watchBox__text">
              The amount of students recruited on the site since last week
            </p>
          </div>
          <div className="sdgsd">
            <p>53%</p>
            <TrendingDownIcon style={{fontSize:36, color: 'red'}}/>
          </div>
        </div>

      </div>
      <div className="distance"></div>
      <Chart />
    </div>
  );
}

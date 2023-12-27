import Pric from "../../component/Pricing/Pricing";
import "./Home.css";
import "./Home-media.css";
import Player from "../../component/Player/Player";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import FlexCourses from "../../component/FlexCourses/FlexCourses";
import Title from "../../component/Title/Title";
import courses from "../../dataBase";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="gjsjodosisdin">
        <div className="gjsolfjhsj">
          <div className="fdsihiu">
            <div className="sfsdoo"></div>
            <div className="ihgohgidsf">
              <div className="sidfsis">
                <ElectricBoltIcon style={{ fontSize: 40 }} />
              </div>
            </div>
            <div className="sdofgosisdfiosdf">
              <span className="fdoigjfdogfdui">
                {" "}
                <span className="sfdhiskllvjdh">Unlock</span> Your Creative
                Potential
              </span>
            </div>
          </div>
          <div className="fdughsdiusifduis">
            <div className="fdgbdfgufguihdfiuiiuiud">
              with Online Design and Development Courses.
            </div>
            <div className="dfufbdfsgfudsi">
              Learn from Industry Experts and Enhance Your Skills.
            </div>
          </div>
        </div>
        <div className="gdsghjogboiudfid">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="link"
            to={"/courses"}
          >
            <div className="duighsdfighfioughiuidf">
              <div className="fhiiuoijdsuygdfsoihdfsui">Explore Courses</div>
            </div>
          </Link>

          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="link"
            to={"/pricing"}
          >
            <div className="dsuifghdfi">
              <div className="poifgjdlgjregehwkivhesdlpdslhg">View Pricing</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="siteSuggestion">
        <img src="/images/zapier.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="/images/spotify.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="/images/zoom.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="/images/amazon.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="/images/adobe.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="/images/notion.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="/images/netflix.svg" alt="" />
      </div>

      <Player
        url={
          "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns="
        }
      />
      <div className="divHr"></div>
      <Title title={"New Courses"} />
      <br />
      <FlexCourses infos={courses.slice(0, 3)} />
      <div className="divHr"></div>
      <Pric />
    </div>
  );
}

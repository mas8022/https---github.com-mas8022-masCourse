import Pric from "../../component/Pricing/Pricing";
import "./Home.css";
import "./Home-media.css";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Player from "../../component/Player/Player";
import FlexCourses from "../../component/FlexCourses/FlexCourses";
import Title from "../../component/Title/Title";

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
              <span className="sfdhiskllvjdh">Unlock</span>
              <span className="fdoigjfdogfdui">Your Creative Potential</span>
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
          <div className="duighsdfighfioughiuidf">
            <div className="fhiiuoijdsuygdfsoihdfsui">Explore Courses</div>
          </div>
          <div className="dsuifghdfi">
            <div className="poifgjdlgjregehwkivhesdlpdslhg">View Pricing</div>
          </div>
        </div>
      </div>

      <div className="siteSuggestion">
        <img src="../../../public/images/zapier.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="../../../public/images/spotify.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="../../../public/images/zoom.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="../../../public/images/amazon.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="../../../public/images/adobe.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="../../../public/images/notion.svg" alt="" />
        <div className="siteSuggestionHr"></div>
        <img src="../../../public/images/netflix.svg" alt="" />
      </div>

      <Player />
      <div className="divHr"></div>
      <Title title={"New Courses"} />
      <br />
      <FlexCourses />
      <div className="divHr"></div>
      <Pric />
    </div>
  );
}

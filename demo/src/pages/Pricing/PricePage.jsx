import "./PricePage.css";
import "./PricePage-media.css";

import Pric from "../../component/Pricing/Pricing";
import AddIcon from "@mui/icons-material/Add";

export default function PricePage() {
  const closeWrapperHandler = (e) => {
    let allHide = document.querySelectorAll(".hide");
    let active =
      Number(e.target.parentElement.children[2].style.height.slice(0, -2)) > 0;
    allHide.forEach((item) => {
      item.style.padding = "0";
      item.style.height = "0";
    });
    document.querySelectorAll(".iconAccordion").forEach((item) => {
      item.classList.remove("iconPlusAccordion");
    });

    if (active) {
      e.target.parentElement.children[2].style.height = "0";
      e.target.parentElement.children[2].style.padding = "0";
      e.target.parentElement.children[0].children[1].children[0].children[0].classList.remove(
        "iconPlusAccordion"
      );
    } else {
      e.target.parentElement.children[2].style.height =
        e.target.parentElement.scrollHeight + "px";
      e.target.parentElement.children[2].style.padding = "25px 0";
      e.target.parentElement.children[0].children[1].children[0].children[0].classList.add(
        "iconPlusAccordion"
      );
    }
  };

  return (
    <>
      <div className="dsiofghsid">
        <div className="saidghsfduihasdifds">
          <div className="sdifuhgdfsioghsdfi">
            <div className="sighsdfi">
              Can I enroll in multiple courses at once?
            </div>
            <div className="dsfgihsogihfbdsoi">
              <div className="dfiogjfopgopa">
                <AddIcon className="iconAccordion" style={{ fontSize: 30 }} />
              </div>
            </div>
          </div>
          <div
            onClick={(e) => closeWrapperHandler(e)}
            className="accordionClickHover"
          ></div>
          <div className="hide">
            <div className="fgjewhdjgfjdk">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </div>
          </div>
        </div>
        <div className="saidghsfduihasdifds">
          <div className="sdifuhgdfsioghsdfi">
            <div className="sighsdfi">
              Can I enroll in multiple courses at once?
            </div>
            <div className="dsfgihsogihfbdsoi">
              <div className="dfiogjfopgopa">
                <AddIcon className="iconAccordion" style={{ fontSize: 30 }} />
              </div>
            </div>
          </div>
          <div
            onClick={(e) => closeWrapperHandler(e)}
            className="accordionClickHover"
          ></div>
          <div className="hide">
            <div className="fgjewhdjgfjdk">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </div>
          </div>
        </div>
        <div className="saidghsfduihasdifds">
          <div className="sdifuhgdfsioghsdfi">
            <div className="sighsdfi">
              Can I enroll in multiple courses at once?
            </div>
            <div className="dsfgihsogihfbdsoi">
              <div className="dfiogjfopgopa">
                <AddIcon
                  className="iconAccordion iconExistAccordion"
                  style={{ fontSize: 30 }}
                />
              </div>
            </div>
          </div>
          <div
            onClick={(e) => closeWrapperHandler(e)}
            className="accordionClickHover"
          ></div>
          <div className="hide">
            <div className="fgjewhdjgfjdk">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </div>
          </div>
        </div>
      </div>
      <div className="divHr"></div>
      <Pric />
    </>
  );
}

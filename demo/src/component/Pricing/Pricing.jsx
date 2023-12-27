import { useEffect, useState } from "react";
import "./Pricing.css";
import "./Pricing-media.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Title from "../Title/Title";

export default function Pric() {
  const [namePrice, setNamePrice] = useState(() => {
    const namePriceLocal = JSON.parse(localStorage.getItem("namePrice"));
    return namePriceLocal ? namePriceLocal : "Monthly";
  });

  useEffect(() => {
    localStorage.setItem("namePrice", JSON.stringify(namePrice));
  }, [namePrice]);

  return (
    <div className="dfbfdsdsdasa">
      <div className="pfkj">
        <div className="saojgjkdf">
          <Title title={"Our Pricing"} />
          <div className="rosdhfdvdol">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </div>
        </div>
        <div className="oisdflknjlksadiksdfjn">
          <div
            className={
              namePrice === "Monthly"
                ? "sdohfdsjoddzuxbh fghasooij"
                : "sdhljwlbp dskjpewkib"
            }
            onClick={(e) => setNamePrice(e.target.textContent)}
          >
            Monthly
          </div>

          <div
            className={
              namePrice === "Yearly"
                ? "sdohfdsjoddzuxbh fghasooij"
                : "sdhljwlbp dskjpewkib"
            }
            onClick={(e) => setNamePrice(e.target.textContent)}
          >
            Yearly
          </div>
        </div>
      </div>

      {namePrice === "Monthly" ? (
        <div className="dsjdfgd">
          <div className="gojdsfodfs">
            <div className="ogtolsalkdkjl">
              <div className="oigteroassd">Free Plan</div>
            </div>
            <div className="odskflwpfglbgl">
              <div className="djglgpwxbmm">$0</div>
              <div className="dsiufhsdhfds">/month</div>
            </div>
            <div className="fgdsfsd">
              <div className="dsdssdsnsdnddsjk">
                <div className="sdfhgksdfslgfgsdds">Available Features</div>
                <div className="dsuifghsdiao">
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Access to selected free courses.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Limited course materials and resources.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">Basic community support.</div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      No certification upon completion.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">Ad-supported platform.</div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="dsfiifo">
                      <div className="sdihdsdspasdisdoo">
                        <HighlightOffIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Access to exclusive Pro Plan community forums.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="dsfiifo">
                      <div className="sdihdsdspasdisdoo">
                        <HighlightOffIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Early access to new courses and updates.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sdigjfosdhfodsfoisdhfisd">
                <div className="posaancjgjrtd">Get Started</div>
              </div>
            </div>
          </div>
          <div className="gojdsfodfs">
            <div className="ogtolsalkdkjl">
              <div className="oigteroassd">Pro Plan</div>
            </div>
            <div className="odskflwpfglbgl">
              <div className="djglgpwxbmm">$79</div>
              <div className="dsiufhsdhfds">/month</div>
            </div>
            <div className="fgdsfsd">
              <div className="dsdssdsnsdnddsjk">
                <div className="sdfhgksdfslgfgsdds">Available Features</div>
                <div className="dsuifghsdiao">
              
                  <div className="sdgsdojspadjfogods">

                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Unlimited access to all courses.
                    </div>
                  </div>
                  <div className="dsjdsfgsudfsu">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Unlimited course materials and resources.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Priority support from instructors.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Course completion certificates.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">Ad-free experience.</div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Access to exclusive Pro Plan community forums.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Early access to new courses and updates.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sdigjfosdhfodsfoisdhfisd">
                <div className="posaancjgjrtd">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="dsjdfgd">
          <div className="gojdsfodfs">
            <div className="ogtolsalkdkjl">
              <div className="oigteroassd">Free Plan</div>
            </div>
            <div className="odskflwpfglbgl">
              <div className="djglgpwxbmm">$0</div>
              <div className="dsiufhsdhfds">/year</div>
            </div>
            <div className="fgdsfsd">
              <div className="dsdssdsnsdnddsjk">
                <div className="sdfhgksdfslgfgsdds">Available Features</div>
                <div className="dsuifghsdiao">

                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Access to selected free courses.
                    </div>
                  </div>

                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">Basic community support.</div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Limited course materials and resources.
                    </div>
                  </div>


                  


                 
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">Ad-supported platform.</div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="dsfiifo">
                      <div className="sdihdsdspasdisdoo">
                        <HighlightOffIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Access to exclusive Pro Plan community forums.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      No certification upon completion.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="dsfiifo">
                      <div className="sdihdsdspasdisdoo">
                        <HighlightOffIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Early access to new courses and updates.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sdigjfosdhfodsfoisdhfisd">
                <div className="posaancjgjrtd">Get Started</div>
              </div>
            </div>
          </div>
          <div className="gojdsfodfs">
            <div className="ogtolsalkdkjl">
              <div className="oigteroassd">Pro Plan</div>
            </div>
            <div className="odskflwpfglbgl">
              <div className="djglgpwxbmm">$79</div>
              <div className="dsiufhsdhfds">/year</div>
            </div>
            <div className="fgdsfsd">
              <div className="dsdssdsnsdnddsjk">
                <div className="sdfhgksdfslgfgsdds">Available Features</div>
                <div className="dsuifghsdiao">
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Unlimited access to all courses.
                    </div>
                  </div>
                  <div className="dsjdsfgsudfsu">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Unlimited course materials and resources.
                    </div>
                  </div>
                  
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Course completion certificates.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">Ad-free experience.</div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Priority support from instructors.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Access to exclusive Pro Plan community forums.
                    </div>
                  </div>
                  <div className="sdgsdojspadjfogods">
                    <div className="sdakfhsdngsid">
                      <div className="sdihdsdspasdisdoo">
                        <CheckCircleOutlineIcon />
                      </div>
                    </div>
                    <div className="plkiujyhtg">
                      Early access to new courses and updates.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sdigjfosdhfodsfoisdhfisd">
                <div className="posaancjgjrtd">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

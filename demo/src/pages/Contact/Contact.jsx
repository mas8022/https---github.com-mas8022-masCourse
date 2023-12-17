import "./Contact.css";
import './Contact-media.css'
import Title from "../../component/Title/Title";

export default function Contact() {
  return (
    <>
      <div className="siodhgsdihis">
        <Title title={"Contact Us"} />
        <div className="sadfhdsisdaasi">
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </div>
      </div>

      <div className="concat__grid">
        <div className="concat__grid__form">
          <div className="igybdsuisddiu">
            <div className="ffugbsdfus">
              <div className="fghsdfisiuo">
                <div className="sduifghfsd">
                  <div className="dsifoghiasalo">First Name</div>
                  <input
                    type="text"
                    className="sfiugsaifdsfs"
                    placeholder="write your first name"
                  />
                </div>
                <div className="sduifghfsd">
                  <div className="dsifoghiasalo">Last Name</div>
                  <input
                    type="text"
                    className="sfiugsaifdsfs"
                    placeholder="write your last name"
                  />
                </div>
              </div>
              <div className="fghsdfisiuo">
                <div className="sduifghfsd">
                  <div className="dsifoghiasalo">Email</div>
                  <input
                    type="text"
                    className="sfiugsaifdsfs"
                    placeholder="write your email"
                  />
                </div>
                <div className="sduifghfsd">
                  <div className="dsifoghiasalo">Phone</div>
                  <input
                    type="text"
                    className="sfiugsaifdsfs"
                    placeholder="write your phone number"
                  />
                </div>
              </div>
              <div className="didsfghfdhdf">
                <div className="dsifoghiasalo">Subject</div>
                <input
                  type="text"
                  className="sfiugsaifdsfs"
                  placeholder="enter your subject"
                />
              </div>
            </div>
            <div className="dhhjjsssskgsfuahbs">
              <div className="dsifoghiasalo">Message</div>
              <input
                type="text"
                className="soidfhsaidofasdh"
                placeholder="Enter your Message here..."
              />
            </div>
            <button type="submit" className="sdoiusdiodasohiou">
              <span className="sdoifhidofas">Send Your Message</span>
            </button>
          </div>
        </div>

        <div className="concat__grid__address">
          <div className="oifghsdfiougnhsap">
            <div className="sfudiogbasdoifbhiodsbsdia">
              <div className="sdfioughsadiofhsdaifdsio">
                <div className="gsaouidgfhdsaihgsdaiufsadhio">
                  <div className="sdgiohsiouadodaop image"></div>
                </div>
              </div>
              <div className="dsfoighaipwwehfsdapoifasd">
                support@skillbridge.com
              </div>
            </div>
            <div className="sfudiogbasdoifbhiodsbsdia">
              <div className="sdfioughsadiofhsdaifdsio">
                <div className="gsaouidgfhdsaihgsdaiufsadhio">
                  <div className="sdfoighosinaspif image"></div>
                </div>
              </div>
              <div className="dsfoighaipwwehfsdapoifasd">+91 00000 00000</div>
            </div>
            <div className="sfudiogbasdoifbhiodsbsdia">
              <div className="sdfioughsadiofhsdaifdsio">
                <div className="gsaouidgfhdsaihgsdaiufsadhio">
                  <div className="sdofighsaiofhsdifi image"></div>
                </div>
              </div>
              <div className="dsfoighaipwwehfsdapoifasd">
                Some Where in the World
              </div>
            </div>
            <div className="sfudiogbasdoifbhiodsbsdia">
              <div className="sdfigohoifhsdiafnsda">
                <div className="dsfioghaiposhjfpodhsaio">
                  <div className="gsaouidgfhdsaihgsdaiufsadhio">
                    <div className="waiodhfiodsfasdiop image"></div>
                  </div>
                </div>
                <div className="dsfioghaiposhjfpodhsaio">
                  <div className="gsaouidgfhdsaihgsdaiufsadhio">
                    <div className="zsoiudfpawohdspa image"></div>
                  </div>
                </div>
                <div className="dsfioghaiposhjfpodhsaio">
                  <div className="gsaouidgfhdsaihgsdaiufsadhio edfsadrttsafsd image"></div>
                </div>
              </div>
              <div className="dsfoighaipwwehfsdapoifasd">Social Profiles</div>
            </div>
          </div>
        </div>
      </div>
      <div className="distance"></div>
    </>
  );
}

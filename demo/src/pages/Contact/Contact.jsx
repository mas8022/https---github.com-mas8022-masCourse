import "./Contact.css";
import "./Contact-media.css";
import Title from "../../component/Title/Title";
import { useFormik } from "formik";
import swal from "sweetalert";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function Contact() {
  const contactForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      massage: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName || !isNaN(values.firstName)) {
        errors.firstName = "write correct firstname";
      } else if (!values.lastName || !isNaN(values.lastName)) {
        errors.lastName = "write correct lastname";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "write correct email";
      } else if (!values.phone || isNaN(values.phone)) {
        errors.phone = "write correct phone number";
      } else if (!values.subject) {
        errors.subject = "fill the subject input";
      } else if (!values.massage) {
        errors.massage = "fill the massage input";
      }

      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      fetch("https://mascourses-back.liara.run/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          massage: values.massage,
        }),
      }).then((res) => {
        console.log(res);
        console.log({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          massage: values.massage,
        });
        if (res.ok === true) {
          swal("Success", "send comment successfully", "success").then(() => {
            // values.firstName = "";
            // values.lastName = "";
            // values.email = "";
            // values.phone = "";
            // values.subject = "";
            // values.massage = "";
          });
        }
      });

      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },
  });

  return (
    <>
      <div className="siodhgsdihis">
        <Title title={"Contact Us"} />
        <div className="sadfhdsisdaasi">
          Welcome to Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </div>
      </div>

      <div className="concat__grid">
        <div className="concat__grid__form">
          <form onSubmit={contactForm.handleSubmit} className="igybdsuisddiu">
            <div className="igybdsuisddiu">
              <div className="ffugbsdfus">
                <div className="fghsdfisiuo">
                  <div className="sduifghfsd">
                    <div className="dsifoghiasalo">First Name</div>
                    <input
                      name="firstName"
                      value={contactForm.values.firstName}
                      onChange={contactForm.handleChange}
                      type="text"
                      className={
                        contactForm.touched.firstName &&
                        contactForm.errors.firstName
                          ? "errorBorder sfiugsaifdsfs"
                          : "sfiugsaifdsfs"
                      }
                      placeholder="write your first name"
                    />
                  </div>
                  <div className="sduifghfsd">
                    <div className="dsifoghiasalo">Last Name</div>
                    <input
                      name="lastName"
                      value={contactForm.values.lastName}
                      onChange={contactForm.handleChange}
                      type="text"
                      className={
                        contactForm.touched.lastName &&
                        contactForm.errors.lastName
                          ? "errorBorder sfiugsaifdsfs"
                          : "sfiugsaifdsfs"
                      }
                      placeholder="write your last name"
                    />
                  </div>
                </div>
                <div className="fghsdfisiuo">
                  <div className="sduifghfsd">
                    <div className="dsifoghiasalo">Email</div>
                    <input
                      name="email"
                      value={contactForm.values.email}
                      onChange={contactForm.handleChange}
                      type="text"
                      className={
                        contactForm.touched.email && contactForm.errors.email
                          ? "errorBorder sfiugsaifdsfs"
                          : "sfiugsaifdsfs"
                      }
                      placeholder="write your email"
                    />
                  </div>
                  <div className="sduifghfsd">
                    <div className="dsifoghiasalo">Phone</div>
                    <input
                      name="phone"
                      value={contactForm.values.phone}
                      onChange={contactForm.handleChange}
                      type="text"
                      className={
                        contactForm.touched.phone && contactForm.errors.phone
                          ? "errorBorder sfiugsaifdsfs"
                          : "sfiugsaifdsfs"
                      }
                      placeholder="write your phone number"
                    />
                  </div>
                </div>
                <div className="didsfghfdhdf">
                  <div className="dsifoghiasalo">Subject</div>
                  <input
                    name="subject"
                    value={contactForm.values.subject}
                    onChange={contactForm.handleChange}
                    type="text"
                    className={
                      contactForm.touched.subject && contactForm.errors.subject
                        ? "errorBorder sfiugsaifdsfs"
                        : "sfiugsaifdsfs"
                    }
                    placeholder="enter your subject"
                  />
                </div>
              </div>
              <div className="dhhjjsssskgsfuahbs">
                <div className="dsifoghiasalo">Message</div>
                <input
                  name="massage"
                  value={contactForm.values.massage}
                  onChange={contactForm.handleChange}
                  type="text"
                  className={
                    contactForm.touched.massage && contactForm.errors.massage
                      ? "errorBorder soidfhsaidofasdh"
                      : "soidfhsaidofasdh"
                  }
                  placeholder="Enter your Message here..."
                />
              </div>
              <button type="submit" className="sdoiusdiodasohiou btn">
                Send Your Message
              </button>
            </div>
          </form>
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

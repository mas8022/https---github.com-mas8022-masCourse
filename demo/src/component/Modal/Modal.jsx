import { useEffect, useState, useContext } from "react";
import "./Modal.css";
import "./Modal-media.css";
import context from "../../Context/Context";
export default function Modal() {
  const contextModal = useContext(context);
  const [eyeFlag, setEyeFlag] = useState(false);

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "1077525271751-2ijb5p92298b4m6ppg770njt78dl4nt7.apps.googleusercontent.com",
      callback: () => {
        console.log("login");
      },
    });
    google.accounts.id.renderButton(document.querySelector(".signUp"), {
      theme: "outline",
    });
  }, []);

  useEffect(() => {
    console.log(eyeFlag);
  }, [eyeFlag]);

  window.addEventListener("click", (e) => {
    e.target.contains(document.querySelector(".modalActive")) &&
      contextModal.setModal(false);
  });

  return (
    <div className={contextModal.modal ? "modalActive center" : "modal center"}>
      {contextModal.modalMode === "sign" ? (
        <div className="fuigbsdiusbdfoi">
          <div className="dfiosghfdgihfdnspio">
            <div className="ifgshafjsdaojhois">Sign Up</div>
            <div className="dfsiohgfdsiopghfsdoh">
              Create an account to unlock exclusive features.
            </div>
          </div>
          <div className="ghfioughdsio">
            <div className="dfiopgndhspoghnfdsiogndfs">
              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Full Name</div>

                <div className="inputPassFlex">
                  <input
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type="text"
                    placeholder="Enter your Name"
                  />
                </div>
              </div>
              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Email</div>

                <div className="inputPassFlex">
                  <input
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type="text"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>

              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Password</div>

                <div className="inputPassFlex">
                  <input
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type={eyeFlag ? "text" : "password"}
                    placeholder="Enter your Password"
                  />
                  <img
                    onClick={() => setEyeFlag((p) => (p = !p))}
                    className="image"
                    src={
                      eyeFlag
                        ? "../../../public/images/hide.svg"
                        : "../../../public/images/eye.svg"
                    }
                    alt="see"
                  />
                </div>
              </div>

              <div className="fudiosghsdfioghfdsioiouf">
                <input
                  type="checkbox"
                  className="fdioghfdoighjogjposop fdioghsdfnpogjgodsop"
                />

                <p className="dioghfndighjoisoisd">
                  <span className="fiughfdigusfhdgiossdi">I agree with</span>
                  <a href="#" className="idofhgsfioghjpoghogdsoi">
                    Terms of Use
                  </a>
                  <span className="fiughfdigusfhdgiossdi">and</span>
                  <a href="#" className="idofhgsfioghjpoghogdsoi">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="dioghoighdfighdsoigphgpsod dfioghdfiogh9igsfgoisusou center">
                Sign Up
              </div>
            </div>
            <div className="fgbfdihgjdoipjospdf">
              <div className="diufghdfoighfdighfdois"></div>
              <div className="dughdpighdfioghdfsoi">OR</div>
              <div className="diufghdfoighfdighfdois"></div>
            </div>

            <div className="signUp"></div>

            <div className="dfiohfdpgidfhisfdios">
              Already have an account?<span>Login</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="fuigbsdiusbdfoi dhdfrtttdhffd">
          <div className="dfiosghfdgihfdnspio">
            <div className="ifgshafjsdaojhois">Login</div>
            <div className="dfsiohgfdsiopghfsdoh">
              Welcome back! Please log in to access your account.
            </div>
          </div>
          <div className="ghfioughdsio">
            <div className="dfiopgndhspoghnfdsiogndfs">
              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Email</div>

                <div className="inputPassFlex">
                  <input
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type="text"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>

              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Password</div>

                <div className="inputPassFlex">
                  <input
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type={eyeFlag ? "text" : "password"}
                    placeholder="Enter your Password"
                  />
                  <img
                    onClick={() => setEyeFlag((p) => (p = !p))}
                    className="image"
                    src={
                      eyeFlag
                        ? "../../../public/images/hide.svg"
                        : "../../../public/images/eye.svg"
                    }
                    alt="see"
                  />
                </div>
              </div>

              <div className="gfdgoihoifg">?Forgot Password</div>

              <div className="fudiosghsdfioghfdsioiouf">
                <input
                  type="checkbox"
                  className="fdioghfdoighjogjposop fdioghsdfnpogjgodsop"
                />

                <p className="dioghfndighjoisoisd rfyrtysrfewtrthd">
                  Remember Me
                </p>
              </div>

              <div className="dioghoighdfighdsoigphgpsod dfioghdfiogh9igsfgoisusou center">
                Login
              </div>
            </div>
            <div className="fgbfdihgjdoipjospdf">
              <div className="diufghdfoighfdighfdois"></div>
              <div className="dughdpighdfioghdfsoi">OR</div>
              <div className="diufghdfoighfdighfdois"></div>
            </div>

            <div className="login"></div>

            <div className="dfiohfdpgidfhisfdios">
              Don’t have an account?<span>Sign Up</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState, useContext } from "react";
import "./Modal.css";
import "./Modal-media.css";
import context from "../../Context/Context";
import { useFormik } from "formik";
import swal from "sweetalert";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function Modal() {
  const contextModal = useContext(context);
  const [eyeFlagS, setEyeFlagS] = useState(false);
  const [eyeFlagL, setEyeFlagL] = useState(false);

  const SignUpForm = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      check: false,
    },
    validate: (values) => {
      const errors = {};
      if (values.fullName === "") {
        errors.fullName = "write your full name";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "write the correct email";
      } else if (values.password.length < 5) {
        errors.password = "the password should be more than 4 characters";
      } else if (!values.check) {
        errors.check = "check the terms";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      let newUser = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        profileImage: "",
        mode: "user",
      };

      fetch("https://mascourses-back.liara.run/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => {
          if (res.ok) {
            contextModal.setUser(newUser);
            contextModal.setModal(false);
            swal({
              title: "Success",
              text: "You login successfully!",
              icon: "success",
              button: "ok",
            }).then(() => contextModal.setLogFlag(true));
          }
        })
        .catch(() => {
          return false
        });

      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      remind: false,
    },
    validate: (values) => {
      const errors = {};
      if (!emailRegex.test(values.email)) {
        errors.email = "write correct email";
      } else if (values.password.length < 5) {
        errors.password = "the password should be more than 4 characters";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {


      const userFind = await contextModal.allUsers.find(
        (user) =>
          user.email === values.email &&
          user.password === values.password &&
          user
      );

      console.log(typeof(userFind));


      if (userFind.email) {
        contextModal.setUser(userFind);
        contextModal.setLogFlag(true);
        swal({
          icon: "success",
          title: "welcome to site again",
          timer: 1000,
        });
      } else {
        swal({
          icon: "error",
          title: "Information is wrong",
          text: "Your information is not available in the system",
          button: true,
        });
      }
      fetch;
      contextModal.setModal(false),
        setTimeout(() => {
          setSubmitting(false);
        }, 3000);
    },
  });

  useEffect(() => {
    if (contextModal.modalMode === "sign") {
      google.accounts.id.initialize({
        client_id:
          "1077525271751-2ijb5p92298b4m6ppg770njt78dl4nt7.apps.googleusercontent.com",
      });
      google.accounts.id.renderButton(document.querySelector(".signUp"), {
        theme: "outline",
      });
    } else {
      google.accounts.id.initialize({
        client_id:
          "1077525271751-2ijb5p92298b4m6ppg770njt78dl4nt7.apps.googleusercontent.com",
      });
      google.accounts.id.renderButton(document.querySelector(".login"), {
        theme: "outline",
      });
    }
  }, []);

  window.addEventListener("click", (e) => {
    e.target.contains(document.querySelector(".modalActive")) &&
      contextModal.setModal(false);
  });

  return (
    <div
      className={
        contextModal.modal ? "modal center modalActive" : "modal center"
      }
    >
      {contextModal.modalMode === "sign" ? (
        <div className="fuigbsdiusbdfoi">
          <div className="dfiosghfdgihfdnspio">
            <div className="ifgshafjsdaojhois">Sign Up</div>
            <div className="dfsiohgfdsiopghfsdoh">
              Create an account to unlock exclusive features.
            </div>
          </div>
          <div className="ghfioughdsio">
            <form
              onSubmit={SignUpForm.handleSubmit}
              className="dfiopgndhspoghnfdsiogndfs"
            >
              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Full Name</div>

                <div
                  className={
                    SignUpForm.errors.fullName && SignUpForm.touched.fullName
                      ? "inputPassFlex warringInput"
                      : "inputPassFlex"
                  }
                >
                  <input
                    name="fullName"
                    value={SignUpForm.values.fullName}
                    onChange={SignUpForm.handleChange}
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type="text"
                    placeholder={
                      SignUpForm.errors.fullName && SignUpForm.touched.fullName
                        ? SignUpForm.errors.fullName
                        : "Enter your Name"
                    }
                  />
                </div>
              </div>

              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Email</div>

                <div
                  className={
                    SignUpForm.errors.email && SignUpForm.touched.email
                      ? "inputPassFlex warringInput"
                      : "inputPassFlex"
                  }
                >
                  <input
                    name="email"
                    value={SignUpForm.values.email}
                    onChange={SignUpForm.handleChange}
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type="text"
                    placeholder={
                      SignUpForm.errors.email && SignUpForm.touched.email
                        ? "write correct email address"
                        : "Enter your Email"
                    }
                  />
                </div>
              </div>

              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Password</div>

                <div
                  className={
                    SignUpForm.errors.password && SignUpForm.touched.password
                      ? "inputPassFlex warringInput"
                      : "inputPassFlex"
                  }
                >
                  <input
                    name="password"
                    value={SignUpForm.values.password}
                    onChange={SignUpForm.handleChange}
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type={eyeFlagS ? "text" : "password"}
                    placeholder={
                      SignUpForm.errors.password && SignUpForm.touched.password
                        ? "password should be more than 4 characters"
                        : "Enter your Password"
                    }
                  />
                  <img
                    onClick={() => setEyeFlagS((p) => (p = !p))}
                    className="image"
                    src={eyeFlagS ? "/images/hide.svg" : "/images/eye.svg"}
                    alt="see"
                  />
                </div>
              </div>

              <div className="fudiosghsdfioghfdsioiouf">
                <input
                  name="check"
                  value={SignUpForm.values.check}
                  onChange={SignUpForm.handleChange}
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
                <p className="form__alert">
                  {SignUpForm.errors.check &&
                    SignUpForm.touched.check &&
                    SignUpForm.errors.check}
                </p>
              </div>

              <button
                type="submit"
                className="dioghoighdfighdsoigphgpsod dfioghdfiogh9igsfgoisusou btn center"
              >
                Sign Up
              </button>
            </form>
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
            <form
              onSubmit={loginForm.handleSubmit}
              className="dfiopgndhspoghnfdsiogndfs"
            >
              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Email</div>

                <div
                  className={
                    loginForm.errors.email && loginForm.touched.email
                      ? "inputPassFlex warringInput"
                      : "inputPassFlex"
                  }
                >
                  <input
                    name="email"
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type="text"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>

              <div className="fidoghfsd0ighiohndsiosd">
                <div className="hdfioughsfisdhfsioaoi">Password</div>

                <div
                  className={
                    loginForm.errors.password && loginForm.touched.password
                      ? "inputPassFlex warringInput"
                      : "inputPassFlex"
                  }
                >
                  <input
                    name="password"
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    className="fghfjoifjreoieepo poiplujkdfgh"
                    type={eyeFlagL ? "text" : "password"}
                    placeholder="Enter your Password"
                  />
                  <img
                    onClick={() => setEyeFlagL((p) => (p = !p))}
                    className="image"
                    src={eyeFlagL ? "/images/hide.svg" : "/images/eye.svg"}
                    alt="see"
                  />
                </div>
              </div>

              <div className="gfdgoihoifg">?Forgot Password</div>

              <div className="fudiosghsdfioghfdsioiouf">
                <input
                  name="remind"
                  value={loginForm.values.remind}
                  onChange={loginForm.handleChange}
                  type="checkbox"
                  className="fdioghfdoighjogjposop fdioghsdfnpogjgodsop"
                />

                <p className="dioghfndighjoisoisd rfyrtysrfewtrthd">
                  Remember Me
                </p>
              </div>

              <button
                type="submit"
                className="dioghoighdfighdsoigphgpsod dfioghdfiogh9igsfgoisusou btn center"
              >
                Login
              </button>
            </form>
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

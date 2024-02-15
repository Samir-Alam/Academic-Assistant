import { useState } from "react";
import InputControl from "../../components/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all the fields !!!");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/home");
        // console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        console.log("Error - ", err.message);
      });
  };

  return (
    <div className="bg-cyberpunk bg-contain h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="h-[100vh] w-full opacity-70 fixed bg-slate-950"></div>
      <div className="h-fit w-[40%] xs2:w-[80%] xs:w-[70%] sm:w-[50%] md:w-[50%] lg:w-[40%] z-10 purple_gradient bg-gradient-to-b p-5 rounded-lg backdrop-filter backdrop-blur-lg glow">
        <h1 className="text-white font-bold md:text-[40px] sm:text-[30px] text-[25px]">
          Sign Up
        </h1>
        <h2 className="sectionSubText">Create New Account</h2>

        <InputControl
          label="Name"
          placeholder="Name"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Email"
          type="email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Password"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className="flex flex-col gap-3 text-white-100 items-center">
          {errorMsg.length !== 0 && (
            <b className="font-bold text-sm text-[#ff3300] text-center backdrop-blur-sm rounded-md bg-red-300 w-fit p-2">
              {errorMsg}
            </b>
          )}
          <button
            className="flex flex-row gap-1 outline-none border-none bg-orange-700 text-[#fff] rounded-md font-bold text-base text-center justify-center py-[10px] px-[16px] w-full duration-100 hover:bg-orange-500 disabled:opacity-40"
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >
            Create Account
          </button>
          <p className="justify-center text-center">
            Already a Member?{" "}
            <span>
              <Link
                to="/login"
                className="text-orange-700 font-bold hover:text-orange-500"
              >
                LogIn
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

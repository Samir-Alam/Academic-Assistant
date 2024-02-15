import { useState } from "react";
import InputControl from "../../components/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { signInWithEmailAndPassword,
  //  updateProfile 
  } 
   from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all the fields !!!");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/home");
        console.log(res);
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
          Login
        </h1>

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

        <div className="flex flex-col gap-3 text-white-100">
          {errorMsg.length !== 0 && (
            <b className="font-bold text-sm text-[#ff3300] text-center backdrop-blur-sm rounded-md bg-red-300 w-fit p-2">
              {errorMsg}
            </b>
          )}
          <button
            className="flex flex-row gap-1 outline-none border-none bg-orange-700 text-[#fff] rounded-md font-bold text-base text-center justify-center py-[10px] px-[16px] w-full duration-100 hover:bg-orange-500 disabled:opacity-20"
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >
            Login <LogIn />
          </button>
          <p className="justify-center text-center">
            Already have an account?{" "}
            <span>
              <Link
                to="/signup"
                className="text-orange-700 font-bold hover:text-orange-500"
              >
                Sign Up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

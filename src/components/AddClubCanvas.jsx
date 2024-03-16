import InputControl from "../components/InputControl"
import { useState } from "react"
import { writeClubsData } from "../firebase";
import { useNavigate } from "react-router-dom";
const AddClubCanvas = () => {
    
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name : "",
        id : "",
        description : "",
        image : ""
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = async () => {
      if (!values.name || !values.description) {
        setErrorMsg("Fill the name and description fields !!!");
        return;
      }
      setErrorMsg("");
      setSubmitButtonDisabled(true);
      try {
        
        await writeClubsData(values.name, values.id, values.description, values.image);
        navigate('/clubs');
      } catch (error) {
        console.log("didn't navigate",error);
      }
    };

  return (
    <div className="bg-darkGrey bg-contain h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="h-fit w-[40%] xs2:w-[80%] xs:w-[70%] sm:w-[50%] md:w-[50%] lg:w-[40%] z-10 bg-darkPrimary p-5 rounded-lg lg glow">
        <h1 className="text-white font-bold md:text-[40px] sm:text-[30px] text-[25px]">
          Add New Club
        </h1>

        <InputControl
          label="Name"
          placeholder="Name"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="ID"
          placeholder="ID"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, id: event.target.value }))
          }
        />
        <InputControl
          label="Description"
          placeholder="Description"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, description: event.target.value }))
          }
        />

        <InputControl 
        label="Image"
        placeholder="Drop the image"
        type="file"
        onChange={(event) =>{
          console.log(event.target.files[0]);
        setValues((prev) => ({ ...prev, image: event.target.files[0] }))
        }}/>

        <div className="flex flex-col gap-3 text-white-100 items-center">
          {errorMsg.length !== 0 && (
            <b className="font-bold text-sm text-[#ff3300] text-center backdrop-blur-sm rounded-md bg-red-300 w-fit p-2">
              {errorMsg}
            </b>
          )}
          <button
            className="flex flex-row gap-1 outline-none border-none bg-slate-800 text-[#fff] rounded-xl font-bold text-base text-center justify-center py-[10px] px-[16px] w-full duration-100 hover:bg-slate-600 disabled:opacity-40"
            onClick={handleSubmission}
            
            disabled={submitButtonDisabled}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddClubCanvas
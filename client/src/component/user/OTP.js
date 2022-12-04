import React from "react";
import { userStore } from "../../state/user";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState(new Array(4).fill(""));

  const loading = userStore((state) => state.loading);
  const resetOTP = userStore((state) => state.resetOTP);

  const handleReset = () => {
    resetOTP(
      {
        otp: otp.join(""),
        password: JSON.parse(localStorage.getItem("resetPW"))?.password,
      },
      navigate
    );
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]); //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <span className=" flex h-screen w-screen">
      <form className="m-auto grid bg-white shadow-lg m-auto max-w-[23rem] min-w-[23rem] h-auto border-2 border-zinc-300 rounded-xl p-5">
        <div className="">
          {otp.map((data, index) => {
            return (
              <input
                className="text-center h-10 w-8 border-2 rounded-md space-mono text-zinc-800 text-xl m-1 focus:outline-none bg-white focus:border-cyan-800"
                type="number"
                name="otp"
                maxLength={"1"}
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <span className="flex flex-wrap justify-between w-[12rem] mt-5 mb-10 mx-auto">
          <button onClick={() => setOtp([...otp.map(() => "")])}> clear</button>
          <button onClick={handleReset} disabled={loading}>
            submit
          </button>
        </span>
      </form>
    </span>
  );
};

export default OTP;

import React, { useRef, useState } from "react";



const Login = () => {
  const [PhoneEmp, setPhoneEmp] = useState(false);
  const [PhoneErr, setPhoneErr] = useState(false);
  const [PassEmp, setPassEmp] = useState(false);
  const [PassErr, setPassErr] = useState(false);
  const phone = useRef();
  const pass = useRef();

//   const sign = () => {
//     navigate("/");
//   };
  const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(/^(?:\+\d{1,3})?\d{10}$/);
  };
  const handleRegister = (e) => {
    const Phone = phone.current.value;
    const Pass = pass.current.value;
    let b = 0,
      c = 0;

    if (!Phone) {
      setPhoneEmp(true);
    } else {
      setPhoneEmp(false);
      if (validatePhone(Phone)) {
        b = 1;
        setPhoneErr(false);
      } else {
        setPhoneErr(true);
      }
    }
    if (!Pass) {
      setPassEmp(true);
    } else {
      setPassEmp(false);
      if (Pass.length < 6) {
        setPassErr(true);
      } else {
        setPassErr(false);
        c = 1;
      }
    }
    if (b + c === 2) {
 
    }

  };
  return (
    <div className="w-full h-full flex justify-center items-center bily">
      <div className="flex flex-col z-10 bg-[#151515] sm:rounded-lg p-5 sm:px-10 px-13 items-start sm:w-max w-full sm:h-max h-full">
        <div className="text-slate-50 font-semibold text-[1.7rem] mt-1 flex w-full ">
          Welcome to Sharead
        </div>

        <div className="flex flex-col ">
          <span className="text-slate-200 font-thin my-2 text-xl mb-3">
            Phone
          </span>
          <input
            type="tel"
            className="sm:w-72 w-64 h-10 rounded-lg outline-none px-2 py-2 font-medium "
            ref={phone}
          />
          {PhoneEmp && (
            <small className="text-red-600 text-[1rem] ">
              Please enter the phone
            </small>
          )}
          {PhoneErr && (
            <small className="text-red-600 text-[1rem] ">Invaild phone</small>
          )}
        </div>
        <div className="flex flex-col my-2">
          <span className="text-slate-200 font-thin my-2 text-xl mb-3">
            Password
          </span>
          <input
            type="text"
            className="sm:w-72 w-64 h-10 rounded-lg outline-none px-2 py-2 font-medium"
            ref={pass}
          />
          {PassEmp && (
            <small className="text-red-600 text-[1rem] ">
              Please enter the password
            </small>
          )}
          {PassErr && (
            <small className="text-red-600 text-[1rem] ">
              Password must have 6 character
            </small>
          )}
        </div>
        <div className="flex w-full items-center justify-center mt-7 mb-5">
          <button
            className="text-xl bg-slate-50 text-slate-900 px-4 py-2 font-semibold rounded-lg w-full "
            onClick={() => {
              handleRegister();
            }}
          >
            Register
          </button>
        </div>
        <div className="text-slate-50">
          Don't have an account?
          <span
            className="font-bold"
            onClick={() => {
              sign();
            }}
          >
            SignIn
          </span>{" "}
          instead
        </div>
      </div>
    </div>
  );
};

export default Login;

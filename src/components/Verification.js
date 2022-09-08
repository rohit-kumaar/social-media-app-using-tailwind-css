import React from "react";
import { Link } from "react-router-dom";

export const Verification = () => {
  return (
    <>
      <div className="verification container py-5 d-flex flex-column gap-4">
        <p className="h2 text-green"> Mobile/Email Number Verification</p>
        <p className="h3">We have sent you an OTP on</p>
        <p className="h3">
          +918953454808/akanksha.goswami@healthassure.in <br /> OTP
        </p>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Please enter the 6 digit OTP to verify"
        />
        <p>Resend OTP</p>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="#" className="btn bg-green fw-bold px-5">
            Login
          </Link>
          <p className="bg-slate p-2 ">CALL US 980998</p>
        </div>
      </div>
    </>
  );
};

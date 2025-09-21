import { Input } from "@/components/ui/input";
import limeWireLogo from "../assets/images/imgi_1_limewire-logo-DKBCUtag.svg";
import loginBg from "../assets/images/imgi_3_auth-bg-DZLVjUzv.svg";
import { useEffect } from "react";

const EmailOtp = () => {
  useEffect(() => {
    document.title = "Sign In | LimeWire";
  }, []);
  return (
    <div className="flex items-stretch max-w-screen overflow-x-hidden overflow-y-auto min-h-screen">
      {/* Sign in options */}
      <div className="w-full lg:w-1/2 min-h-full px-3.5 sm:px-0 flex flex-col justify-between items-center">
        <div className="w-full sm:px-3.5 md:px-4 py-6">
          <a href="#">
            <img
              src={limeWireLogo}
              alt="LimeWire Logo"
              className="w-32 object-contain"
            />
          </a>
        </div>
        <form className="max-w-sm sm:w-sm flex flex-col gap-y-5">
          <p className="font-dmsans text-left text-4xl font-semibold leading-normal tracking-tight mb-3">
            Sign In to LimeWire
          </p>

          <div>
            <label
              htmlFor="useremail"
              className="text-sm font-medium text-[#344054]"
            >
              E-Mail Authentication Code
            </label>
            <Input
              type="password"
              className="!h-11 my-2 focus-visible:border-[rgb(128,201,165)] focus-visible:ring-4 focus-visible:ring-emerald-100/60 placeholder:text-base"
              id="useremail"
              placeholder="••••••"
            />
            <p className="text-sm text-slate-500">
              Enter 6-digit code sent to{" "}
              <span className="text-slate-700 font-semibold">
                user@gmail.com
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full !h-11 bg-limeWire hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 outline-limeWire font-dmsans text-white  font-bold rounded-s-full rounded-e-full"
          >
            Continue
          </button>

          <button
            type="submit"
            className="w-full !h-11 text-sm bg-white hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 outline-limeWire text-slate-700 font-dmsans 
            font-bold rounded-s-full rounded-e-full text-center gap-x-2 border border-slate-300"
          >
            Send a new E-Mail code
          </button>
        </form>

        <div className="mt-8 max-w-sm sm:w-sm">
          <p className="font-dmsans text-xs text-slate-500 text-center">
            LimeWire{" "}
            <a
              href="#"
              className="text-limeWire hover:underline focus-visible:underline outline-none"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-limeWire hover:underline focus-visible:underline outline-none"
            >
              Privacy Policy
            </a>{" "}
            apply
          </p>

          <p className="font-dmsans text-[10px] opacity-75 text-slate-500 text-center mt-2">
            This site is protected by reCAPTCHA and the Google
            <a
              href="#"
              className="text-limeWire hover:underline focus-visible:underline outline-none"
            >
              {" "}
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-limeWire hover:underline focus-visible:underline outline-none"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>

        <div className="w-full sm:px-3.5 md:px-4 py-6">
          <p className="font-dmsans text-slate-500 mt-8 text-sm leading-normal tracking-tight">
            © 2025 LimeWire™
          </p>
        </div>
      </div>

      {/* SIgn in page bg */}
      <div className="w-1/2 hidden lg:block loginBG" />
    </div>
  );
};

export default EmailOtp;

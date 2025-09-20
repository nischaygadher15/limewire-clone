import { Input } from "@/components/ui/input";
import googleIcon from "../assets/images/imgi_2_auth-provider-google-icon-BfphMkKN.svg";
import { FaDiscord } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { BiWalletAlt } from "react-icons/bi";
import limeWireLogo from "../assets/images/imgi_1_limewire-logo-DKBCUtag.svg";
import loginBg from "../assets/images/imgi_3_auth-bg-DZLVjUzv.svg";

const Login = () => {
  return (
    <div className="flex items-stretch max-w-screen overflow-x-hidden overflow-y-auto min-h-screen">
      {/* Sign in options */}
      <div className="w-full lg:w-1/2 min-h-full flex flex-col justify-between items-center">
        <div className="w-full px-3.5 md:px-4 py-6">
          <img
            src={limeWireLogo}
            alt="LimeWire Logo"
            className="w-32 object-contain"
          />
        </div>
        <form className="w-sm flex flex-col gap-y-5">
          <p className="font-dmsans text-left text-4xl font-[600] leading-normal tracking-tight mb-3">
            Sign In to LimeWire
          </p>

          <div>
            <label
              htmlFor="useremail"
              className="text-sm font-[500] text-[#344054]"
            >
              Email
            </label>
            <Input
              type="text"
              className="!h-11 mt-2 focus-visible:border-[rgb(128,201,165)] focus-visible:ring-4 focus-visible:ring-emerald-100/60 placeholder:text-base"
              id="useremail"
              placeholder="Email Address"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-[500] text-[#344054]"
            >
              Password
            </label>
            <Input
              type="password"
              className="!h-11 mt-2 focus-visible:border-[#80C9A5] focus-visible:ring-4 focus-visible:ring-emerald-100/60 placeholder:text-base"
              id="password"
              placeholder="Enter Password"
            />
          </div>

          <button
            type="submit"
            className="w-full !h-11 bg-[#00934b] hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 outline-[#00934b] text-white font-[500] rounded-s-full rounded-e-full"
          >
            Sign In with Email
          </button>

          <div className="flex justify-between items-center gap-x-3 my-2">
            <div className="w-full h-[1px] bg-[#d0d5dd]"></div>
            <span className="text-slate-500 font-[500] text-xs">OR</span>
            <div className="w-full h-[1px] bg-[#d0d5dd]"></div>
          </div>

          <button
            type="submit"
            className="w-full !h-11 bg-white hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 outline-[#00934b] text-slate-700 font-[500] rounded-s-full rounded-e-full flex justify-center items-center gap-x-2 border border-slate-300"
          >
            <img src={googleIcon} alt="" />
            <span>Continue with Google</span>
          </button>

          <button
            type="submit"
            className="w-full !h-11 bg-[#5865F2] hover:bg-[#5865F2]/80 text-white focus-visible:outline-2 focus-visible:outline-offset-2 outline-[#00934b] font-[500] rounded-s-full rounded-e-full flex justify-center items-center gap-x-2 "
          >
            <FaDiscord className="text-2xl" />
            <span>Continue with Discord</span>
          </button>

          <button
            type="submit"
            className="w-full !h-11 bg-[#0064E0] hover:bg-[#0064E0]/80 focus-visible:outline-2 focus-visible:outline-offset-2 outline-[#00934b] text-white font-[500] rounded-s-full rounded-e-full flex justify-center items-center gap-x-2"
          >
            <MdFacebook className="text-2xl" />
            <span>Continue with Facebook</span>
          </button>

          <button
            type="submit"
            className="w-full !h-11 bg-[#661800] hover:bg-[#661800]/80 focus-visible:outline-2 focus-visible:outline-offset-2 outline-[#00934b] text-white font-[500] rounded-s-full rounded-e-full flex justify-center items-center gap-x-2"
          >
            <BiWalletAlt className="text-2xl" />
            <span>Continue with Wallet</span>
          </button>
        </form>

        <div className="mt-8">
          <p className="text-xs text-slate-500 text-center">
            LimeWire{" "}
            <a href="#" className="text-[#00934b] hover:underline">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#00934b] hover:underline">
              Privacy Policy
            </a>{" "}
            apply
          </p>

          <p className="text-[10px] opacity-75 text-slate-500 text-center mt-2">
            This site is protected by reCAPTCHA and the Google
            <a href="#" className="text-[#00934b] hover:underline">
              {" "}
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#00934b] hover:underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>

        <div className="w-full px-3.5 md:px-4 py-6">
          <p className="text-slate-500 mt-8 text-sm leading-normal tracking-tight">
            © 2025 LimeWire™
          </p>
        </div>
      </div>

      {/* SIgn in page bg */}
      <div className="w-1/2 hidden lg:flex">
        <img
          src={loginBg}
          alt="Login page background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;

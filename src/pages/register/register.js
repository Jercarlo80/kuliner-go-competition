import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiEyeOff, FiEye } from "react-icons/fi";
import authbg from "../../assets/authBg.png";
import { Button } from "../../components/button/button";
import { ButtonGoogle } from "../../components/button/buttonGoogle";
import { InputField } from "../../components/inputfield/inputField";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleBtn = () => {
      setShowPassword((prevState) => !prevState);
    };
    return (
      <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
        <div className="hidden sm:block flex-1">
          <img className="h-full w-full brightness-50" src={authbg} alt="Cover" />
        </div>
        <div className="flex flex-col bg-white justify-center flex-1">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center ">
              <img
                className="relative right-[6px] bottom-2 h-12 w-auto mb-2"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="flex items-center">
              <h2 className="text-2xl font-extrabold text-gray-900">Daftar</h2>
            </div>
            <div className="flex items-center">
              <p className="mt-4">Yuk daftarkan akunmu sekarang juga!</p>
            </div>
  
            <div className="w-full text-black  font-semibold  text-center flex items-center justify-center">
              <ButtonGoogle title="Daftar dengan Google" />
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="flex-1 mr-3 border-b border-[#CCD3DD]"></div>
              <div className="divider text-[#586A86]">atau daftar dengan</div>
              <div className="flex-1 ml-3 border-b border-[#CCD3DD]"></div>
            </div>           
                <form className="space-y-6">
                    <InputField
                      title="Email"
                      id="email"
                      name="email"
                      type="email"
                      required
                    />
                  <div className="mt-1 relative">
                    <InputField
                      title="Nama Pengguna"
                      id="username"
                      name="username"
                      type="username"
                      required
                    />
                  </div>
                  <div className="mt-1 relative">
                    <InputField
                      title="Password"
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-4 top-10 flex items-center cursor-pointer"
                      onClick={toggleBtn}
                    >
                      {showPassword ? (
                        <FiEye size={20} />
                      ) : (
                        <FiEyeOff size={20} />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mt-2 mr-2 mb-4 h-4 w-4 text-[#01B0D9] focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="text-xs mt-2 mb-2">
                    Dengan mendaftar saya telah menyetujui{" "}
                      <split className="text-[#01B0D9]">
                        Syarat dan Ketentuan
                      </split>{" "}
                      , serta Kebijakan Privasi Kuliner.go
                    </label>
                  </div>
                  <div className="relative bottom-4">
                  <Link to='/Masuk'>
                  <Button title="Daftar" />
                  </Link>
                  </div>
                </form>
              </div>
            </div>
          </div> 
    );
}

export default Register
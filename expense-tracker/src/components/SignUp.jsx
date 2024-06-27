import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleGetStarted = () => {
      navigate('/register');
    };

  return (
    <div className="flex items-center relative justify-center min-h-screen bg-gray-100">
      {/* <div className="relative p-50  bg-gray-100 shadow-lg rounded-lg flex flex-col items-center"> */}
      <div className=" -top-32 -left-32 -right-32 w-50 h-full hidden md:block bg-red-200 rounded-full absolute transform rotate-45"></div>
  
        <div className="flex absolute flex-col items-center bg-gray-200 p-10 z-10 rounded-md md:w-1/3">
          <h2 className="text-5xl font-bold mb-8">The Oracle.</h2>
          <div className="w-100 mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="username@theoracle"
            />
          </div>
          <div className="w-100 mb-8">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
    Password
  </label>
  <div className="relative">
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      type={showPassword ? "text" : "password"}
      placeholder="******************"
    />
    <button
      type="button"
      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      )}
    </button>
  </div>
</div>

          <div className="w-100 flex flex-col space-y-4">
            <button
              className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <div className="text-center">or</div>
             <button
      className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={handleGetStarted}
    >
      Get started
    </button>
          </div>
        </div>
            <div className="absolute bottom-0 right-200 hidden md:block w-50 h-50">
            <img src="src/assets/image.png" alt="" className=" h-full md:left-[600px] -top-14 relative  object-cover" />
            </div>
      </div>
    // </div>
  );
};

export default Login;

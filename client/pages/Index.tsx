import { useState } from "react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Simplify your online business",
      author: "Tasya and Xain",
      role: "Founder, Flo and Wer shop",
    },
  ];

  const totalSlides = 5;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Side - Testimonial Section */}
      <div className="hidden lg:flex lg:w-[48.6%] p-10 items-center justify-center">
        <div className="relative w-full max-w-[700px] h-[820px] rounded-[32px] bg-brand-dark overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark opacity-60 mix-blend-multiply" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-12 flex flex-col gap-6">
            <div className="flex flex-col gap-8">
              <h1 className="text-white font-poppins text-5xl font-bold leading-[100%] tracking-[-0.8px]">
                {testimonials[currentSlide].quote}
              </h1>
              <div className="flex flex-col gap-3">
                <p className="text-white font-inter text-base font-bold leading-[160%]">
                  {testimonials[currentSlide].author}
                </p>
                <p className="text-white font-inter text-sm font-normal leading-[160%] opacity-40">
                  {testimonials[currentSlide].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <div className="flex items-start gap-2">
                <span className="text-white font-inter text-sm leading-[160%] opacity-40">
                  {currentSlide + 1}
                </span>
                <span className="text-white font-inter text-sm leading-[160%]">
                  of
                </span>
                <span className="text-white font-inter text-sm leading-[160%]">
                  {totalSlides}
                </span>
              </div>

              <div className="flex items-start gap-1">
                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev > 0 ? prev - 1 : totalSlides - 1
                    )
                  }
                  className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg
                    width="20"
                    height="9"
                    viewBox="0 0 20 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.575736 4.42426C0.341421 4.18995 0.341421 3.81005 0.575736 3.57574L4.39411 -0.242641C4.62843 -0.476955 5.00833 -0.476955 5.24264 -0.242641C5.47696 -0.00832618 5.47696 0.371573 5.24264 0.605888L1.84853 4L5.24264 7.39411C5.47696 7.62843 5.47696 8.00833 5.24264 8.24264C5.00833 8.47696 4.62843 8.47696 4.39411 8.24264L0.575736 4.42426ZM20 4.6H1V3.4H20V4.6Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev < totalSlides - 1 ? prev + 1 : 0
                    )
                  }
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg
                    width="20"
                    height="9"
                    viewBox="0 0 20 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4243 4.42426C19.6586 4.18995 19.6586 3.81005 19.4243 3.57574L15.6059 -0.242641C15.3716 -0.476955 14.9917 -0.476955 14.7574 -0.242641C14.523 -0.00832618 14.523 0.371573 14.7574 0.605888L18.1515 4L14.7574 7.39411C14.523 7.62843 14.523 8.00833 14.7574 8.24264C14.9917 8.47696 15.3716 8.47696 15.6059 8.24264L19.4243 4.42426ZM0 4.6H19V3.4H0V4.6Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-0">
        <div className="w-full max-w-[428px] flex flex-col gap-10">
          {/* Logo */}
          <svg
            className="w-[141px] h-[33px]"
            viewBox="0 0 141 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M13.0986 19.0114L32.019 19.0114V32.11H13.0986L13.0986 19.0114Z"
              fill="#170645"
            />
            <path
              d="M13.0986 32.11L13.0986 -1.52588e-05L-5.96316e-05 -1.58314e-05L-6.04586e-05 18.9203L13.0986 32.11Z"
              fill="#170645"
            />
            <path
              d="M116.707 10.427C117.139 9.72302 117.699 9.17102 118.387 8.77102C119.091 8.37102 119.891 8.17102 120.787 8.17102V11.699H119.899C118.843 11.699 118.043 11.947 117.499 12.443C116.971 12.939 116.707 13.803 116.707 15.035V21.659H113.347V8.36302H116.707V10.427Z"
              fill="#170645"
            />
            <path
              d="M111.695 14.7231C111.695 15.2031 111.663 15.6351 111.599 16.0191H101.879C101.959 16.9791 102.295 17.7311 102.887 18.2751C103.479 18.8191 104.207 19.0911 105.071 19.0911C106.319 19.0911 107.207 18.5551 107.735 17.4831H111.359C110.975 18.7631 110.239 19.8191 109.151 20.6511C108.063 21.4671 106.727 21.8751 105.143 21.8751C103.863 21.8751 102.711 21.5951 101.687 21.0351C100.679 20.4591 99.8867 19.6511 99.3107 18.6111C98.7507 17.5711 98.4707 16.3711 98.4707 15.0111C98.4707 13.6351 98.7507 12.4271 99.3107 11.3871C99.8707 10.3471 100.655 9.54709 101.663 8.9871C102.671 8.42709 103.831 8.14709 105.143 8.14709C106.407 8.14709 107.535 8.41909 108.527 8.96309C109.535 9.50709 110.311 10.2831 110.855 11.2911C111.415 12.2831 111.695 13.4271 111.695 14.7231ZM108.215 13.7631C108.199 12.8991 107.887 12.2111 107.279 11.6991C106.671 11.1711 105.927 10.9071 105.047 10.9071C104.215 10.9071 103.511 11.1631 102.935 11.6751C102.375 12.1711 102.031 12.8671 101.903 13.7631H108.215Z"
              fill="#170645"
            />
            <path
              d="M89.0769 8.14709C90.0689 8.14709 90.9409 8.3471 91.6929 8.74709C92.4449 9.1311 93.0369 9.6351 93.4689 10.2591V8.36309H96.8529V21.7551C96.8529 22.9871 96.6049 24.0831 96.1089 25.0431C95.6129 26.0191 94.8689 26.7871 93.8769 27.3471C92.8849 27.9231 91.6849 28.2111 90.2769 28.2111C88.3889 28.2111 86.8369 27.7711 85.6209 26.8911C84.4209 26.0111 83.7409 24.8111 83.5809 23.2911H86.9169C87.0929 23.8991 87.4689 24.3791 88.0449 24.7311C88.6369 25.0991 89.3489 25.2831 90.1809 25.2831C91.1569 25.2831 91.9489 24.9871 92.5569 24.3951C93.1649 23.8191 93.4689 22.9391 93.4689 21.7551V19.6911C93.0369 20.3151 92.4369 20.8351 91.6689 21.2511C90.9169 21.6671 90.0529 21.8751 89.0769 21.8751C87.9569 21.8751 86.9329 21.5871 86.0049 21.0111C85.0769 20.4351 84.3409 19.6271 83.7969 18.5871C83.2689 17.5311 83.0049 16.3231 83.0049 14.9631C83.0049 13.6191 83.2689 12.4271 83.7969 11.3871C84.3409 10.3471 85.0689 9.54709 85.9809 8.9871C86.9089 8.42709 87.9409 8.14709 89.0769 8.14709ZM93.4689 15.0111C93.4689 14.1951 93.3089 13.4991 92.9889 12.9231C92.6689 12.3311 92.2369 11.8831 91.6929 11.5791C91.1489 11.2591 90.5649 11.0991 89.9409 11.0991C89.3169 11.0991 88.7409 11.2511 88.2129 11.5551C87.6849 11.8591 87.2529 12.3071 86.9169 12.8991C86.5969 13.4751 86.4369 14.1631 86.4369 14.9631C86.4369 15.7631 86.5969 16.4671 86.9169 17.0751C87.2529 17.6671 87.6849 18.1231 88.2129 18.4431C88.7569 18.7631 89.3329 18.9231 89.9409 18.9231C90.5649 18.9231 91.1489 18.7711 91.6929 18.4671C92.2369 18.1471 92.6689 17.6991 92.9889 17.1231C93.3089 16.5311 93.4689 15.8271 93.4689 15.0111Z"
              fill="#170645"
            />
            <path
              d="M73.6116 8.14709C74.6036 8.14709 75.4756 8.3471 76.2276 8.74709C76.9796 9.1311 77.5716 9.6351 78.0036 10.2591V8.36309H81.3876V21.7551C81.3876 22.9871 81.1396 24.0831 80.6436 25.0431C80.1476 26.0191 79.4036 26.7871 78.4116 27.3471C77.4195 27.9231 76.2196 28.2111 74.8116 28.2111C72.9236 28.2111 71.3716 27.7711 70.1556 26.8911C68.9556 26.0111 68.2756 24.8111 68.1156 23.2911H71.4516C71.6276 23.8991 72.0036 24.3791 72.5796 24.7311C73.1716 25.0991 73.8836 25.2831 74.7156 25.2831C75.6916 25.2831 76.4836 24.9871 77.0916 24.3951C77.6996 23.8191 78.0036 22.9391 78.0036 21.7551V19.6911C77.5716 20.3151 76.9716 20.8351 76.2036 21.2511C75.4516 21.6671 74.5876 21.8751 73.6116 21.8751C72.4916 21.8751 71.4676 21.5871 70.5396 21.0111C69.6116 20.4351 68.8756 19.6271 68.3316 18.5871C67.8036 17.5311 67.5396 16.3231 67.5396 14.9631C67.5396 13.6191 67.8036 12.4271 68.3316 11.3871C68.8756 10.3471 69.6036 9.54709 70.5156 8.9871C71.4436 8.42709 72.4756 8.14709 73.6116 8.14709ZM78.0036 15.0111C78.0036 14.1951 77.8436 13.4991 77.5236 12.9231C77.2036 12.3311 76.7716 11.8831 76.2276 11.5791C75.6836 11.2591 75.0996 11.0991 74.4756 11.0991C73.8516 11.0991 73.2756 11.2511 72.7476 11.5551C72.2196 11.8591 71.7876 12.3071 71.4516 12.8991C71.1316 13.4751 70.9716 14.1631 70.9716 14.9631C70.9716 15.7631 71.1316 16.4671 71.4516 17.0751C71.7876 17.6671 72.2196 18.1231 72.7476 18.4431C73.2916 18.7631 73.8676 18.9231 74.4756 18.9231C75.0996 18.9231 75.6836 18.7711 76.2276 18.4671C76.7716 18.1471 77.2036 17.6991 77.5236 17.1231C77.8436 16.5311 78.0036 15.8271 78.0036 15.0111Z"
              fill="#170645"
            />
            <path
              d="M59.8026 21.8751C58.5226 21.8751 57.3706 21.5951 56.3466 21.0351C55.3226 20.4591 54.5146 19.6511 53.9226 18.6111C53.3466 17.5711 53.0586 16.3711 53.0586 15.0111C53.0586 13.6511 53.3546 12.4511 53.9466 11.4111C54.5546 10.3711 55.3786 9.57109 56.4186 9.01109C57.4586 8.43509 58.6186 8.14709 59.8986 8.14709C61.1786 8.14709 62.3386 8.43509 63.3786 9.01109C64.4186 9.57109 65.2346 10.3711 65.8266 11.4111C66.4346 12.4511 66.7386 13.6511 66.7386 15.0111C66.7386 16.3711 66.4266 17.5711 65.8026 18.6111C65.1946 19.6511 64.3626 20.4591 63.3066 21.0351C62.2666 21.5951 61.0986 21.8751 59.8026 21.8751ZM59.8026 18.9471C60.4106 18.9471 60.9786 18.8031 61.5066 18.5151C62.0506 18.2111 62.4826 17.7631 62.8026 17.1711C63.1226 16.5791 63.2826 15.8591 63.2826 15.0111C63.2826 13.7471 62.9466 12.7791 62.2746 12.1071C61.6186 11.4191 60.8106 11.0751 59.8506 11.0751C58.8906 11.0751 58.0826 11.4191 57.4266 12.1071C56.7866 12.7791 56.4666 13.7471 56.4666 15.0111C56.4666 16.2751 56.7786 17.2511 57.4026 17.9391C58.0426 18.6111 58.8426 18.9471 59.8026 18.9471Z"
              fill="#170645"
            />
            <path
              d="M51.379 3.89905V21.659H48.019V3.89905H51.379Z"
              fill="#170645"
            />
            <path
              d="M132.801 23.9101C128.158 23.9101 124.787 20.5815 124.787 16.0657C124.787 11.5074 128.158 8.20007 132.801 8.20007C137.465 8.20007 140.815 11.5074 140.815 16.0657C140.815 20.5603 137.465 23.9101 132.801 23.9101ZM132.801 22.9348C136.766 22.9348 139.67 20.0515 139.67 16.0657C139.67 12.1647 136.766 9.17532 132.801 9.17532C128.858 9.17532 125.953 12.1647 125.953 16.0657C125.953 20.0515 128.858 22.9348 132.801 22.9348ZM137.041 14.4756H134.561C134.328 13.6488 133.713 13.1611 132.844 13.1611C131.571 13.1611 130.872 14.2636 130.872 16.0657C130.872 17.8678 131.571 18.949 132.844 18.949C133.67 18.949 134.285 18.4614 134.54 17.6982H137.02C136.575 19.8395 134.942 20.8571 132.928 20.8571C130.13 20.8571 128.412 19.055 128.412 16.0657C128.412 13.0763 130.109 11.2318 132.907 11.2318C134.942 11.2318 136.639 12.3343 137.041 14.4756Z"
              fill="#170645"
            />
          </svg>

          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-brand-dark font-poppins text-[40px] font-bold leading-[120%] tracking-[-0.8px]">
              Welcome back
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-brand-dark font-inter text-base leading-[160%]">
                New to Logger?
              </span>
              <button className="text-brand-purple font-inter text-base leading-[110%] tracking-[-0.2px] hover:underline">
                Sign Up
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-8">
            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              {/* Name Input */}
              <div className="flex flex-col gap-2 pb-2 border-b border-brand-light/50">
                <label className="text-brand-light font-inter text-xs leading-[160%] uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="text-brand-dark font-inter text-base leading-[160%] bg-transparent outline-none placeholder:text-brand-dark"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2 pb-2 border-b border-brand-light/50">
                <label className="text-brand-light font-inter text-xs leading-[160%] uppercase">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="text-brand-dark font-inter text-base leading-[160%] bg-transparent outline-none placeholder:text-brand-dark"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <button
              type="button"
              className="text-brand-purple font-inter text-base leading-[110%] tracking-[-0.2px] self-start hover:underline"
            >
              Forget password
            </button>

            {/* Sign In Button */}
            <button
              type="submit"
              className="h-12 px-4 flex items-center justify-center rounded-full bg-brand-dark text-white font-inter text-base leading-[110%] tracking-[-0.2px] hover:bg-brand-dark/90 transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex flex-col gap-4">
            <p className="text-brand-dark text-center font-inter text-base leading-[160%]">
              or
            </p>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-4">
              <button className="flex items-center justify-center gap-3 px-4 py-4 border border-brand-light/50 rounded-lg hover:bg-gray-50 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 11.75C22.56 10.97 22.49 10.22 22.36 9.5H12V13.76H17.92C17.66 15.13 16.88 16.29 15.71 17.07V19.84H19.28C21.36 17.92 22.56 15.1 22.56 11.75Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.0002 22.4999C14.9702 22.4999 17.4602 21.5199 19.2802 19.8399L15.7102 17.0699C14.7302 17.7299 13.4802 18.1299 12.0002 18.1299C9.14018 18.1299 6.71018 16.1999 5.84018 13.5999H2.18018V16.4399C3.99018 20.0299 7.70018 22.4999 12.0002 22.4999Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 13.5901C5.62 12.9301 5.49 12.2301 5.49 11.5001C5.49 10.7701 5.62 10.0701 5.84 9.41007V6.57007H2.18C1.43 8.05007 1 9.72007 1 11.5001C1 13.2801 1.43 14.9501 2.18 16.4301L5.03 14.2101L5.84 13.5901Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0002 4.88C13.6202 4.88 15.0602 5.44 16.2102 6.52L19.3602 3.37C17.4502 1.59 14.9702 0.5 12.0002 0.5C7.70018 0.5 3.99018 2.97 2.18018 6.57L5.84018 9.41C6.71018 6.81 9.14018 4.88 12.0002 4.88Z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-brand-dark font-inter text-sm leading-[160%]">
                  Sign In with Google
                </span>
              </button>

              <button className="flex items-center justify-center gap-3 px-4 py-4 border border-brand-light/50 rounded-lg hover:bg-gray-50 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2304_255)">
                    <path
                      d="M21.787 6.97895C21.802 7.19593 21.802 7.41292 21.802 7.63191C21.802 14.3045 16.7223 22 7.43387 22V21.996C4.69004 22 2.00321 21.2141 -0.306641 19.7321C0.0923342 19.7801 0.493309 19.8041 0.895284 19.8051C3.16914 19.8071 5.378 19.0442 7.16689 17.6393C5.00602 17.5983 3.11114 16.1894 2.44919 14.1325C3.20614 14.2785 3.98609 14.2485 4.72904 14.0455C2.37319 13.5695 0.678297 11.4997 0.678297 9.09581V9.03182C1.38025 9.42279 2.1662 9.63978 2.97015 9.66378C0.751293 8.18087 0.0673358 5.22906 1.40725 2.9212C3.97109 6.076 7.75385 7.99388 11.8146 8.19687C11.4076 6.44298 11.9636 4.6051 13.2755 3.37218C15.3094 1.4603 18.5082 1.55829 20.4201 3.59116C21.551 3.36818 22.6349 2.9532 23.6269 2.36524C23.2499 3.53417 22.4609 4.5271 21.407 5.15806C22.4079 5.04007 23.3859 4.77209 24.3068 4.36311C23.6288 5.37905 22.7749 6.26399 21.787 6.97895Z"
                      fill="#1D9BF0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2304_255">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-brand-dark font-inter text-sm leading-[160%]">
                  Sign In with Twitter
                </span>
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-4">
            <button className="text-brand-dark font-poppins text-sm leading-[110%] hover:underline">
              Customer Support
            </button>
            <button className="text-brand-dark font-poppins text-sm leading-[110%] hover:underline">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useRef, forwardRef } from "react";

// input component that accepts a ref prop
const CustomInput = forwardRef(({ label, placeholder, className="" }, ref) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <input
        className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
        transition-all duration-200 bg-white text-gray-700 ${className}`}
        placeholder={placeholder}
        ref={ref}
        type="text"
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const foucsSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.focus();
    }
  };

  return (
    <section className="bg-slate-100 p-6 flex justify-center">
      <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Ref Props
        </h2>

        <p className="text-sm text-slate-600 mb-6">
          Demonstration of passing refs to child components using
          <span className="font-semibold"> forwardRef </span>
          in React.
        </p>

        <div>
          <h3 className="text-lg font-semibold text-slate-700 mb-4">
            Try it Out
          </h3>

          <CustomInput
            ref={inputRef}
            label="First Input"
            placeholder="Type something..."
          />

          <CustomInput
            ref={secondInputRef}
            label="Second Input"
            placeholder="Type something else..."
          />

          <div className="flex flex-wrap gap-3 mt-6">
            <button onClick={handleFocus} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Focus First Input
            </button>

            <button onClick={getInputValue} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"> 
              Get Input Value
            </button>

            <button onClick={clearInput} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
              Clear Input
            </button>

            <button onClick={foucsSecondInput} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Focus Second Input
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default RefProps;
import React from "react";
import { Button } from "./ui/button";
import { useState } from "react";
function CustomButton({ text, color, size, onClick, disabled }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
      ${size === "small" ? "text-sm px-4 py-1" : "text-base px-6 py-2"}
      ${size === "large" ? "text-lg px-8 py-3" : ""}
      ${color === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-500 text-white hover:bg-gray-600"}
      ${color === "danger" ? "bg-red-500 text-white hover:bg-red-600" : ""}
      ${color === "success" ? "bg-green-500 text-white hover:bg-green-600" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {text}
    </Button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-md">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Basic Props</h2>

          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Learn how to pass simple values like text, color, size, and event
            handlers as props to reusable React components.
          </p>
          <span className="text-gray-500 text-sm">
            Click Count: {clickCount}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <CustomButton
            text="Primary Button"
            color="primary"
            size="medium"
            onClick={() => {
              alert("Primary Button Clicked");
              setClickCount(clickCount + 1);
            }}
          />

          <CustomButton
            text="Danger Button"
            color="danger"
            size="medium"
            onClick={() => {
              alert("Danger Button Clicked");
              setClickCount(clickCount + 1);
            }}
          />

          <CustomButton
            text="Success Button"
            color="success"
            size="medium"
            onClick={() => {
              alert("Success Button Clicked");
              setClickCount(clickCount + 1);
            }}
          />

          <CustomButton
            text="Small Button"
            color="primary"
            size="small"
            onClick={() => {
              alert("Small Button Clicked");
              setClickCount(clickCount + 1);
            }}
          />

          <CustomButton
            text="Large Button"
            color="danger"
            size="large"
            onClick={() => {
              alert("Large Button Clicked");
              setClickCount(clickCount + 1);
            }}
          />

          <CustomButton
            text="Disabled Button"
            color="primary"
            size="medium"
            disabled
            onClick={() => alert("This should not trigger")}
          />
        </div>
      </section>
    </div>
  );
}

export default BasicProps;

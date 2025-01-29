import * as React from "react";

export default function Form() {
  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <label className="text-lg font-medium text-gray-900">
        Enter your text:
      </label>
      <input
        type="text"
        className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Type something..."
      />
      <p className="text-gray-600">You typed: </p>
    </div>
  );
}

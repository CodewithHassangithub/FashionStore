import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandle = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center font-poppins">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Enter your email to get more information on latest items
      </p>
      <form
        onSubmit={onSubmitHandle}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;

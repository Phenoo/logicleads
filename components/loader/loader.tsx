import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center fixed inset-0 z-[1000] items-center flex-col w-full bg-[#25192d]">
      <div className="ui-abstergo">
        <div className="abstergo-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="ui-text">
          Synchronization
          <div className="ui-dot"></div>
          <div className="ui-dot"></div>
          <div className="ui-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

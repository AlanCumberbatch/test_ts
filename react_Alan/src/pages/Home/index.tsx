// import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      {/* <h1 className="text-2xl font-bold">Welcome to the
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-gradient">
          My World
        </span>
      .</h1> */}
      {/* <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-gradient">
            My World
          </span>
          .
        </h1>
        <p className="text-2xl font-bold">装修中 ...</p>
      </div> */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">
          Welcome to{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500
            bg-[length:200%_200%] bg-left animate-gradient-bg"
          >
            My World
          </span>
          .
        </h1>
        <p className="text-2xl font-bold">装修中 ...</p>
      </div>
    </div>
  );
};

export default Home;
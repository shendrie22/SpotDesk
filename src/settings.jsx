import React from 'react';

const Setting = () => {
  return (
    <div className="flex h-screen">
      {/* Left side header */}
      <div className="flex flex-col bg-gray-200 w-1/4">
        {/* Logo */}
        <div className="flex items-center justify-center p-4">
          <img src="logo.png" alt="Logo" className="h-16 w-16" />
        </div>
       
        {/* Settings */}
        <div className="p-4">
          <p className="font-bold">Settings</p>
          <div className="flex items-center">
            
            <p>Account Settings</p>
          </div>
        </div>
        <div className="h-full border-r border-black-300"></div>
      </div>

     

    

      {/* Main content */}
      <div className="flex flex-col w-3/4">

        
        {/* Top header */}
        <div className="p-4">

        <div className="p-6 border-b"></div>
          
          <p className="p-6 font-bold">Account Settings</p>

          
        </div>
        {/* Email Address */}
        <div className="p-6">
          <p className="font-bold text-xs">Email Address</p>
          <input type="email" className="border border-gray-300 p-2 mt-2" />
        </div>
        {/* Password */}
        <div className="p-6">
          <p className="font-bold text-xs">Password</p>
          <input type="password" className="border border-gray-300 p-2 mt-2" />
          {/* <p className="text-right text-blue-500 mt-2 cursor-pointer">Change</p> */}
        </div>
      </div>
    </div>
  );
}

export default Setting;

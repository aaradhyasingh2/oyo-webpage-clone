import React from 'react'

const Login = () => {
  return (
    <>
      {/* <h1 className='text-white flex gap-2 text-lg font-bold'><span className='font-extrabold text-5xl'>OYO</span> Hotels and homes across 800 cities, 24+ countries</h1> */}
      <div className="flex items-center justify-center h-screen relative bg-login-background bg-no-repeat bg-cover">
        <div className="absolute w-full top-5 px-12 flex items-center text-white">
          <h1 className='text-4xl font-extrabold mr-3'>OYO</h1>
          <p className='font-bold text-xl'>Hotels and homes across 800 cities, 24+ countries</p>
        </div>
        <div className=" mt-32 flex text-white justify-between w-9/12">
          <div className="h-56 p-16 mt-3">
            <h1 className='pb-3 font-semibold text-6xl'>There’s a smarter way to OYO around</h1>
            <p className='mt-1 font-semibold text-m'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
          </div>
          {/* login form below */}
          <div className="flex flex-col bg-white text-black w-full">
            <h1 className='bg-red-500 font-semibold text-white h-9 pl-6 pt-1'>Sign up & Get ₹500 OYO Money</h1>
            <div className="h-80 bg-white text-black px-6 pt-6">
              <h1 className='font-bold text-4xl'>Login / Signup</h1>
              <h3 className='mt-8 font-bold'>Please enter your phone number to continue</h3>
              <label className='absolute mt-1 bg-white w-12 px-1 py-1 border-2 border-gray-200 outline-none h-10'>+91</label>
              <input type="phonenumber" className='w-full mt-1 px-14 border-2 border-gray-200 outline-none h-10' />
              <button className='mt-3 h-10 w-48 font-bold text-white bg-gray-400 rounded-md outline-none py-2 px-3'>Verfiy Number</button>
              <p className='font-bold mt-3'>Prefer to Sign in with password instead?<span className='text-red-600 cursor-pointer'> Click here</span></p>
            </div>
            <div className="border-t-2 border-gray-300 flex gap-x-5 mt-10 pt-5 px-4 pb-5">
              <p className='absolute -mt-9 bg-white font-bold'>Or sign in as</p>
              <p className='font-semibold text-lg border-r-2 border-gray-300 cursor-pointer pr-6'>Travel Agent</p>
              <p className='font-semibold text-lg cursor-pointer'>Corporate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
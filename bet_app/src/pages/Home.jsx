import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav';
import CardList from '../components/CardList';

const Home = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        // if (!localStorage.getItem("token")) {
        //     navigate("/");
        // }
    },[])

  return (
    <div className='w-screen h-screen flex  flex-col '>
      <Nav username={"Shivam"}/>
      <div className='w-full h-full   bg-slate-950 flex justify-center items-center'>
        {/* <Outlet/> */}
        <CardList/>
      </div>
    </div>
  )
}

export default Home

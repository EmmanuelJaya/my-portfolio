import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute (route){
        if (route === location.pathname){
            return true
        }
    }
  return (
    <div className='sticky top-0 whitespace-nowrap flex space-x-10 justify-center mx-auto max-w-6xl'>
        <header className='flex mt-1'>
            <div className='cursor-pointer flex space-x-1 mx-auto absolute left-1 mt-4' onClick={()=>navigate('/')}>
                <img src='./favicon.ico' alt='' className='h-7' />
                <h1 className='text-bold'>Developer Emman</h1>
            </div>
            <div>
                <ul className='flex space-x-10 ml-32 mt-4'>
                    <li className={`cursor-pointer font-white ${pathMatchRoute("/") && "text-black border-b-black border-b-[3px]"}`} onClick = {()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer font-white ${pathMatchRoute("/about") && "text-black border-b-black border-b-[3px]"}`} onClick = {()=>navigate("/about")}>About</li>
                    <li className={`cursor-pointer font-white ${pathMatchRoute("/education") && "text-black border-b-black border-b-[3px]"}`} onClick = {()=>navigate("/education")}>Education</li>
                    <li className={`cursor-pointer font-white ${pathMatchRoute("/project") && "text-black border-b-black border-b-[3px]"}`} onClick = {()=>navigate("/project")}>Project</li>
                    <li className={`cursor-pointer font-white ${pathMatchRoute("/skills") && "text-black border-b-black border-b-[3px]"}`} onClick = {()=>navigate("/skills")}>Skills</li>
                    <li className={`cursor-pointer font-white ${pathMatchRoute("/contact") && "text-black border-b-black border-b-[3px]"}`} onClick = {()=>navigate("/contact")}>Contact</li>
                </ul>
            </div>
            <div className=''>
                <button className='text-black border-spacing-3 ml-40 border-rounded cursor-pointer border-black bprder-[3px] bg-black text-white rounded pl-3 pr-3 pt-3 pb-3 hover:bg-white hover:text-black'>Download CV</button>
            </div>
        </header>
    </div>
  )
}

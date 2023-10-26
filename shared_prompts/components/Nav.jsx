'use client'
import Link from "next/link"
import Image from "next/image"
import logo from '@public/assets/images/logo.svg'
import profile from '@public/assets/images/profile.png'
import { useEffect,useState } from "react"
import {signIn , signOut, useSession, 
  getProviders} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  
  useEffect(()=>{
    const setProviders = async ()=> {
      const response = await getProviders()
      setProviders(response)
    }
    setProviders();
  },[])



  return (
    <nav className="flex-between w-full
    mb-16 pt-3 ">


      <Link href='/' className="flex gap-2 flex-center">
        <Image src={logo}
        alt="Proptopia logo"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
        </Link> 

         
         <div className="sm:flex hidden">
            {isUserLoggedIn ? (
          
              <div className="flex gap-3 md:gap-5">
                    {/* Desktop Navigation */}
                <Link href="/create-prompt" className="black_btn">Create Post</Link>
                
                 <button type="button" 
                 onClick={signOut} className="outline_btn" >
                  Sign Out
                 </button>
                 <Link href="/profile" >
                 
                         
                  <Image src={profile} 
                    width={37}
                    height={37}
                    className="rounded-full"
                   
                   />
                  
            
                 </Link>

              </div>
            ) : (
             
              <>
               {/* Mobile Navigation */}
            {providers && 
              Object.values(provider).map((provider)=> (
               <button>
                </button>
              ))}

              </>
            )}
         </div>
    </nav>
  )
}

export default Nav
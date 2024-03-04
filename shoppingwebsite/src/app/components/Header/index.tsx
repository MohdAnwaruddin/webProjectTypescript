
'use client'

import React from "react";
import  "./index.css";
import Link from "next/link";
import AuthContext, { AuthContextType } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { useEffect } from "react";


const Header = () => {


    const pathname = usePathname();
    const auth = useContext(AuthContext) as AuthContextType;
    const router = useRouter();
 
    // useEffect(() => {
        


    //   }, [])
      

    const logout = async () => {
        try {
         
        auth.logout();
          router.push('/login');
        } catch (error: any) {
          console.log(error.message);
        }
      };

    return (
        <div className="header">
        <Link className="logo" href="/">
            viteLogo
        </Link>

        <div className="navigation">
            <ul className="navigation-items">
                <Link className="navigation-item-text" href="/categories"> Shop now </Link>
                <Link className="navigation-item-text" href="/contact-us" > Contact Us </Link>
                <Link className="navigation-item-text" href="/about"> About </Link>
                
                
            </ul>
        </div>

        <div className="user-section">
            <ul className="user-section-items">
            <Link href="/my-account"> Settings  </Link>
                {/* <Link href="/login"> Login</Link>
                <Link href="/signup"> Signup</Link> */}

{auth.isLoggedIn ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : (
            <>
            <li className="user-section-item">
                <Link href='/login' className={pathname == '/login' ? 'active' : ''}>Login</Link>
            </li>
            <li className="user-section-item">
                <Link href="/signup">Signup</Link>
            </li>
        </>
         
        )}



                <Link href="/cart"> Cart </Link>
            </ul>
        </div>
        </div>
    )
};

export default Header;
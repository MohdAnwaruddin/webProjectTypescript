
import React from "react";
import  "./index.css";
import Link from "next/link";

const Header = () => {
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
            <Link href="/my-account"> My Account  </Link>
                <Link href="/login"> Login</Link>
                <Link href="/signup"> Signup</Link>
                <Link href="/cart"> Cart </Link>
            </ul>
        </div>
        </div>
    )
};

export default Header;
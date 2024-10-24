import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1>Developer Blog</h1>
            <nav>
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <li>Post</li>
                    <Link to={'/users'}><li>Users</li></Link>
                </ul>
            </nav>
        </header>
    )
}
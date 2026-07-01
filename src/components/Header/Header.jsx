import Logo from "./Logo";
import Navigation from "./Navigation";
import GuestMenu from "./GuestMenu";
import UserMenu from "./UserMenu";
import "./Header.css";

import { authService } from "../../services/authService";

export default function Header() {

    const user = authService.getCurrentUser();

    return (

        <header className="header">

            <div className="container header-container">

                <Logo />

                <Navigation />

                {user ? <UserMenu /> : <GuestMenu />}

            </div>

        </header>

    );

}
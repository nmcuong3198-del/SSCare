import "./UserMenu.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

import { authService } from "../../services/authService";

export default function UserMenu() {

    const navigate = useNavigate();

    const user = authService.getCurrentUser();

    const [open, setOpen] = useState(false);

    const logout = () => {

        authService.logout();

        navigate("/");

        window.location.reload();

    };

    return (

        <div className="user-menu">

            <div
                className="user-info"
                onClick={() => setOpen(!open)}
            >

                <FaUserCircle size={35} />

                <span>{user.fullName}</span>

                <FaChevronDown />

            </div>

            {

                open && (

                    <div className="dropdown">

                        <div onClick={() => navigate("/profile")}>

                            Hồ sơ

                        </div>

                        <div onClick={() => navigate("/settings")}>

                            Cài đặt

                        </div>

                        <hr />

                        <div onClick={logout}>

                            Đăng xuất

                        </div>

                    </div>

                )

            }

        </div>

    );

}
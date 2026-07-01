import "./UserMenu.css";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

import { authService } from "../../services/authService";

export default function UserMenu() {
  const navigate = useNavigate();

  const user = authService.getCurrentUser();

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const logout = () => {
    authService.logout();

    navigate("/");

    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="user-info" onClick={() => setOpen(!open)}>
        <FaUserCircle size={35} />

        <span>{user.fullName}</span>

        <FaChevronDown />
      </div>

      {open && (
        <div className="dropdown">
          <div onClick={() => navigate("/profile")}>Hồ sơ</div>

          <div onClick={() => navigate("/settings")}>Cài đặt</div>

          <hr />

          <div onClick={logout}>Đăng xuất</div>
        </div>
      )}
    </div>
  );
}

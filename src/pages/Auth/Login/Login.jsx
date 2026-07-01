import "./Login.css";
import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../services/authService";

// import loginImage from "../../../assets/images";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username === "admin" && form.password === "admin123") {
      authService.login({
        username: "admin",
        role: "ADMIN",
        fullName: "Administrator",
      });
      navigate("/");
      window.location.reload();
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }

    // TODO
    // gọi API Login
  };

  return (
    <div className="login-page">
      <div className="login-left">
        {/* <img src={loginImage} alt="Login" /> */}
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập</label>

            <div className="input-box">
              <FaUser />

              <input
                id="username"
                type="text"
                name="username"
                autoComplete="username"
                placeholder="Email hoặc số điện thoại"
                value={form.username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>

            <div className="input-box">
              <FaLock />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                placeholder="Nhập mật khẩu"
                value={form.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="remember">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />

            <span>Ghi nhớ đăng nhập</span>
          </div>

          <button className="login-btn" type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

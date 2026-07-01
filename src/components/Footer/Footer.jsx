import "./Footer.css";
import logo from "../../assets/logo/logo.jpg";

import {
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">

      <div className="container footer-container">

        {/* Logo */}

        <div className="footer-col">

          <div className="footer-logo">

            <div className="logo">
              <img src={logo} alt="SSCare Logo" />
            </div>

            <h2>SSCare</h2>

          </div>

          <p>
            Bản quyền thuộc về Công ty Cổ phần Dịch vụ SSCare
          </p>

        </div>

        {/* Chính sách */}

        <div className="footer-col">

          <h3>Chính sách</h3>

          <ul>

            <li>Điều khoản sử dụng</li>

            <li>Chính sách bảo mật</li>

            <li>Câu hỏi thường gặp</li>

            <li>Hỗ trợ</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>Liên hệ</h3>

          <p>

            <FaMapMarkerAlt />

            Hà Nội, Việt Nam

          </p>

          <p>

            <FaEnvelope />

            support@sscare.vn

          </p>

          <p>

            <FaPhoneAlt />

            0123 456 789

          </p>

          <div className="social">

            <a href="#">
              <FaFacebookF />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
import "./Download.css";
import logo from "../../../../assets/logo/logo.jpg";

// import phone from "../assets/phone.png";
import ios from "../../../../assets/qrApp/qr.png";
import android from "../../../../assets/qrApp/qr.png";

export default function AppDownload() {
  return (
    <section className="download-section" id="download">
      <div className="container download-container">
        {/* LEFT */}

        <div className="download-left" data-aos="fade-right">
          <h2>
            Tải ứng dụng SSCare
            <br />
            ngay hôm nay
          </h2>

          <p>
            Mang cả thế giới kiến thức và sự hỗ trợ chuyên nghiệp vào ngay trong
            túi của bạn. Đăng ký ngay để nhận được tư vấn miễn phí từ chuyên gia
            SSCare trong tuần đầu tiên.
          </p>

          <div className="qr-wrapper">
            <div className="qr-card">
              <img src={ios} alt="IOS QR" />

              <h4>Apple Store</h4>
            </div>

            <div className="qr-card">
              <img src={android} alt="Android QR" />

              <h4>CH Play</h4>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="download-right">
          <div className="phone-light"></div>
          <div className="phone">
            <div className="phone-notch"></div>

            <div className="phone-screen">
              <div className="phone-icon">
                <img src={logo} alt="SSCare Logo" />
              </div>

              <h3>SSCare App</h3>

              <p>
                Giao diện thân thiện,
                <br />
                bảo mật thông tin tuyệt đối.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

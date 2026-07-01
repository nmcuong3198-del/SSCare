import { authService } from "../../../../../services/authService";
import { Eye, SendHorizonal, Check, X } from "lucide-react";

import "./BottomBar.css";

export default function BottomActionBar({
  article,
  onPreview,
  onSubmit,
  onApprove,
  onReject,
}) {
  const user = authService.getCurrentUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="bottom-bar">
      <button className="preview-btn" onClick={onPreview}>
        <Eye size={18} />

        <span>Xem trước (Preview)</span>
      </button>

      <div className="draft-info">
        Lưu bản nháp tự động lúc
        <strong>14:30</strong>
      </div>

      {isAdmin ? (
        <div className="admin-actions">
          <button className="reject-btn" onClick={onReject}>
            <X size={18} />
            <span>Từ chối</span>
          </button>

          <button className="approve-btn" onClick={onApprove}>
            <Check size={18} />
            <span>Duyệt bài</span>
          </button>
        </div>
      ) : (
        <button className="submit-btn" onClick={onSubmit}>
          <SendHorizonal size={18} />
          <span>Gửi bài viết</span>
        </button>
      )}
    </div>
  );
}

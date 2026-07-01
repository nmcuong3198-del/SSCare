import { useEffect, useRef, useState } from "react";
import "./UploadCover.css";

const MAX_SIZE = 5 * 1024 * 1024;

const VALID_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export default function UploadCover({ article, setArticle }) {
  const fileInputRef = useRef(null);

  const [previewUrl, setPreviewUrl] = useState(null);

  const coverImage = article.coverImage;

  // ======================================
  // Tạo preview
  // ======================================
  useEffect(() => {
    if (!coverImage) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(coverImage);

    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [coverImage]);

  // ======================================
  // Cập nhật ảnh vào article
  // ======================================
  const updateCoverImage = (file) => {
    setArticle((prev) => ({
      ...prev,
      coverImage: file,
    }));
  };

  // ======================================
  // Validate ảnh
  // ======================================
  const validateFile = (file) => {
    if (!file) return false;

    if (!VALID_TYPES.includes(file.type)) {
      alert("Chỉ hỗ trợ JPG hoặc PNG.");
      return false;
    }

    if (file.size > MAX_SIZE) {
      alert("Dung lượng tối đa là 5MB.");
      return false;
    }

    return true;
  };

  // ======================================
  // Xử lý file
  // ======================================
  const processFile = (file) => {
    if (!validateFile(file)) return;

    updateCoverImage(file);
  };

  // ======================================
  // Chọn file
  // ======================================
  const handleFileChange = (event) => {
    processFile(event.target.files[0]);

    event.target.value = "";
  };

  // ======================================
  // Click upload
  // ======================================
  const handleChooseImage = () => {
    fileInputRef.current?.click();
  };

  // ======================================
  // Drag over
  // ======================================
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // ======================================
  // Drop
  // ======================================
  const handleDrop = (event) => {
    event.preventDefault();

    processFile(event.dataTransfer.files[0]);
  };

  // ======================================
  // Xóa ảnh
  // ======================================
  const handleRemoveImage = (event) => {
    event.stopPropagation();

    updateCoverImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // ======================================
  // Đổi ảnh
  // ======================================
  const handleChangeImage = (event) => {
    event.stopPropagation();

    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
        hidden
      />

      <div
        className="upload-box"
        onClick={handleChooseImage}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {coverImage && previewUrl ? (
          <div className="preview-container">
            <img src={previewUrl} alt="Cover" className="cover-preview" />

            <div className="file-info">
              <strong>{coverImage.name}</strong>

              <p>{(coverImage.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>

            <div className="preview-actions">
              <button type="button" onClick={handleChangeImage}>
                Đổi ảnh
              </button>

              <button type="button" onClick={handleRemoveImage}>
                Xóa ảnh
              </button>
            </div>
          </div>
        ) : (
          <div className="upload-content">
            <div className="upload-icon">📷</div>

            <h3>Nhấn hoặc kéo ảnh vào đây</h3>

            <p>JPG, PNG - Tối đa 5MB</p>
          </div>
        )}
      </div>
    </>
  );
}

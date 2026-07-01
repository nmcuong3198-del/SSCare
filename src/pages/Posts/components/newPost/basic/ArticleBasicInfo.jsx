import "./ArticleBasicInfo.css";
import UploadCover from "./UploadCover";

export default function ArticleBasicInfo({ article, setArticle }) {
  return (
    <div className="editor-card">
      {/* Tiêu đề */}
      <div className="editor-group">
        <label>Tiêu đề bài viết (Tối đa 100 ký tự)</label>

        <input
          className="editor-input"
          placeholder="Nhập tiêu đề..."
          value={article.title}
          onChange={(e) =>
            setArticle((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
      </div>

      {/* Ảnh bìa */}
      <div className="editor-group">
        <label>Ảnh bìa bài viết</label>

        <UploadCover article={article} setArticle={setArticle} />
      </div>

      {/* Tóm tắt */}
      <div className="editor-group">
        <label>Tóm tắt (Tối đa 500 ký tự)</label>

        <textarea
          rows={5}
          className="editor-textarea"
          placeholder="Nhập tóm tắt..."
          value={article.summary}
          onChange={(e) =>
            setArticle((prev) => ({
              ...prev,
              summary: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
}

import "./ConclusionEditor.css";

export default function ConclusionEditor({
  article,
  setArticle,
}) {
  return (
    <div className="conclusion-card">

      <label>

        Lời kết (Tối đa 500 ký tự)

      </label>

      <textarea
        rows={5}
        maxLength={500}
        placeholder="Viết thông điệp cuối cùng hoặc lời khuyên tổng kết..."
        value={article.conclusion}
        onChange={(e) =>
          setArticle((prev) => ({
            ...prev,

            conclusion: e.target.value,
          }))
        }
      />

      <div className="char-counter">
        {article.conclusion.length}/500
      </div>

    </div>
  );
}
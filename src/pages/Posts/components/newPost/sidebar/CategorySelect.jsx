import "./CategorySelect.css";

export default function CategorySelect({ article, setArticle }) {
  return (
    <div className="sidebar-group">
      <label>Thư mục liên quan</label>

      <select
        value={article.category}
        onChange={(e) =>
          setArticle((prev) => ({
            ...prev,
            category: e.target.value,
          }))
        }
      >
        <option value="">Chọn thư mục</option>

        <option value="Hiểu con">Hiểu con</option>

        <option value="Nuôi dạy con">Nuôi dạy con</option>

        <option value="Sức khỏe">Sức khỏe</option>
      </select>
    </div>
  );
}

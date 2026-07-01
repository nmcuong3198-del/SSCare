import "./Pagination.css";

export default function Pagination() {
  return (
    <div className="pagination">

      <div>
        Hiển thị 1-4 trong 12 bài viết
      </div>

      <div className="page-group">

        <button>{"<"}</button>

        <button className="active">
          1
        </button>

        <button>
          2
        </button>

        <button>
          3
        </button>

        <button>{">"}</button>

      </div>

    </div>
  );
}
import { CirclePlus } from "lucide-react";
import "./AddSectionButton.css";

const MAX_SECTIONS = 10;

export default function AddSectionButton({
  article,
  setArticle,
}) {
  const handleAddSection = () => {
    if (article.sections.length >= MAX_SECTIONS) {
      alert(`Tối đa ${MAX_SECTIONS} mục nội dung.`);
      return;
    }

    setArticle((prev) => ({
      ...prev,

      sections: [
        ...prev.sections,

        {
          id: crypto.randomUUID(),
          title: "",
          content: "",
        },
      ],
    }));
  };

  return (
    <div className="add-section-wrapper">
      <button
        className="add-section-btn"
        onClick={handleAddSection}
      >
        <CirclePlus size={18} />

        <span>
          Thêm mục nội dung ({article.sections.length}/{MAX_SECTIONS})
        </span>
      </button>
    </div>
  );
}
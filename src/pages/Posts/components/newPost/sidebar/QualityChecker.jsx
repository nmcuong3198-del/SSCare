import { useState } from "react";
import "./QualityChecker.css";
import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

const forbiddenWords = ["đánh", "giết", "chửi", "ngu", "khùng"];

export default function QualityChecker({ article }) {
  const [checked, setChecked] = useState(false);

  const [passed, setPassed] = useState(false);

  const [badWords, setBadWords] = useState([]);

  const handleCheck = () => {
    const content = [
      article.title,
      article.summary,
      article.conclusion,
      ...article.sections.map((item) => item.title),
      ...article.sections.map((item) => item.content),
    ]
      .join(" ")
      .toLowerCase();

    const foundWords = forbiddenWords.filter((word) => content.includes(word));

    setBadWords(foundWords);

    setPassed(foundWords.length === 0);

    setChecked(true);
  };

  return (
    <div className="quality-card">
      <div className="quality-title">
        📝 <span>KIỂM TRA CHẤT LƯỢNG</span>
      </div>

      <div className="quality-result">
        <span>
          {checked
            ? passed
              ? "Ngôn ngữ phù hợp"
              : "Ngôn ngữ chưa phù hợp"
            : "Chưa kiểm tra"}
        </span>

        {checked &&
          (passed ? (
            <CheckCircle2 size={22} className="quality-success" />
          ) : (
            <XCircle size={22} className="quality-error" />
          ))}
      </div>

      <button className="quality-button" onClick={handleCheck}>
        🛡 Kiểm tra từ cấm
      </button>

      <p className="quality-desc">
        Hệ thống sẽ quét toàn bộ bài viết để tìm các từ ngữ không phù hợp với
        trẻ em.
      </p>

      {checked && !passed && (
        <div className="bad-word-list">
          <strong>Đã phát hiện:</strong>

          <ul>
            {badWords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

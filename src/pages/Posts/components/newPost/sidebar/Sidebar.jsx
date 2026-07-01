import { Shapes } from "lucide-react";

import "./Sidebar.css";

import CategorySelect from "./CategorySelect";
import HashTagInput from "./HashTagInput";
import QualityChecker from "./QualityChecker";

export default function Sidebar({ article, setArticle }) {
  return (
    <>
      <div className="sidebar-card">

        <div className="sidebar-header">

          <Shapes size={15} />

          <span>PHÂN LOẠI & GẮN THẺ</span>

        </div>

        <CategorySelect
          article={article}
          setArticle={setArticle}
        />

        <HashTagInput
          article={article}
          setArticle={setArticle}
        />

      </div>

      <QualityChecker article={article} />

    </>
  );
}
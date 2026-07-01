import "./PostEditor.css";

import { useState } from "react";
import RejectSuccessModal from "./components/newPost/popup/RejectSuccessModal";
import ApproveSuccessModal from "./components/newPost/popup/ApproveSuccessModal";

import ArticleBasicInfo from "./components/newPost/basic/ArticleBasicInfo";
import Sidebar from "../Posts/components/newPost/sidebar/Sidebar";
import ContentEditor from "../Posts/components/newPost/content/ContentEditor";
import BottomActionBar from "../Posts/components/newPost/footer/BottomBar";
import { createEmptyArticle } from "../../utils/articleDefault";

export default function PostEditor() {
  const [article, setArticle] = useState(createEmptyArticle);

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);

  const loading = false;

  const handlePreview = () => {
    console.log("Preview Article");

    console.log(article);
  };

  const handleSubmit = () => {
    console.log("Submit Article");

    console.log(article);
  };

  const handleReject = async () => {
    // await api.rejectArticle(id);

    setShowRejectModal(true);
  };

  const handleApprove = async () => {
    // await articleService.approve(id);

    setShowApproveModal(true);
  };
  return (
    <div className="editor-page">
      <div className="editor-header">
        <span className="page-caption">CHI TIẾT BÀI VIẾT</span>

        <h1>
          {article.id
            ? `Chỉnh sửa bài viết #${article.id}`
            : "Tạo bài viết mới"}
        </h1>
      </div>

      <div className="editor-layout">
        <div className="editor-left">
          <ArticleBasicInfo article={article} setArticle={setArticle} />

          <ContentEditor article={article} setArticle={setArticle} />
        </div>

        <div className="editor-right">
          <Sidebar article={article} setArticle={setArticle} />
        </div>
      </div>

      <BottomActionBar
        article={article}
        onPreview={handlePreview}
        onSubmit={handleSubmit}
        onReject={handleReject}
        onApprove={handleApprove}
      />

      <RejectSuccessModal
        open={showRejectModal}
        onClose={() => setShowRejectModal(false)}
      />

      <ApproveSuccessModal
        open={showApproveModal}
        onClose={() => setShowApproveModal(false)}
      />
    </div>
  );
}

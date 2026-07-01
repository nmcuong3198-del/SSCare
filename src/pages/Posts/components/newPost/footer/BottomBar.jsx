import {
  Eye,
  SendHorizonal,
} from "lucide-react";

import "./BottomBar.css";

export default function BottomActionBar({

    article,

    onPreview,

    onSubmit,

}){

    return(

        <div className="bottom-bar">

            <button
                className="preview-btn"
                onClick={onPreview}
            >

                <Eye size={18}/>

                <span>Xem trước (Preview)</span>

            </button>

            <div className="draft-info">

                Lưu bản nháp tự động lúc

                <strong>14:30</strong>

            </div>

            <button
                className="submit-btn"
                onClick={onSubmit}
            >

                <SendHorizonal size={18}/>

                <span>Gửi bài viết</span>

            </button>

        </div>

    );

}
export function validateArticle(article){

    if(article.title.trim()===""){

        return "Bạn chưa nhập tiêu đề.";

    }

    if(article.summary.trim()===""){

        return "Bạn chưa nhập tóm tắt.";

    }

    if(article.coverImage===null){

        return "Bạn chưa chọn ảnh bìa.";

    }

    if(article.category===""){

        return "Bạn chưa chọn danh mục.";

    }

    if(article.sections.length===0){

        return "Bài viết phải có ít nhất một mục.";

    }

    for(const section of article.sections){

        if(section.title.trim()===""){

            return "Có tiêu đề phụ đang để trống.";

        }

        if(section.content.trim()===""){

            return "Có nội dung đang để trống.";

        }

    }

    return null;

}
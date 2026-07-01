import "./ContentEditor.css";

import SectionCard from "./SectionCard";
import AddSectionButton from "../content/AddSectionButton";
import ConclusionEditor from "./ConclusionEditor";

export default function ContentEditor({
    article,
    setArticle,
}) {

    return (

        <>

            <div className="content-title">

                Nội dung chi tiết

            </div>

            {
                article.sections.map((section,index)=>(

                    <SectionCard

                        key={section.id}

                        index={index}

                        section={section}

                        article={article}

                        setArticle={setArticle}

                    />

                ))
            }

            <AddSectionButton

                article={article}

                setArticle={setArticle}

            />

            <ConclusionEditor

                article={article}

                setArticle={setArticle}

            />

        </>

    );

}
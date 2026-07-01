import { Trash2 } from "lucide-react";

import "./SectionCard.css";

export default function SectionCard({

    section,

    index,

    article,

    setArticle,

}){

    const updateSection=(field,value)=>{

        setArticle(prev=>({

            ...prev,

            sections:prev.sections.map(item=>

                item.id===section.id

                ?{

                    ...item,

                    [field]:value

                }

                :item

            )

        }));

    };

    const removeSection=()=>{

        if(article.sections.length===1){

            alert("Bài viết phải có ít nhất một mục.");

            return;

        }

        setArticle(prev=>({

            ...prev,

            sections:prev.sections.filter(

                item=>item.id!==section.id

            )

        }));

    };

    return(

        <div className="section-card">

            <div className="section-header">

                <span>

                    NỘI DUNG NHỎ {index+1}

                </span>

                <button onClick={removeSection}>

                    <Trash2 size={17}/>

                </button>

            </div>

            <input

                value={section.title}

                placeholder={`Tiêu đề phụ ${index+1}...`}

                onChange={(e)=>

                    updateSection(

                        "title",

                        e.target.value

                    )

                }

            />

            <textarea

                rows={5}

                value={section.content}

                placeholder="Nội dung chi tiết..."

                onChange={(e)=>

                    updateSection(

                        "content",

                        e.target.value

                    )

                }

            />

        </div>

    );

}
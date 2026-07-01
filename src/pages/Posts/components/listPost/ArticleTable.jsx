import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function ArticleTable({ posts }) {

    const navigate = useNavigate();

    return (

        <table className="article-table">

            <thead>

                <tr>

                    <th>Mã bài</th>

                    <th>Tên bài</th>

                    <th>Trạng thái</th>

                    <th>Người viết</th>

                    <th>Thao tác</th>

                </tr>

            </thead>

            <tbody>

                {
                    posts.map(post => (

                        <tr key={post.id}>

                            <td>#{post.id}</td>

                            <td>{post.title}</td>

                            <td>

                                <StatusBadge status={post.status} />

                            </td>

                            <td>{post.author}</td>

                            <td>

                                <button
                                    className="detail-btn"
                                    onClick={() =>
                                        navigate(`/posts/${post.id}`)
                                    }
                                >
                                    Xem chi tiết
                                </button>

                            </td>

                        </tr>

                    ))
                }

            </tbody>

        </table>

    );

}
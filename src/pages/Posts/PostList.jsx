import { FaRegFileAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { posts } from "../../data/posts";

import StatisticCard from "./components/listPost/StatisticCard";
import ArticleTable from "./components/listPost/ArticleTable";
import Pagination from "./components/listPost/Pagination";

import "./PostList.css";

export default function PostList() {

    const navigate = useNavigate();

    return (

        <div className="post-list-page">

            <div className="page-header">

                <div>

                    <h1>Danh sách bài viết</h1>

                    <p>
                        Quản lý và theo dõi các bài viết của bạn.
                    </p>

                </div>

                <button
                    className="new-post-btn"
                    onClick={() => navigate("/posts/new")}
                >

                    <FaPlusCircle />

                    Viết bài mới

                </button>

            </div>

            <div className="stat-grid">

                <StatisticCard
                    icon={<FaRegFileAlt />}
                    title="Tổng bài viết"
                    value="12"
                />

                <StatisticCard
                    icon={<IoEyeOutline />}
                    title="Lượt xem"
                    value="1.2K"
                    color="#FDBE4C"
                />

                <StatisticCard
                    icon={<FiMessageSquare />}
                    title="Thảo luận"
                    value="86"
                    color="#BFD7FF"
                />

            </div>

            <ArticleTable posts={posts} />

            <Pagination/>
        </div>

    );

}
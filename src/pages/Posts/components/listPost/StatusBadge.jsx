import "./StatusBadge.css";

export default function StatusBadge({ status }) {

    const config = {

        published: {
            text: "Đã xuất bản",
            className: "published",
        },

        pending: {
            text: "Đang chờ duyệt",
            className: "pending",
        },

        draft: {
            text: "Bản nháp",
            className: "draft",
        },
    };

    const current = config[status];

    return (
        <span className={`status ${current.className}`}>
            {current.text}
        </span>
    );
}
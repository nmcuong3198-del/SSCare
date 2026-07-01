import { NavLink } from "react-router-dom";
import { authService } from "../../services/authService";
const menus = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Về chúng tôi",
    path: "/about",
  },
  {
    title: "Tải ứng dụng",
    path: "/download",
  },
  {
    title: "Viết bài",
    path: "/posts",
  },
  {
    title: "Báo cáo",
    path: "/report",
  },
];

export default function Navigation() {
  const user = authService.getCurrentUser();

  const visibleMenus = user
    ? menus
    : menus.filter((menu) => menu.path === "/" || menu.path === "/about" || menu.path === "/download");
  return (
    <nav className="navigation">
      <ul className="nav-menu">
        {visibleMenus.map((menu) => (
          <li key={menu.path}>
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
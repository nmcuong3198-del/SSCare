import { Routes, Route } from "react-router-dom"; 
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Landing/Home";
import Login from "../pages/Auth/Login/Login";
import PostList from "../pages/Posts/PostList";
import PostEditor from "../pages/Posts/PostEditor";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<PostEditor />} />
      </Route>
    </Routes>
  );
}
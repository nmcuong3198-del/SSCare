import Button from "../Common/Button/Button";
import { useNavigate } from "react-router-dom";

export default function GuestMenu() {

    const navigate = useNavigate();

    return (

        <Button onClick={() => navigate("/login")}>

            Đăng nhập

        </Button>

    );

}
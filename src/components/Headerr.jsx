import categoryIcon from "../assets/imagesss/mAenu.svg";
import { Link } from "react-router-dom";
function Headerr () {
    return (
        <header class="header">
             <div class="container">
                 <Link to="/categories" class="btn-category">
                    <img src={categoryIcon} alt="menu" width="24" height="24" />
                </Link>
            </div>
        </header>
    );
}  



export default Headerr;
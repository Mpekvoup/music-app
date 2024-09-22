import imge from "../assets/imagesss/images/home.svg";
import imge1 from "../assets/imagesss/images/musicnbote.ico";
import imge2 from "../assets/imagesss/images/album.svg";
import imge3 from "../assets/imagesss/images/history_5282.ico";
import imge4 from "../assets/imagesss/images/playlist.svg";
import imge5 from "../assets/imagesss/images/consrt.svg";
import { Link } from "react-router-dom";

function CategoriesPage() {
    return (
        <section class="mobile-block">
            <div class="mobile-block_header is-orange">
                 Category
            </div>
        <div class="container">
            <div class="category-row">
                <Link to="/post" class="category-item">
                    <img src={imge} alt="home" class="categoty-item_img1" width="60" height="60" />
                    <span class="category-item_title"> Новости</span>
                </Link>
                <Link to="/Music" class="category-item">
                    <br />
                    <img src={imge1} alt="ball" class="categoty-item_img2" width="60" height="60" />
                    <span class="category-item_title"> Музыка </span>
                 </Link>
                 <Link to="/Albums" class="category-item">
                     <img src={imge2} alt="ball" class="categoty-item_img3" width="60" height="60" />
                     <span class="category-item_title"> Трендовые альбомы </span>
                 </Link>
                 <Link to="/category/HistoryPage" class="category-item">
                    <img src={imge3} alt="ball" class="categoty-item_img6" width="60" height="60" />
                    <span class="category-item_title"> История музыки </span>
                    
                 </Link>
                 <div class="category-item">
                    <img src={imge4} alt="ball" class="categoty-item_img5" width="60" height="60" />
                    <span class="category-item_title"> Плейлист недели </span>
                 </div>
                 <div class="category-item">
                    <img src={imge5}alt="ball" class="categoty-item_img4" width="60" height="60" />
                    <span class="category-item_title"> Новости концертов </span>
                </div>
                 </div>
    </div>
        </section>
    );
}

export default CategoriesPage;

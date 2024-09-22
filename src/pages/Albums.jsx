import im from "../assets/imagesss/images/awd.jpeg"
import im1 from "../assets/imagesss/images/drakeeee.png"
import im2 from "../assets/imagesss/images/The_Queen_Is_Dead.png"
import im3 from "../assets/imagesss/images/Unknown_pleasures.jpg"
import im4 from "../assets/imagesss/images/Geogaddi.jpg"


function Albums() {
    return(
        <section class="trending-albums">
        <h2>Трендовые альбомы</h2>
        <div class="albums-container" />
            <div class="album-card">
                <img src={im} alt="Album Cover" />
                <h3>Utopia</h3>
                <p>Travis Scoot</p>
            </div>
            <div class="album-card">
                <img src={im1} alt="Album Cover" />
                <h3>For all the dogs</h3>
                <p>Drake</p>
            </div>
            <div class="album-card">
                <img src={im2} alt="Album Cover" />
                <h3>The Queen is dead</h3>
                <p>The Smiths</p>
            </div>
            <div class="album-card">
                <img src={im3} alt="Album Cover" />
                <h3>Unknown pleasures</h3>
                <p>Joy Division</p>
           </div>
        <div class="album-card">
            <img src={im4} alt="Album Cover" />
            <h3>Geogaddi</h3>
            <p>Boards of Canada</p>
        </div>
</section>
    );
}



export default Albums;
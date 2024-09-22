import joy from "../assets/imagesss/images/Unknown_pleasures.jpg";
import { Link } from "react-router-dom";

function Music3Page () {
    return (
        <section className="player"> 
            <div className="album-cover-container">
                <img src={joy} alt="Album Cover" className="album-cover-large" />
            </div>
        
            <div className="song-info">
                <h3 className="song-title">Disorder</h3>
                <p className="artist">Joy Division</p>
            </div>

             <div className="controls">
           <Link to="/Music" className="prev-link">
            <button className="prev">&#9664;&#9664;</button>
           </Link>
    
           <button className="play">&#9654;</button>
    
           <Link to="/Music" className="next-link">
            <button className="next">&#9654;&#9654;</button>
           </Link>
            </div>
            
            <div className="lyrics-preview">
                <p>It's getting faster, moving faster now</p>
                <br />
                <p>It's getting out of hand</p>
                <br />
                <p>On the tenth floor, down the back stairs</p>
                <br />
                <p>It's a no man's land</p>
            </div>
        </section>
    );
}

export default Music3Page;

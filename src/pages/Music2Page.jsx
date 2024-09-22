import smiths from "../assets/imagesss/images/The_Queen_Is_Dead.png";
import { Link } from "react-router-dom";

function Music2Page () {
    return (
        <section className="player"> 
            <div className="album-cover-container">
                <img src={smiths} alt="Album Cover" className="album-cover-large" />
            </div>
        
            <div className="song-info">
                <h3 className="song-title">Bigmouth strikes again</h3>
                <p className="artist">The Smiths</p>
            </div>

             <div className="controls">
           <Link to="/Music3" className="prev-link">
            <button className="prev">&#9664;&#9664;</button>
           </Link>
    
           <button className="play">&#9654;</button>
    
           <Link to="/Music3" className="next-link">
            <button className="next">&#9654;&#9654;</button>
           </Link>
            </div>
            
            <div className="lyrics-preview">
                <p>Sweetness</p>
                <br />
                <p>Sweetness, I was only joking when I said</p>
                <br />
                <p>I'd like to smash every tooth in your head</p>
                <br />
                <p>Oh, Sweetness</p>
            </div>
        </section>
    );
}

export default Music2Page;

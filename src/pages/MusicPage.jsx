import { Link } from "react-router-dom";
import ima from "../assets/imagesss/images/awd.jpeg"
function MusicPage () {
    return(
            <section className="player"> 
           <div className="album-cover-container">
           <img src={ima} alt="Album Cover" className="album-cover-large" />
          </div>

        <div className="song-info">
           <h3 className="song-title">FE!N</h3>
           <p className="artist">Travis Scott</p>
        </div>
        <div className="controls">
       <Link to="/Music2" className="prev-link">
        <button className="prev">&#9664;&#9664;</button>
       </Link>
    
       <button className="play">&#9654;</button>
    
       <Link to="/Music2" className="next-link">
        <button className="next">&#9654;&#9654;</button>
       </Link>
        </div>


        <div className="lyrics-preview">
           <p>Just come outside for the night (yeah)</p>
           <br />
           <p>Take your time, get your light (yeah)</p>
           <br />
           <p>Johnny Dang, huh-uh</p>
           <br />
           <p>I been out geekin</p>
        </div>
    </section>
    );
}


export default MusicPage;
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return ( 
    <Link to={`/post/${post.id}`} className="news-card">
      <div className="container">
        <h3 className="news-card_title">{post.title}</h3>
        <span className="news-card-date">{post.date}</span>
        <span className="news-card_category">{post.description}</span>
      </div>
    </Link>
  );
}

export default PostCard;

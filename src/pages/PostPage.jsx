import { useState , useEffect } from "react";
import im2 from "../assets/imagesss/images/back-button.svg"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingPosts from "../components/LoadingPosts";
import Error from "../components/Error";
function PostPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError ] = useState(false);


    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://51cac18f825666cb.mokky.dev/post/${id}`);
                setPost(response.data); 
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false)
            }
            
        }

        fetchPost();
    }, [id])

    if (isError) {
        return <Error />;
      }
  

    return(
        <section class="mobile-block">
        <Link to="/post " class="back-button">
             <div class="container">
                <img src={im2} alt="back icon" width="24" height="24"/>
                Назад
             </div>
        </Link>
        {isLoading ? (<LoadingPosts /> ) : (
        <div class="container">
            <div class="post-detail-block">
                <img src={post.imageUrl} alt="imagee" height="205px" />
                <h3 class="post-card_title">{post.date2}</h3>
                <span class="post-card_date"> {post.description}</span>
            <p class="description">
            </p>
            </div>
        </div>
        ) }

    </section>
    )
}




export  default PostPage;
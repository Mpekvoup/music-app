import PostList from "../components/PostList";

function HomePage() {
    return (
        <section class="mobile-block">
            <div class="mobile-block_header is-red">
                All news
            </div>
            <PostList />
        </section>
    );
}


export default HomePage;
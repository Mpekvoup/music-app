import "./assets/awd.css"
import HomePage from "./pages/HomePage";
import Headerr from "./components/Headerr";
import CategoryesPage from "./pages/CategoryesPage"
import PostsByCategoryPage from "./pages/PostsByCategoryPage";
import {Routes, Route} from "react-router-dom"
import MusicPage from './pages/MusicPage'
import Albums from "./pages/Albums"
import HistoryPage from "./pages/HistoryPage"
import Music2Page from "./pages/Music2Page"
import Music3Page from "./pages/Music3Page";
import PostList from "./components/PostList";
import PostPage from "./pages/PostPage";
function App() {
  return (
    <>
      <Headerr />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostList />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/postPage" element={<PostPage />} />
          <Route path="/categories" element={<CategoryesPage />} />
          <Route path="/category/posts" element={<PostsByCategoryPage />} />
          <Route path="/Music" element={<MusicPage />} />
          <Route path="/Music/Music2" element={<MusicPage />} />
          <Route path="/category/Music" element={<MusicPage />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/category/Albums" element={<Albums />} />
          <Route path="/History" element={<HistoryPage />} />
          <Route path="/category/HistoryPage" element={<HistoryPage />} />
          <Route path="/Music2" element={<Music2Page />} />
          <Route path="/Music2/Music" element={<Music2Page />} />
          <Route path="/Music3" element={<Music3Page />} />

        </Routes>
      </main>
    </>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom"
import PostList from "./pages/PostList";
import PostSingle from "./pages/PostSingle";

function Header() {
    return (
        <>
            <div className="mb-10 mt-5">
                <Link to={'/'}>
                    <div className="text-xl leading-none font-bold uppercase">yumimi.top</div>
                    <div className="text-gray-500">welcome to my blog.</div>
                </Link>
            </div>
        </>
    )
}

export default function App() {
    document.title = 'YUMIMI.TOP'
    return (
        <>
            <div className="bg-gray-100 min-h-screen p-5 lg:p-20">
                <div className="bg-white max-w-[600px] lg:max-w-[900px] mx-auto p-8 lg:p-20 rounded shadow-sm">
                    <Header />
                    <Routes>
                        <Route path="/" element={<PostList />} />
                        <Route path="post_list/:num" element={<PostList />} />
                        <Route path={"post_single/:num"} element={<PostSingle />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

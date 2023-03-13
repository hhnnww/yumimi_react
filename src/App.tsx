import { Routes, Route, Link } from "react-router-dom"
import PostList from "./pages/PostList";
import PostSingle from "./pages/PostSingle";

function Header() {
    return (
        <>
            <div className="border-b mb-20">
                <div className="container py-8">
                    <Link to={'/'}>
                        <div className="flex justify-between">
                            <div className="leading-none">Yumimi.Top</div>
                            <div className="text-xs mt-1">人若无名，方可练剑！</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default function App() {
    document.title = 'YUMIMI.TOP'
    return (
        <>
            <div className="">
                <Header />
                <div className="max-w-[700px] mx-auto mb-20">
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

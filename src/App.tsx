import {Routes, Route, Link} from "react-router-dom"
import PostList from "./pages/PostList";
import PostSingle from "./pages/PostSingle";

function Header() {
    return (
        <div className="border-b py-10 px-10">
            <div className="container">
                <div className="flex justify-between">
                    <Link to={'/'}>
                        <div className="uppercase text-2xl">yumimi.top</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function App() {
    document.title = 'YUMIMI.TOP'
    return (
        <>
            <Header/>
            <div className="container px-10">
                <Routes>
                    <Route path="/" element={<PostList/>}/>
                    <Route path="post_list/:num" element={<PostList/>}/>
                    <Route path={"post_single/:num"} element={<PostSingle/>}/>
                </Routes>
            </div>
        </>
    );
}

import PostBox from "../components/PostBox";
import {useEffect, useState} from "react";
import axios from "axios";
import {url} from "../setting";
import {Link, useParams} from "react-router-dom";


export default function PostList() {
    const [Obj, setObj] = useState([])

    let params = useParams()
    let page_num = 1
    if (params.num) {
        page_num = parseInt(params.num)
    }

    useEffect(() => {
        axios.post(url, {
            "action": "get_post_list",
            "post_id": 1,
            "post_page": page_num,
            "category": "post"
        }).then((res) => {
            setObj(res.data)
        })
    }, [page_num])

    const post_list = Obj.map((item: { title: string; pub_date: string; content: string, id: number, summary: string }) =>
        <PostBox key={item.id} title={item.title} pub_date={item.pub_date} content={item.content} id={item.id} has_link={true} summary_state={true} summary={item.summary}/>
    )

    let prev, next
    if (page_num >= 2) {
        prev = (
            <Link to={'/post_list/' + (page_num - 1).toString()}>
                <div className="">上一页 {page_num - 1}</div>
            </Link>
        )
    }

    next = (
        <Link to={'/post_list/' + (page_num + 1).toString()}>
            <div className="">下一页 {page_num + 1}</div>
        </Link>
    )

    return (
        <>
            <div className="my-10">
                {post_list}
            </div>

            <div className="container max-w-[700px] flex items-center justify-between mb-10">
                {prev}{next}
            </div>
        </>
    )
}
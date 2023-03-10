import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../setting";
import { Link, useParams } from "react-router-dom";


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

    const post_list = Obj.map((item: { title: string; pub_date: string; content: string, id: number, summary: string, view: number }) =>
        <>
            <div className="mb-5">
                <Link to={'/post_single/' + item.id}>
                    <div className="font-bold mb-1 leading-tight lg:text-xl">{item.title}</div>
                    <div className="text-xs text-gray-500">
                        {item.pub_date}
                    </div>
                </Link>
            </div>
        </>
    )

    let prev, next
    if (page_num >= 2) {
        prev = (
            <Link to={'/post_list/' + (page_num - 1).toString()}>
                <div className="">上一页</div>
            </Link>
        )
    }
    const current = (
        <div className="">{page_num}</div>
    )
    next = (
        <Link to={'/post_list/' + (page_num + 1).toString()}>
            <div className="">下一页</div>
        </Link>
    )

    return (
        <>
            <div className="">
                {post_list}
            </div>

            <div className="mt-10 flex justify-between">
                {prev}{current}{next}
            </div>
        </>
    )
}
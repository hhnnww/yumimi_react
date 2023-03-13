import { url } from "../setting";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import TimeIcon from "./TimeIcon";

export default function PostSingle() {
    const [Obj, useObj] = useState<{ title: string, pub_date: string, content: string, id: number, summary: string }>({
        title: '',
        content: '',
        pub_date: '',
        id: 1,
        summary: ''
    })
    let params = useParams()
    let post_id = 1
    if (params.num) {
        post_id = parseInt(params.num)
    }
    useEffect(() => {
        axios.post(url, {
            "action": "get_post_single",
            "post_id": post_id,
            "post_page": 1,
            "category": "post"
        }).then((res) => {
            useObj(res.data)
        })
    }, [post_id]
    );

    return (
        <>
            <div className="mt-10 lg:mt-20">
                <div className="mb-5">
                    <div className="title">
                        <div className="text-4xl leading-snug">
                            {Obj.title}
                        </div>
                    </div>
                    <div className="meta">
                        <div className="">
                            <TimeIcon />
                        </div>
                        <div className="">{Obj.pub_date}</div>
                    </div>
                </div>

                <div className="prose max-w-none">
                    <ReactMarkdown>
                        {Obj.content}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    )
}
import {url} from "../setting";
import {useEffect, useState} from "react";
import axios from "axios";
import PostBox from "../components/PostBox";
import {useParams} from "react-router-dom";

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
            <div className="my-10 lg:my-20">
                <PostBox key={Obj.id} summary_state={false} title={Obj.title} pub_date={Obj.pub_date} content={Obj.content} id={Obj.id} has_link={false} summary={Obj.summary}/>
            </div>
        </>
    )
}
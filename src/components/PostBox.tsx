import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function PostBox(props: { title: string; pub_date: string; content: string; id: number; has_link: boolean, summary_state: boolean, summary: string }) {
    if (props.has_link) {
        return (
            <div className="">
                <div className="max-w-[700px] mx-auto mb-10">
                    <div className="">
                        <div className="text-xs font-bold">
                            {props.pub_date}
                        </div>
                        <div className="text-xl uppercase">
                            <Link to={'post_single/' + props.id} >
                                {props.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="border-b pb-20 mb-20">
                <div className="max-w-[700px] mx-auto">
                    <div className="mb-10">
                        <div className="text-sm font-bold">
                            {props.pub_date}
                        </div>
                        <div className="text-2xl lg:text-4xl text-bold uppercase">
                            {props.title}
                        </div>
                    </div>
                    <div className="prose max-w-none mt-5">
                        <ReactMarkdown>
                            {props.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        )
    }
}
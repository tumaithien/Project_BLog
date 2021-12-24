import { useParams } from "react-router"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { actAsyncGetPostDetails } from "../store/post/actions";

import PostDetailSlidebar from "../components/PostDetail/PostDetailSlidebar"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHeader from "../components/PostDetail/PostDetailHeader"
import PageNotFound from "./PageNotFound";

import IconLoading from "../components/shared/IconLoading";

function PostDetailsPage() {
    const params = useParams();
    const slug = params.slug;
    const dispatch = useDispatch()
    const [status, setStatus] = useState('loading')

    useEffect(() => {
        dispatch(actAsyncGetPostDetails(slug))
        .then(res =>{
            if(res.ok){
                setStatus('success')
            } else{
                setStatus('error')
            }
        })
    }, [slug, dispatch])
    if(status === 'loading'){
        return(
            <div className="article-list section">
                <div className="tcl-container">
                    <div className="tcl-row tcl-jc-center">
                        <IconLoading width="150px" />
                    </div>
                </div>
            </div>
        )
    }

    if(status === 'error'){
        return(
            <>
                <PageNotFound />
            </>
        )
    }

    return (
        <>
            <main className="post-detail">
                <div className="spacing" />
                <PostDetailHeader />
                <div className="spacing" />
                {/* Post Detail Wrapper Content */}
                <div className="post-detail__fluid">
                    <div className="tcl-container">
                        <div className="post-detail__wrapper">
                            <PostDetailContent />
                            <PostDetailSlidebar />
                        </div>
                    </div>
                </div>
                {/* End Post Detail Wrapper Content */}
            </main>

        </>
    )
}

export default PostDetailsPage
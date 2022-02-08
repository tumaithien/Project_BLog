import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import IconLoading from "../components/shared/IconLoading";
import UserInfoDetail from "../components/UserInfoDetail";
import { actAsyncGetInfoUser } from "../store/auth/actions";
import PageNotFound from "./PageNotFound";



function UserInfo() {
    const [status, setStatus] = useState('loading')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actAsyncGetInfoUser())
        .then(res => {
            if(res.ok){
                setStatus('success')
            }else{
                setStatus('error')
            }
        })
    }, [dispatch])

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

    if(status === "error"){
        return(
            <>
                <PageNotFound />
            </>
        )
    }
    return (
        <div className="tcl-container text-center spacing">
            <h1>Thông tin tài khoản</h1>
            <UserInfoDetail />
        </div>
    )
}
export default UserInfo
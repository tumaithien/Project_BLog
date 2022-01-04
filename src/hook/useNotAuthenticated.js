import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { genPostLink } from "../helpers"


export function useNotAuthenticated(){
    const history = useHistory()
    const isAuthenticated = useSelector(state => Boolean(state.Authen.token))
    const postHistory = useSelector(state => state.Post.postDetail)
    console.log('postHistory', postHistory)

    useEffect(() => {
        if(isAuthenticated){
            history.push('/')
            if(postHistory){
                history.push(genPostLink(postHistory.slug))
            }
        }
        
    },[history, isAuthenticated, postHistory])
    
}
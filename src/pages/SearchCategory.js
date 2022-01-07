import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import ArticleItem from "../components/ArticleItem"
import IconLoading from "../components/shared/IconLoading"
import MainTitle from "../components/shared/MainTitle"
import PageNotFound from "./PageNotFound"

import { actAsyncGetArticles } from "../store/post/actions"
import { usePostPagings } from "../hook/usePostPagings"



function SearchCategory() {

    const { slug } = useParams()
    const [category, setCategory] = useState(undefined)
    const isFetchedCategory = useSelector(state => state.Category.isFetched)
    const hashCategoryById = useSelector(state => state.Category.hashCategoryById)

    const dispatch = useDispatch()

    useEffect(() => {
        if (isFetchedCategory) {
            // let isFound = false
            // Object.keys(hashCategoryById)
            //     .forEach(categoryId => {
            //         const valueCategory = hashCategoryById[categoryId]
            //         if (valueCategory.slug === slug && valueCategory.lang === 'vi') {
            //             isFound = true
            //             setCategory(valueCategory)
            //         }
            //     })
            // if (isFound === false) {
            //     setCategory(null)
            // }

            const foundId = Object.keys(hashCategoryById).find(categoryId => {
                const valueCategory = hashCategoryById[categoryId]
                return valueCategory.slug === slug && valueCategory.lang === 'vi'
            })
            if (foundId) {
                setCategory(hashCategoryById[foundId])
            }
            else {
                setCategory(null)
            }
        }
    }, [isFetchedCategory, hashCategoryById, slug])

    const { post, total, renderBtnLoadMore } = usePostPagings({
        extraParams: {
            categories: category ? category.id : ''
        }
    })
    useEffect(() => {
        if (category) {
            dispatch(actAsyncGetArticles({
                categories: category.id
            }))
        }
    }, [category, dispatch])

    if (!isFetchedCategory) {
        return (
            <div className="articles-list section">
                <div className="tcl-container text-center">
                    <IconLoading width={150} />
                </div>
            </div>
        )
    }
    if (category === null) {
        return (
            <PageNotFound />
        )
    }

    return (
        <>
            <div className="articles-list section">
                <div className="tcl-container">
                    <MainTitle type="search">{total} kết quả tìm kiếm cho tags "{slug}"</MainTitle>
                    {
                        post.map(dataItem => {
                            return (
                                <div className="tcl-row tcl-jc-center" key={dataItem.id}>
                                    <div className="tcl-col-12 tcl-col-md-8">
                                        <ArticleItem post={dataItem} isStyleCard isShowCategories></ArticleItem>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="text-center">
                        {renderBtnLoadMore()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCategory
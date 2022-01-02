import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ArticleItem from "../components/ArticleItem"
import MainTitle from "../components/shared/MainTitle"


function SearchCategory() {

    const { slug } = useParams()
    const [category, setCategory] = useState(null)
    const isFetchedCategory = useSelector(state => state.Category.isFetched)
    const hashCategoryById = useSelector(state => state.Category.hashCategoryById)

    useEffect(() => {
        if (isFetchedCategory) {
            Object.keys(hashCategoryById)
                .forEach(categoryId => {
                    const valueCategory = hashCategoryById[categoryId]
                    if (valueCategory.slug === slug && valueCategory.lang === 'vi') {
                        setCategory(valueCategory)
                    }
                })
        }
    }, [isFetchedCategory, hashCategoryById])

    console.log('category', category)

    return (
        <>
            <div className="articles-list section">
                <div className="tcl-container">
                    <MainTitle type="search">10 kết quả tìm kiếm cho từ khóa VueJS</MainTitle>
                    <div className="tcl-row tcl-jc-center">
                        <div className="tcl-col-12 tcl-col-md-8">
                            <ArticleItem
                                isStyleCard
                                isShowCategories
                            >
                            </ArticleItem>
                        </div>
                    </div>
                    <div className="tcl-row tcl-jc-center" >
                        <div className="tcl-col-12 tcl-col-md-8">
                            <ArticleItem isStyleCard isShowCategories></ArticleItem>
                        </div>
                    </div>
                    <div className="text-center">
                        {/* {
                            renderBtnLoadMore()
                        } */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCategory
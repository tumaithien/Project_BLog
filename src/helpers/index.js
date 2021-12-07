export function getQueryStr(name) {
    return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(list) {
    return{
        id: list.id,
        title: list.title.rendered,
        author: list.author_data,
        thumb: list.featured_media_url,
        slug: list.slug,
        createDate: list.date,
        authorId: list.author,
        categoriesId: list.categories,
        viewCount: list.view_count
    }
}
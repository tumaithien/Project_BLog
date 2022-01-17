import { DEFAULT_AVATAR, MESSAGE_ERROR } from "../constants"

export function getQueryStr(name) {
    return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(list) {
    return {
        id: list.id,
        title: list.title.rendered,
        author: list.author_data,
        thumb: list.featured_media_url,
        slug: list.slug,
        createDate: list.date,
        authorId: list.author,
        categoriesId: list.categories,
        viewCount: list.view_count,
        shortDecsHTML: list.excerpt.rendered
    }
}

export function mappingPostDetailData(post) {
    return {
        ...mappingPostData(post),
        contet: post.content.rendered,
        tagsId: post.tags,
        commentCount: post.comment_count
    }
}

export function mappingPostComment(commentItem) {
    return {
        id: commentItem.id,
        postId: commentItem.post,
        content: commentItem.content.rendered,
        parentId: commentItem.parent,
        authorId: commentItem.author,
        authorName: commentItem.author_name,
        authorAvatar: commentItem.author_data.avatar || DEFAULT_AVATAR,
        createDate: commentItem.date,
        replyCount: commentItem.comment_reply_count
    }
}

export function mappingMenu(menu) {
    return {
        id: menu.ID,
        slug: menu.url,
        title: menu.post_title,
        childrenItems: menu.child_items
    }
}

export function mappingCurrentUser(user) {
    return {
        id: user.id,
        name: user.nickname,
        email: user.email,
        slug: user.slug,
        avatar: user.simple_local_avatar?.full || DEFAULT_AVATAR
    }
}

export const mappingMainMenu = menuItem => {
    const data = {
        id: menuItem.ID,
        slug: menuItem.url,
        title: menuItem.post_title,
        childrenItems: menuItem.child_items || []
    }

    data.childrenItems = data.childrenItems.map(mappingMainMenu)

    return data
}

export function handleHashCategory(categories) {
    const hashObj = {}

    categories.forEach(categoryItem => {
        const key = categoryItem.id
        hashObj[key] = categoryItem

        hashObj[key] = {
            id: categoryItem.id,
            slug: categoryItem.slug,
            name: categoryItem.name,
            lang: categoryItem.lang
        }
    })


    return hashObj
}

export function handleHashTags(tags) {
    const hashObj = {}

    tags.forEach(tagItem => {
        const key = tagItem.id
        hashObj[key] = tagItem

        hashObj[key] = {
            id: tagItem.id,
            slug: tagItem.slug,
            name: tagItem.name,
            lang: tagItem.lang
        }
    })

    return hashObj
}

export function validateFormData({ name, value }) {
    let error = ''

    if (name === 'username' && !value) {
        error = MESSAGE_ERROR.username_required
    }

    if (name === 'password') {
        if (!value) error = MESSAGE_ERROR.password_required
        else if (value.length < 6) error = MESSAGE_ERROR.password_length

    }

    return error
}


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export function validateFormRegister({ name, value }) {
    let error = ''

    if (name === 'username' && !value) {
        error = MESSAGE_ERROR.username_required
    }

    if (name === 'email') {
        if (!value) {
            error = MESSAGE_ERROR.email_required
        } else if (!validateEmail(value)) {
            error = MESSAGE_ERROR.rest_user_invalid_email
        }

    }
    if (name === 'password') {
        if (!value) error = MESSAGE_ERROR.password_required
        else if (value.length < 6) error = MESSAGE_ERROR.password_length

    }

    return error
}


export function genUserLink(authorId) {
    return `/user/${authorId}`
}
export function genPostLink(slug) {
    return `/post/${slug}`
}
export function genCategoryLink(category) {
    return `/category/${category}`
}
export function genCategoryFooter(category) {
    return `/category${category}`
}
export function genTagsLink(tags) {
    return `/tags/${tags}`
}

export function highlightText(queryStr, tagetStr) {
    const reg = new RegExp(queryStr, 'gi');
    const finalStr = tagetStr.replace(reg, function (str) {
        return '<mark>' + str + '</mark>'
    })
    return finalStr
}

export function getDefaultCmtPaging() {
    return {
        list: [],
        currentPage: 0,
        total: 0,
        totalPage: 1,
        exclude: []
    }
}
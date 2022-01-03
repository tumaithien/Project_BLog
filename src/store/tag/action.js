import { handleHashTags } from "../../helpers"
import tagsService from "../../services/tags"

export const ACT_GET_TAGS = 'ACT_GET_TAGS'

export function actGetTags(hashTagsById) {
    return {
        type: ACT_GET_TAGS,
        payload: { hashTagsById }
    }
}

export function actAsyncGetTags() {
    return async dispatch => {
        try {
            const response = await tagsService.getList()
            const tags = response.data

            const hashTagsById = handleHashTags(tags)
            dispatch(actGetTags(hashTagsById))
            
        } catch (error) {
            
        }
    }
}
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import localeVi from 'dayjs/locale/vi'
import { DATE_TEMPLATE } from '../constants'


dayjs.locale(localeVi)
dayjs.extend(relativeTime)

export const formatRelativeDate = (date) =>{
    const createDateObj = dayjs(date)
    const dateFormated = createDateObj.format(DATE_TEMPLATE);
    const dateRelative = createDateObj.fromNow();

    return{ dateFormated,  dateRelative}
}
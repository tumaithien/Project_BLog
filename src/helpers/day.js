import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import localeVi from 'dayjs/locale/vi'
import { DATE_TEMPLATE, DATE_TEMPLATE_FULL } from '../constants'


dayjs.locale(localeVi)
dayjs.extend(relativeTime)

export const formatRelativeDate = (date, isFull) =>{
    const createDateObj = dayjs(date)
    const dateFormated = createDateObj.format(isFull ? DATE_TEMPLATE_FULL : DATE_TEMPLATE);
    const dateRelative = createDateObj.fromNow();

    return{ dateFormated,  dateRelative}
}
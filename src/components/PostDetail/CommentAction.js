import cls from 'classnames'
import './comments.css'
export default function CommentAction({
    count,
    spacingTop,
    spacingBottom,
    parent,
    onClick
}) {

    function handleClick(evt) {
        evt.preventDefault()
        if(onClick){
            onClick(evt)
        }
    }

    const classes = cls('comments__hidden',{
        'mt-1': spacingTop,
        'mb-1': spacingBottom,
        'pl-0': parent
    })

    const label = parent ? `Xem thêm ${count} bình luận` : `${count} phản hồi`
    
    if (count === 0) return null

    return (
        <div className={classes}>
           <button onClick={handleClick}>
            {
                !parent && (<i className="icons ion-ios-undo" />)
            } {label}
           </button>
        </div>
    )
}
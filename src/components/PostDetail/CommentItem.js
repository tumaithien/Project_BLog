import CommentAction from "./CommentAction"
import CommentForm from "./CommentForm"


export default function CommentItem(props) {

    const isThisParent = props.parentId === 0

    return (
        <>
            <li className="item">
                <div className="comments__section">
                    <div className="comments__section--avatar">
                        <a href="/">
                            <img src="/assets/images/avatar1.jpg" alt="" />
                        </a>
                    </div>
                    <div className="comments__section--content">
                        <a href="/" className="comments__section--user">John Smith</a>
                        <p className="comments__section--time">2 minutes ago</p>
                        <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem maiores, iusto unde quibusdam! Ullam nisi iste reprehenderit, expedita nam ad. Nisi hic at voluptate sint incidunt aut?</p>

                    </div>
                </div>
                {
                    isThisParent && false && (
                        <ul className="comments">
                            <CommentItem parentId={123456} />
                            <CommentItem parentId={654321} />
                        </ul>
                    )
                }
                {
                    isThisParent && (
                        <CommentAction count={20} />
                    )
                }
                {
                    isThisParent && false && (
                        <CommentForm />
                    )
                }
            </li>
        </>
    )
}
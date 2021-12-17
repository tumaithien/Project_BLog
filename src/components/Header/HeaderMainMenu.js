import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const handleMapMenuItem = menuItem => {
    return(
        <li key={menuItem.id} >
            {
                menuItem.slug.startsWith('http')
                ? <a href={menuItem.slug} target="_blank" rel="noreferrer">{menuItem.title}</a>
                : <Link to={menuItem.slug}>{menuItem.title}</Link>
            }
            {
                menuItem.childrenItems.length > 0 && <ul>{menuItem.childrenItems.map(handleMapMenuItem)}</ul>
            }
        </li>
    )
}

function HeaderMainMenu() {

    const menuSelector = useSelector(state => state.Menu.mainMenu)

    return (
        <>
            <ul className="header-nav__lists">
                {menuSelector.map(handleMapMenuItem)}
            </ul>
        </>
    )
}

export default HeaderMainMenu
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import './SideDrawer.css'

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];
    if(show){
        sideDrawerClass.push("show");
    }
    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={click}>
            <li>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>
                        Cart
                        <span className="sidedrawer__cartbadge">0</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>
    </div>
}

export default SideDrawer

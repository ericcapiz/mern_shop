import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'
import './CartItem.css';

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="product name" />
            </div>
            <Link to={`/product/${1111}`} className="cartitem__name">
                <p>Product 1</p>
            </Link>
            <p className="cartitem__price">$499.99</p>
            <select className="cartitem__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button className="cartitem__deleteBtn">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

export default CartItem

import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'
import './CartItem.css';

const CartItem = ({item, qtyChangeHandler, deleteFromCart}) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">${item.price}</p>
            <select className="cartitem__select" value={item.qty} onChange={(e)=> qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>
            <button className="cartitem__deleteBtn" onClick={() => deleteFromCart(item.product)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

export default CartItem

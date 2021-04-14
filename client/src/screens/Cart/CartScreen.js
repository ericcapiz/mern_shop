import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import './CartScreen.css';

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const deleteFromCart = (id) => [
        dispatch(removeFromCart(id))
    ]

    const getcartCount = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Your Cart:</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your Cart Is Empty <Link to="/">Go Back</Link>
                    </div>
                ) : cartItems.map(item =>(
                    <CartItem key={item.product} item={item} deleteFromCart={deleteFromCart} qtyChangeHandler={qtyChangeHandler} />
                ))}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>{getcartCount()} items in your cart</p>
                    <p>Total ${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                    <Link to="/">
                        <button>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartScreen

import './ProductScreen.css';

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="product name" />
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>Price: $499.99</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique, recusandae doloribus, neque deleniti quia beatae veritatis natus nostrum magni minus optio dolor inventore illum maiores. Accusantium recusandae officiis doloribus?
                    A, nobis. Ab, nisi tempora atque eum quae excepturi perferendis maiores iste perspiciatis enim consequatur et sequi laborum dolorem quidem ipsam minus rem sapiente a!.</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>Price: <span>$499.99</span></p>
                    <p>Status: <span>In Stock</span></p>
                    <p>Qty:
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button className="button">
                            Add To Cart
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen

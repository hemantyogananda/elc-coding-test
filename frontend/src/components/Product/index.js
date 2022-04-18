import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

import "./_product.scss";

// const products = [
//     require("../../assets/img/shop/shop-1.jpg"),
//     require("../../assets/img/shop/shop-2.jpg"),
//     require("../../assets/img/shop/shop-3.jpg"),
//     require("../../assets/img/shop/shop-4.jpg"),
//     require("../../assets/img/shop/shop-5.jpg"),
// ]

const Product = () => {
    const dispatch = useDispatch();
    const { product: { products,filteredProduct } } = useSelector((obj) => obj);

    useEffect(() => {
        dispatch(actions.getProducts());
    }, [])

    

    
    return (
        <div className="row">
            {filteredProduct.map((item, index) => (
                <div className="col-lg-4 col-md-6">
                    <div className="product__item">
                        <div className="product__item__pic">
                            <img className="product__item__pic" src={item.imageSrc} />
                            <ul className="product__hover">
                                <li>
                                    <a href={item.imageSrc}>
                                        
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>
                                <a href="#">{item.name}</a>
                            </h6>
                            <div className="product__price">{item.price}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product;
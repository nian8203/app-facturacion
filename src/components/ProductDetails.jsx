import PropTypes from "prop-types";
import { RowItemDetails } from "./RowItemDetails";

export const ProductDetails = ({ title, items }) => {

    return <>

        <h3>{title}</h3>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, product, price, quantity }) => {
                    return (
                        
                        <RowItemDetails key={id} product={product} price={price} quantity={quantity}/>
                    );
                })}

            </tbody>

        </table>

    </>

}

ProductDetails.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}
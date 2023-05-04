import { useEffect, useState } from "react";

export const FormItemsDetails = ({handler}) => {

    const [invoiceItemState, setInvoiceItemState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { product, price, quantity } = invoiceItemState;

    useEffect(),[invoiceItemState];

    const onInputChange = ({ target: { name, value } }) => {
        console.log(name);
        console.log(value);
        setInvoiceItemState({
            ...invoiceItemState,
            [name]: value
        });
    };

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) return;
        if (quantity.trim() < 1) {
            alert('El numero debe ser mayor a 0');
            console.log('El numero debe ser mayor a 0');
            return;
        };
        if (isNaN(quantity.trim())) {
            alert('Debe ingresar un dato numerico');
            console.log('Debe ingresar un dato numerico');
            return;
        };

        handler(invoiceItemState);

        setInvoiceItemState({
            product: '',
            price: '',
            quantity: '',
        });

    }

    return (<>
        <form className="w-50" onSubmit={onInvoiceItemsSubmit}>

            <input type="text"
                name="product"
                value={product}
                placeholder="Producto"
                className="form-control m-3"
                onChange={onInputChange} />

            <input type="text"
                name="price"
                value={price}
                placeholder="Precio"
                className="form-control m-3"
                onChange={event => onInputChange(event)} />

            <input type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={onInputChange} />

            <button type="submit" className="btn btn-primary m-3">Nuevo</button>

        </form>


    </>)


}
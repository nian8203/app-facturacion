import { getInvoice } from "./services/getInvoice"
import { InvoiceDetails } from "./components/InvoiceDetais";
import { ClientDetails } from "./components/ClientDetails";
import { CompanyDetails } from "./components/CompanyDetails";
import { ProductDetails } from "./components/ProductDetails";
import { TotalDetails } from "./components/TotalDetails";
import { useState } from "react";
import { invoice } from "./data/invoice";

export const InvoiceApp = () => {

    const invoice = getInvoice();
    const { total, id, name, client, company, items: itemsInitial } = invoice;
    console.log(invoice);

    const [invoiceItemState, setInvoiceItemState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { product, price, quantity } = invoiceItemState;

    const [items, setItems] = useState(itemsInitial);
    const [counter, setCounter] = useState(4);

    const onInputChange = ({ target: { name, value } }) => {
        console.log(name);
        console.log(value);
        setInvoiceItemState({
            ...invoiceItemState,
            [name]: value
        });
    };

    // const onPriceChange = ({target}) => {
    //     console.log(target.value);
    //     setPriceValue(target.value);
    // };

    // const onQuantityChange = ({target}) => {
    //     console.log(target.value);
    //     setQuantityValue(target.value);
    // };

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

        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity, 10)
        }]);

        setInvoiceItemState({
            product: '',
            price: '',
            quantity: '',
        });

         setCounter(counter + 1);
    }

    return <>
        <div className="container">
            <div className="card my-3">
                <div className="card-header">
                    Datos de la factura
                </div>
                <div className="card-body">

                    <InvoiceDetails id={id} name={name}></InvoiceDetails>

                    <div className="row my-3">
                        <div className="col">
                            <ClientDetails client={client}></ClientDetails>
                        </div>

                        <div className="col">
                            <CompanyDetails company={company}></CompanyDetails>
                        </div>
                    </div>

                    <ProductDetails title="Datos del Producto" items={items}></ProductDetails>

                    <TotalDetails total={total}></TotalDetails>

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
                </div>
            </div>
        </div>
    </>
}
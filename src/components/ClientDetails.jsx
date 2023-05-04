import PropTypes from "prop-types";

export const ClientDetails = ({ client }) => {

    const { name: nameClient, lastName, address: { country, city, street, number } } = client;



    return <>

        <h3>Datos del cliente:</h3>
        <ul className="list-group">
            <li className="list-group-item active">{nameClient} {lastName}</li>
            <li className="list-group-item">{city} {country}</li>
            <li className="list-group-item">{street} {number}</li>
        </ul>

    </>
}

ClientDetails.propTypes = {
    client: PropTypes.object.isRequired,
}
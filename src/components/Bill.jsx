import React from "react";

const Bill = ({ receipt }) => {

    return (<>
        <div>
            <div key={receipt.id}>
                <h2>{receipt.name}</h2>
                <p>Description: {receipt.description}</p>
                <p>Amount: ${receipt.amount}</p>
                <p>Cuota: ${receipt.cuota}</p>
                <p>Type: {receipt.type}</p>
                <p>Finish At: {receipt.deadline}</p>
                <p>Created At: {receipt.created_at}</p>
                <p>Updated At: {receipt.updated_at}</p>
                <hr />
            </div>
        </div>
    </>);
};

export default Bill;
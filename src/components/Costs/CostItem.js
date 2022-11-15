import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../UI/Card";

// import React, { useState } from "react";

function CostItem(props) {

    // const [description, setDescription] = useState(props.description);
    // const changeDescription = () => {
    //     setDescription('New Text!');
    // };

    const removeCostItem = () => {
        props.removeCost(props.id);
    };

    return (
        <li>
            <Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                    <h2>{props.description}</h2>
                    <Card className='cost-item__price'>${props.amount}</Card>
                    <button className='remove-cost' onClick={removeCostItem}>Удалить</button>
                </div>
                {/*<button onClick={changeDescription}>Изменить описание</button>*/}
            </Card>
        </li>
    );
}

export default CostItem;
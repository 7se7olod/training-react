import "./CostList.css";
import CostItem from "./CostItem";
import React from "react";

const CostList = (props) => {

    if (props.costs.length === 0) {
        return <h2 className="cost-list__fallback">В этом году расходов нет</h2>
    }

    const deletedItem = (costItemId) => {
        props.removedCostItem(costItemId);
    };

    return <ul className="cost-list">
        { props.costs.map(cost => (<CostItem
                id={cost.id}
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
                removeCost={deletedItem}
            />
        ))}
    </ul>
};

export default CostList;
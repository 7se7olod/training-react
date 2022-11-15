import CostForm from "./CostForm";
import './NewCost.css';
import React, { useState } from "react";

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const inputCostsDataHandler = () => {
      setIsFormVisible(true);
    };

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
          ...inputCostData,
          id: Math.random().toString(),
        };
        console.log(costData);

        props.onAddCost(costData);
        setIsFormVisible(false);
    };

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    };


    return <div className='new-cost'>
        {!isFormVisible && <button onClick={inputCostsDataHandler}>Добавить новый расход</button> }
        {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler} />}
    </div>
};

export default NewCost;
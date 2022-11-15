import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";
import React, {useState} from "react";

function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
        console.log(year);
    };

    let filteredCosts = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear);

    const deletedCostItem = (costItemId) => {
        props.removeCostItem(costItemId);
    };

    return (<div>
        <Card className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            <CostsDiagram costs={filteredCosts}/>
            <CostList costs={filteredCosts} removedCostItem={deletedCostItem}/>
        </Card>
    </div>);
}

export default Costs;
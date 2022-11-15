import React, {useState} from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2022, 2, 12),
        description: "Холодильник",
        amount: 999.99,
    },
    {
        id: 'c2',
        date: new Date(2019, 11, 21),
        description: "MacBook",
        amount: 1254.49,
    },
    {
        id: 'c3',
        date: new Date(2021, 4, 28),
        description: "Джинсы",
        amount: 49.99,
    }
];


function App() {

    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts];
        });
    };

    const deletedCostItemHandler = (costItemId) => {
        setCosts(costs.filter(costItem => costItem.id !== costItemId));
    };

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs} removeCostItem={deletedCostItemHandler}/>
        </div>
    );
    // React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h1', {}, 'Начнем изучение React!'),
    //     React.createElement(Costs, {costs: costs})
    // );

}

export default App;

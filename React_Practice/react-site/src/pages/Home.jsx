import React from "react";

import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";

function Home({items}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(name) => console.log(name)}
                            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={[
                    {name: 'попопулярности', type: 'popular'},
                    {name: 'по цене', type: 'price'},
                    {name: 'алфавит', type: 'alphabet'}
                ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(obj => (
                    <PizzaBlock key={obj.id} {...obj}/>
                ))}
            </div>
        </div>
    )
}

export default Home;
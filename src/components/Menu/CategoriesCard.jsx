/* eslint-disable react/prop-types */
import { Card } from "antd";
import CategoriesButton from "./CategoriesButton";

function CategoriesCard({ categories = [], scrollTo }) {
    return (
        <Card title="Categories" style={{}}>
            {categories.map((i) => {
                return (
                    <CategoriesButton
                        imgUrl={i.imgUrl}
                        name={i.name}
                        key={i.id}
                        scrollTo={scrollTo}
                    />
                );
            })}
        </Card>
    );
}

export default CategoriesCard;

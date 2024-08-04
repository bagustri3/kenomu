import { Avatar, Card } from "antd";

// eslint-disable-next-line react/prop-types
function CategoriesButton({ key, scrollTo, imgUrl, name }) {
    const gridStyle = {
        width: "25%",
        textAlign: "center",
    };
    return (
        <Card.Grid style={gridStyle} onClick={() => scrollTo(key)}>
            <Avatar
                src={imgUrl}
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
            {name}
        </Card.Grid>
    );
}

export default CategoriesButton;

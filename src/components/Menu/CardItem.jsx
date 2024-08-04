/* eslint-disable react/prop-types */
import { Button, Card, Col } from "antd";

function CardItem({ id, imgUrl, name, price, onClick }) {
    const colStyle = {
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <Col
            className="gutter-row"
            xs={{ flex: "50%" }}
            sm={{ flex: "25%" }}
            md={{ flex: "25%" }}
            lg={{ flex: "20%" }}
            xl={{ flex: "20%" }}
            style={{
                marginBottom: 10,
            }}
        >
            <div style={colStyle}>
                <Card
                    style={{
                        width: "150px",
                    }}
                    hoverable
                    cover={<img alt="img" src={imgUrl} />}
                >
                    <Card.Meta
                        title={name}
                        description={() => (
                            <>
                                <p>{price}</p>
                                <Button
                                    type="primary"
                                    onClick={() => onClick(id)}
                                >
                                    Add
                                </Button>
                            </>
                        )}
                    />
                </Card>
            </div>
        </Col>
    );
}

export default CardItem;

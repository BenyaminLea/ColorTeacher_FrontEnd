import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

function GameLanding(props) {
    const onClick = (e) => {
        e.persist();
        console.log("clicked", e.currentTarget.id);
    };


    return (
        <div className="content">
            <Row className="justify-content-center">
                <Col lg="3" />
                <Col lg="6" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row style={{ height: "10rem" }}>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category"></p>
                                        <CardTitle tag="p">
                                            What do you want to play?
                                        </CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" />
                <Col lg="3" md="6" sm="6">
                    <Card className="card-stats" onClick={onClick} id="1">
                        <CardBody>
                            <Row style={{ height: "10rem" }}>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category"></p>
                                        <CardTitle tag="p">
                                            Colors
                                        </CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                    <Card className="card-stats" onClick={onClick} id="2">
                        <CardBody>
                            <Row style={{ height: "10rem" }}>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category"></p>
                                        <CardTitle tag="p">Language</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default GameLanding;
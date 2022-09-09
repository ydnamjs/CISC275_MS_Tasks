import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <h1>New Header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>I am Michael Snead OOooOOOooOo</p>
            <p>Hello World</p>
            <p>Top 5 Cheese</p>
            <img
                src={require("./assets/images/cheese.jpg")}
                alt="A picture of some cheese"
            />
            <ol>
                <li>Cheddah</li>
                <li>Blue</li>
                <li>Mac and</li>
                <li>Bleu</li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 200,
                                height: 300
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 400,
                                height: 200
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <div style={{ height: 200 }}></div>
        </div>
    );
}

export default App;

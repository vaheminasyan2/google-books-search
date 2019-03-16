import React from "react";
import Title from "../components/Title/title";
import Main from "../components/Main/main";
import Row from "../components/Row/row";
import CardSaved from "../components/CardSaved/cardSaved";


function Saved() {
    return (
        <div>
            <Title />
            <Main>
                <Row> Saved
            <CardSaved />
                </Row>
            </Main>
        </div>
    );
};

export default Saved;

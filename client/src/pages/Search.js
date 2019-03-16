import React, { Component } from "react";
import Title from "../components/Title/title";
import SearchBox from "../components/Search/searchBox"
import Main from "../components/Main/main";
import Row from "../components/Row/row";
import Card from "../components/Card/card";


function Search() {
    return (
        <div>
            <Title />
            <Main>
                <Row>
                    <SearchBox />
                </Row>
                <Row> Results
            <Card />
                </Row>
            </Main>
        </div>
    );
};

export default Search;

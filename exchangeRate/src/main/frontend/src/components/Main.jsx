import React from 'react';
import './main.css';
import PageTitle from "./PageTitle";
import Dashboard from "./homeChart/Dashboard";
import Table from "./homeChart/Table";

function Main() {
    return (
        <main id="main" className="main">
            <PageTitle page="환율 조회"/>
            <Dashboard/>
            <Table />
        </main>
    );
}

export default Main;
import React from "react";
import './dashboard.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // 탭의 스타일을 위한 CSS 파일
import USDCharts from './USDCharts';
import JPYCharts from "./JPYCharts";
import EURCharts from "./EURCharts";
import CNYCharts from "./CNYCharts";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Tabs>
                <TabList>
                    <Tab>USD</Tab>
                    <Tab>JPY</Tab>
                    <Tab>EUR</Tab>
                    <Tab>CNY</Tab>
                </TabList>
                <TabPanel>
                    USD 그래프
                    <USDCharts/>
                </TabPanel>
                <TabPanel>
                    JPY 그래프
                    <JPYCharts/>
                </TabPanel>
                <TabPanel>
                    EUR 그래프
                    <EURCharts/>
                </TabPanel>
                <TabPanel>
                    CNY 그래프
                    <CNYCharts/>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Dashboard;
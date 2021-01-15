import React from "react";
import MenuBar from "features/layout/components/MenuBar";
import Content from "features/layout/components/Content";
import Page from "features/layout/components/Page";
import RouterSwitch from "features/routing";
import { HashRouter } from "react-router-dom";

const App = () => {
    return (
        <HashRouter>
            <Page>
                <MenuBar />
                <Content>
                    <RouterSwitch />
                </Content>
            </Page>
        </HashRouter>
    );
};

export default App;

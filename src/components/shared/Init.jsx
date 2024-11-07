import { useState } from "react";

import Layout from "components/shared/Layout";
import HomeScreen from "pages/HomeScreen";
import FinancesScreen from "pages/FinnancesScreen";
import ConfigsScreen from "pages/ConfigsScreen";

const Init = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "finances":
        return <FinancesScreen />;
      case "configs":
        return <ConfigsScreen />;

      default:
        return <HomeScreen />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col h-full">
        <div className="flex-grow flex justify-center items-center">
          {renderActiveScreen()}
        </div>

        <div role="tablist" className="tabs tabs-boxed fixed bottom-0 left-0 right-0">
          <a
            role="tab"
            className={`tab ${activeTab === "home" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "finances" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("finances")}
          >
            Finances
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "configs" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("configs")}
          >
            Configs
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Init;

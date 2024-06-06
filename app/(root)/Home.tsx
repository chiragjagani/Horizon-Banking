import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";
import HearderBox from "@/components/HearderBox";
import RightSidebar from "@/components/RightSidebar";

export const Home = () => {
  const loggedIn = { firstName: "Chirag" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HearderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access to and mange your account and transaction efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  );
};

import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";
import HearderBox from "@/components/HearderBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Chirag",
    lastName: "Jagani",
    email: "jaganichirag912@gmail.com",
  };

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

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1250 }, { currentBalance: 1350 }]}
      />
    </section>
  );
};

export default Home;

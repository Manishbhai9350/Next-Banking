'use client'
import Image from "next/image";
import HeaderBox from "../../components/HeaderBox";
import { useState } from "react";
import TotalBalanceBox from "../../components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState({
      firstName:'Manish',
      lastName:'Dhaka',
      email:'manish@gmail.com',
  })
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedIn ? loggedIn.firstName : 'Guest'}
          subtext="welcome to the Horison services we provide the best sevices to out cutomers"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={3}
          totalCurrentBalance={7140.56}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
      user={loggedIn}
      banks={[{currentBalance:4599.43},{currentBalance:6535.55}]}
      transactions={[]}
      />

    </section>
  );
}

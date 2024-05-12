import Image from "next/image";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "../../components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

 const Home = async () => {
  const user = await getLoggedInUser()
  if (!user) redirect('/signin')
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type='greeting'
          title='Welcome'
          user={user}
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
      user={user}
      banks={[{currentBalance:4599.43},{currentBalance:6535.55}]}
      transactions={[]}
      />

    </section>
  );
}
export default Home
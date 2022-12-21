import React from "react";
import AreaPieChart from "../../components/atoms/AreaPieChart";
import MonthlyChart from "../../components/atoms/MonthlyChart";
import DashboardStatsGrid from "../../components/DashboardStatsGrid";


const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-3 bg-slate-100">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<MonthlyChart />
				<AreaPieChart />
			</div>
			{/* <div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div> */}
		</div>
  );
};

export default Home;
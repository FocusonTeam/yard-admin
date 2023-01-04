import React,  {useEffect, useState} from "react";
import AreaPieChart from "../../components/atoms/AreaPieChart";
import MonthlyChart from "../../components/atoms/MonthlyChart";
import DashboardStatsGrid from "../../components/DashboardStatsGrid";

import { useCountPostingQuery, useCountProfileQuery } from "generated/graphql";
import { useReactiveVar } from "@apollo/client";
import { DashboardVar } from "models/fragmentVar";


const Home = () => {

	const dashboardVar = useReactiveVar(DashboardVar);

	const Users = useCountProfileQuery({fetchPolicy: 'no-cache'});
	const Posts = useCountPostingQuery({fetchPolicy: 'no-cache'});

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
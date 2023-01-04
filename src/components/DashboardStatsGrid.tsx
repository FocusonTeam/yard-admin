import React, { useEffect, useState } from 'react'
import {IoPeople, IoCart} from 'react-icons/io5'
import {CgFeed} from 'react-icons/cg';
import {GrArticle} from 'react-icons/gr';
import { DashboardStat } from './atoms/DashboardStat';
import { useCountPostingQuery, useCountProfileQuery } from "generated/graphql";
import { useReactiveVar } from '@apollo/client';
import { DashboardVar } from 'models/fragmentVar';

const DashboardStatsGrid = () => {

	const Users = useCountProfileQuery({fetchPolicy: 'no-cache'});
	const Posts = useCountPostingQuery({fetchPolicy: 'no-cache'});

	const count = [
		{
			variation : 0,
			increase : true
		},
		{
			variation: 0,
			increase : true
		}
	]

	useEffect(() => {
		if(Users.data){
			if((Users.data?.countProfile[0] - Users.data?.countProfile[1]) >= 0){
				count[0].variation = Users.data.countProfile[0] - Users.data?.countProfile[1];
				count[0].increase = true;

			}else{
				count[0].variation = Users.data.countProfile[1] - Users.data?.countProfile[0];
				count[0].increase = false;
			}
		}

		if(Posts.data){
			if((Posts.data?.countPosting[0] - Posts.data?.countPosting[1]) >= 0){
				count[1].increase = true;
				count[1].variation = Posts.data.countPosting[0] - Posts.data?.countPosting[1];
			}else{
				count[1].increase = false;
				count[1].variation = Posts.data.countPosting[1] - Posts.data?.countPosting[0];
			}
		}

	}, []);


	return (
		<div className="flex gap-4">
      <DashboardStat backgroundColor='bg-sky-500' label='Total Users' icon={<IoPeople className="text-2xl text-white" />} 
				count= {Users.data?.countProfile[0]} increase={count[0].increase} variation={count[0].variation}/>
      <DashboardStat backgroundColor='bg-orange-600' label='Total Feeds' icon={<CgFeed className="text-2xl text-white" />} 
				count={Posts.data?.countPosting[0]} increase={count[1].increase} variation={count[1].variation}/>
      <DashboardStat backgroundColor='bg-green-400' label='Total Articles' icon={<GrArticle className="text-2xl text-white" />} 
				count={24} increase={true} variation={3}/>
		</div>
	)
}

export default DashboardStatsGrid;
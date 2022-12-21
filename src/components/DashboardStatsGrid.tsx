import React from 'react'
import {IoPeople, IoCart} from 'react-icons/io5'
import {CgFeed} from 'react-icons/cg';
import {GrArticle} from 'react-icons/gr';
import { DashboardStat } from './atoms/DashboardStat'

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
      <DashboardStat backgroundColor='bg-sky-500' label='Total Users' icon={<IoPeople className="text-2xl text-white" />} count= {32} increase={true} variation={12}/>
      <DashboardStat backgroundColor='bg-orange-600' label='Total Feeds' icon={<CgFeed className="text-2xl text-white" />} count={100} increase={true} variation={42}/>
      <DashboardStat backgroundColor='bg-green-400' label='Total Articles' icon={<GrArticle className="text-2xl text-white" />} count={24} increase={true} variation={3}/>
		</div>
	)
}
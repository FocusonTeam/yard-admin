import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { useCountPostAndCommentByAreaQuery } from '../../generated/graphql';


const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#42b0ff', '#FF8042', '#e42541', '#e42591']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent } : any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function AreaPieChart() {

	const activateByArea = useCountPostAndCommentByAreaQuery({fetchPolicy: 'no-cache'});

	const data = activateByArea.data?.countPostAndCommentByArea;
	
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 drop-shadow-md rounded-md flex flex-col">
			<strong className="text-gray-700 font-medium">지역별 활성화</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="posts"
						>
							{data?.map((item, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={item.region2depth}/>
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
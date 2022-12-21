import React from 'react';


interface StatsProps {
  icon?: any;
  increase?: boolean;
  label? : string;
  variation? : number;
  count? : number;
  backgroundColor? : string;
}


export const DashboardStat = ({
  icon = undefined,
  increase = true,
  count = 0,
  label,
  backgroundColor,
  variation = 0,
  ...props
}: StatsProps) => {
  return (
    <BoxWrapper>
				<div className={`${backgroundColor} rounded-full h-12 w-12 flex items-center justify-center`}>
          {icon}
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">{label}</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{count}</strong>
            {increase ? (
              <span className="text-sm text-green-500 pl-2">+{variation}</span>
            ) : (
              <span className="text-sm text-red-500 pl-2">-{variation}</span>
            )}
						
					</div>
				</div>
		</BoxWrapper>
  )
};

function BoxWrapper({ children } : any) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
};
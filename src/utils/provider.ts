export const enum State {
	INPROGRESS = '',
	DONE = '검토 중',
	UPLOADED = '배포 완료',
}

export const phoneSize = [
	{
		name:"",
		size: {},
		className: "",
		safeArea: ""
	},
	{
		name: "iPhone 11",
		size : {
			width : 375,
			height: 812
		},
		className: "w-[375px] h-[812px] rounded-3xl pt-[44px] pb-[34px] bg-white overflow-y-scroll",
		safeArea: "w-[375px] h-[812px] rounded-3xl pt-[44px] pb-[34px] bg-cover bg-center",
	},
	{
		name: "iPhone 12",
		size: {
			width: 390,
			height: 844
		},
		className: "w-[390px] h-[844px] rounded-3xl pt-[44px] pb-[34px] bg-white overflow-y-scroll",
		safeArea: "",
	},
	{
		name:"iPhone 14 Pro Max",
		size: {
			width:430,
			height:932
		},
		className: "w-[390px] h-[844px] rounded-3xl pt-[54px] pb-[34px] bg-white overflow-y-scroll",
		safeArea: "",
	},
	{
		name:"Galaxy S21",
		size : {
			width:384,
			height:854
		},
		className: "w-[384px] h-[854px] rounded-2xl pt-[18px] bg-white overflow-y-scroll",
		safeArea: "",
	},
	{
		name:"Galaxy Z Flip 3",
		size : {
			width:360,
			height:880
		},
		className: "w-[360px] h-[880px] rounded-2xl pt-[18px] bg-white overflow-y-scroll",
		safeArea: "",
	},
	{
		name:"Galaxy Z Fold",
		size : {
			width:768,
			height:1076
		},
		className: "w-[768px] h-[1076px] rounded-2xl pt-[18px] bg-white overflow-y-scroll",
		safeArea: "",
	}
]
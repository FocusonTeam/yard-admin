export function AvatarCell({ nickname, path } : any) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img className="h-10 w-10 rounded-full" src={path} alt="" />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{nickname}</div>
      </div>
    </div>
  )
}

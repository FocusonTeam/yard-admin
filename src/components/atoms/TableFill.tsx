export function TypeFill(type: string) {
    return (
        <> 
        {
            type === "POST" ? (
                <span className="px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm bg-green-100 text-green-700">
                    {type}
                </span>
            ) : (
                <span className="px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm bg-yellow-100 text-yellow-700">
                    {type}
                </span>
            )
        }
        </>
    );
}

export function ContentFill(content: string) {
    return (
        <div className="w-80 whitespace-normal">
            {content}
        </div>
    )
}
import { CLOUD_STORAGE_BASE_URL } from "../utils/constants";

export function useEncodeUri(uri: string){
    return (
        CLOUD_STORAGE_BASE_URL + uri + "?alt=media"
    )
}
import { usePageContent } from "./usePageContent"

export const useHeaderLogo = () => {
    const {data, error} = usePageContent()
    return data?.data?.pageContents?.logo
}
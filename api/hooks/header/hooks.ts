import { usePageContent } from "../home/hooks"

export const useHeaderLogo = () => {
    const {data, error} = usePageContent()
    return data?.data?.pageContents?.logo
}
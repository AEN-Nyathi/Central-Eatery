import { useEffect } from "react";

const useScrollIntoView = (scrollRef: React.MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [scrollRef]);
}
export default useScrollIntoView
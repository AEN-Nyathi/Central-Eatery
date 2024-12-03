import { useStaticData } from "@Backend/hooks/useStore";

function Loading() {
    const { isLoading } = useStaticData();
    return (
        <div>
            <h4>Loading</h4>
            <p>
                {isLoading.message}
            </p>
        </div>
    )
}

export default Loading
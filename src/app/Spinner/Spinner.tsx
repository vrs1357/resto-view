import { FallingLines } from "react-loader-spinner";

export default function Spinner() {
    try{
    return (
        <div className="Spinner">
            <FallingLines
                color="#073763"
                width="300"
                visible={true}
                aria-label="falling-circles-loading"
            />
        </div>
    );
    } catch {
        console.log("refreshing spinner... ");
        return (
            <div className="Spinner">
                <FallingLines
                    color="#073763"
                    width="300"
                    visible={true}
                    aria-label="falling-circles-loading"
                />
            </div>
        );
    }
};
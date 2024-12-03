import { useDynamicData } from "@Backend/hooks/useStore";
import handleCreditSubmit from "@Pages/Customer/hooks/handleCreditSubmit"
import { MdCancel, MdDone } from "react-icons/md"
import handleDebitSubmit from "../hooks/handleDebitSubmit";

interface FooterProps {
    type: "Debit" | "credit"
    selectedProduct?: productType | undefined,
    SelectedAmount?: number,
    Customer: CustomerType,
    CloseComponent: React.Dispatch<React.SetStateAction<false | "pay" | "credit">>;
}

const Footer: React.FC<FooterProps> = ({ selectedProduct, SelectedAmount, Customer, CloseComponent, type }) => {
    const { dispatch, isError } = useDynamicData();
    return (
        <div className="flex w-full absolute bottom-0 justify-between">
            <button
                onClick={() => CloseComponent(false)}
                className="bg-credit/50"
            >
                <MdCancel /> Cancel
            </button>
            {selectedProduct || SelectedAmount ? <button
                className={`bg-debit/50  ${isError.state ? "cursor-not-allowed" : ""}`}
                onClick={() => { type == "credit" ? handleCreditSubmit(selectedProduct, dispatch, Customer.ID, CloseComponent) : handleDebitSubmit(SelectedAmount, dispatch, Customer.ID, CloseComponent) }}
                disabled={isError.state ? true : false}
            >
                <MdDone /> Confirm
            </button> : null}
        </div>
    )
}

export default Footer
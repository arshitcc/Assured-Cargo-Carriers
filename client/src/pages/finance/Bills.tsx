import BillsTable from "@/components/finance/Bills/SearchBill/BillsTable";
import SearchBillHeader from "@/components/finance/Bills/SearchBill/SearchBillHeader";

function Bills() {
  return (
    <div>
      <div className="min-h-screen px-2 space-y-4">
        <SearchBillHeader />
        <BillsTable />
      </div>
    </div>
  );
}

export default Bills;

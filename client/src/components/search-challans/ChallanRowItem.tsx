import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { EditIcon, PrinterIcon, TruckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ChallanRowItem() {

  const navigate = useNavigate();
  return (
    <Table className="max-w-screen rounded-t-xl">
      <TableHeader>
        <TableRow className="bg-[#3279b7] hover:bg-[#3279b7]">
          <TableHead className="text-white font-semibold border border-t-0">Challan No</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">Challan Date</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">Branch</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">From Station</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">To Station</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">Chln Type</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">Vehicle No</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">Pkg</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">Act_wt</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">Chg_Wt</TableHead>
          <TableHead className="text-white font-semibold border border-t-0">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ].map((item) => (
          <TableRow key={item} className="hover:bg-zinc-200">
            <TableCell className="text-[#5589A8] border text-xs ">19768</TableCell>
            <TableCell className="border text-xs">21-Apr-2025</TableCell>
            <TableCell className="border text-xs">Pune</TableCell>
            <TableCell className="border text-xs">Mahalunge Ingale Khed Pune - 410501 [MH]</TableCell>
            <TableCell className="border text-xs">Additional Ambemath Ambamath Thane - 421506 [MH]</TableCell>
            <TableCell className="border text-xs">Main</TableCell>
            <TableCell className="border text-xs">MH14KA8409</TableCell>
            <TableCell className="border text-xs">1</TableCell>
            <TableCell className="border text-xs">800</TableCell>
            <TableCell className="border text-xs">3000</TableCell>
            <TableCell className="border space-x-4">
              <Button className="cursor-pointer bg-[#E09D70] hover:bg-[#E09D70]"><EditIcon/>Edit</Button>
              <Button className="cursor-pointer bg-[#53A54C] hover:bg-[#53A54C]"><PrinterIcon/>Print</Button>
              <Button className="cursor-pointer" onClick={() => navigate("/truck-arrival-report")}><TruckIcon/>TAR</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ChallanRowItem;

import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { EditIcon, PrinterIcon } from "lucide-react";

function BillsTable() {
  return (
    <Table className="max-w-screen rounded-t-xl">
      <TableHeader>
        <TableRow className="bg-[#3279b7] hover:bg-[#3279b7]">
          <TableHead className="text-white font-semibold border border-t-0">
            Bill Number
          </TableHead>
          <TableHead className="text-white font-semibold border border-t-0">
            Bill Date
          </TableHead>
          <TableHead className="text-white font-semibold border border-t-0">
            Branch
          </TableHead>
          <TableHead className="text-white font-semibold border border-t-0">
            Bill Type
          </TableHead>
          <TableHead className="text-white font-semibold border border-t-0">
            Bill Amount
          </TableHead>
          <TableHead className="text-white font-semibold border border-t-0">
            Party Name
          </TableHead>
          <TableHead className="text-white font-semibold border border-t-0">
            Submission Date
          </TableHead>
          <TableHead className="text-white font-semibold border border-t-0">
            Realization Date
          </TableHead>
          <TableHead className="text-white font-semibold border border-t-0">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <TableRow key={item} className="hover:bg-zinc-200">
            <TableCell className="text-[#5589A8] border">RB100616</TableCell>
            <TableCell className="border">28-Apr-2025</TableCell>
            <TableCell className="border">Pune</TableCell>
            <TableCell className="border">FRT</TableCell>
            <TableCell className="border">{Number(8500).toFixed(2)}</TableCell>
            <TableCell className="border">AVANI ENTERPRISES</TableCell>
            <TableCell className="border">28-Apr-2025</TableCell>
            <TableCell className="border"></TableCell>
            <TableCell className="border space-x-4">
              <Button className="cursor-pointer bg-[#E09D70] hover:bg-[#E09D70]">
                <EditIcon />
                Edit
              </Button>
              <Button className="cursor-pointer bg-[#53A54C] hover:bg-[#53A54C]">
                <PrinterIcon />
                Print
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default BillsTable;

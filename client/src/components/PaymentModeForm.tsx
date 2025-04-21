import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardHeader, CardContent } from "./ui/card";

export function PaymentModeForm() {
  const { control } = useFormContext();

  return (
    <div className="w-full md:w-1/3">
      <Card className=" p-0 gap-0">
        <CardHeader className="bg-red-400 text-white font-semibold rounded-t-xl py-2">
          Payment Mode{" "}
        </CardHeader>
        <CardContent className="bg-white py-2 px-4 rounded-b-xl overflow-auto space-y-4">
          <FormField
            control={control}
            name="paymentMode.mode"
            render={({ field }) => (
              <FormItem className="flex gap-4 my-4">
                <FormLabel className="font-semibold w-1/3">Mode (Pay)</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-2/3">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cash">Cash</SelectItem>
                      <SelectItem value="Cheque">Cheque</SelectItem>
                      <SelectItem value="BankTransfer">
                        Bank Transfer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          {[
            { name: "cashAmt", label: "Cash Amt" },
            { name: "chqAmt", label: "Cheque Amt" },
            { name: "chqNo", label: "Cheque Number" },
            { name: "chqDate", label: "Cheque Date" },
            { name: "chqBank", label: "Cheque Bank" },
            { name: "paidTo", label: "Paid To" },
            { name: "payeePAN", label: "Payee PAN",  placeholder: "PAN"  },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={control}
              name={`paymentMode.${name}`}
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <FormLabel className="font-semibold w-1/3">{label}</FormLabel>
                  <FormControl>
                    <Input
                      {...(name.includes("Amt") ? { type: "number" } : {})}
                      {...field}
                      placeholder={label}
                      className="w-2/3"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}

          <FormField
            control={control}
            name="paymentMode.remarks"
            render={({ field }) => (
              <FormItem className="col-span-full flex gap-4">
                <FormLabel className="font-semibold w-1/3 items-start">Remarks</FormLabel>
                <FormControl>
                  <Textarea placeholder="Remarks" className="w-2/3" rows={3} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}

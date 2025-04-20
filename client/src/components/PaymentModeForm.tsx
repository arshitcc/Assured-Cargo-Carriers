import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardHeader, CardFooter, CardContent } from "./ui/card";

export function PaymentModeForm() {
  const { control } = useFormContext();

  return (
    <div className="w-1/3">
      <Card className="bg-black">
        <CardHeader className="text-white font-semibold">Payment Mode </CardHeader>
        <CardContent className="bg-white">
          <FormField
            control={control}
            name="paymentMode.mode"
            render={({ field }) => (
              <FormItem className="flex gap-4 my-4">
                <FormLabel>Mode (Pay)</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cash">Cash</SelectItem>
                      <SelectItem value="Cheque">Cheque</SelectItem>
                      <SelectItem value="BankTransfer"> Bank Transfer </SelectItem>
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
            { name: "payeePAN", label: "Payee PAN" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={control}
              name={`paymentMode.${name}`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input
                      {...(name.includes("Amt") ? { type: "number" } : {})}
                      {...field}
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
              <FormItem className="col-span-full">
                <FormLabel>Remarks</FormLabel>
                <FormControl>
                  <Textarea rows={3} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Input } from "./ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export function LorryHirePaymentDetailsForm() {
  const { control } = useFormContext();

  return (
    <div className="w-1/3 min-h-[85vh] overflow-auto">
      <Card className="bg-black">
        <CardHeader className="text-white font-semibold">Lorry Hire Payment Details</CardHeader>
        <CardContent className="bg-white py-2">
          {[
            { name: "lhPaid", label: "LH Paid (+)" },
            { name: "dtnPaid", label: "DTN Paid (+)" },
            { name: "enRtExp", label: "EnRt Exp (+)" },
            { name: "mmChg", label: "MM Chg (+)" },
            { name: "miscExp", label: "Misc Exp (+)" },
            { name: "lhpmDed", label: "LHPM Ded (-)" },
            { name: "otherDed", label: "Other Ded (-)" },
            { name: "totalAmt", label: "Total Amt" },
            { name: "tdsDed", label: "TDS Ded (-)" },
            { name: "vcrAmount", label: "Vcr Amount" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={control}
              name={`lorryHirePayment.${name}`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

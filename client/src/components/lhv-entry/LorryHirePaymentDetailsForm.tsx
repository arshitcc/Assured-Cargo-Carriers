import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function LorryHirePaymentDetailsForm() {
  const { control } = useFormContext();

  return (
    <div className="w-full md:w-1/3">
      <Card className="p-0 gap-0">
        <CardHeader className="font-semibold bg-[#3279b7] text-white rounded-t-xl py-2">
          Lorry Hire Payment Details
        </CardHeader>
        <CardContent className="py-2 px-4 rounded-b-xl overflow-auto space-y-4">
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
                <FormItem className="flex flex-col md:flex-row gap-2">
                  <FormLabel className="font-semibold w-full md:w-1/3">
                    {label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={`w-full md:w-2/3 ${
                        name === "totalAmt" || name === "vcrAmount"
                          ? "bg-gray-300 font-bold"
                          : ""
                      }`}
                      type="number"
                      {...field}
                      placeholder="0"
                      readOnly={name === "totalAmt" || name === "vcrAmount"}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

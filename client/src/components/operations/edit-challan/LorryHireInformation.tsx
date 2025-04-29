import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

function LorryHireInformation() {
  const { control, setValue } = useFormContext();

  const lorryHire = useWatch({ control, name: "lorryHireInfo.lorryHire" });
  const extraHeightCharges = useWatch({
    control,
    name: "lorryHireInfo.extraHeightCharges",
  });
  const extraLengthCharges = useWatch({
    control,
    name: "lorryHireInfo.extraLengthCharges",
  });
  const detentionCharges = useWatch({
    control,
    name: "lorryHireInfo.detentionCharges",
  });
  const extraCharges = useWatch({
    control,
    name: "lorryHireInfo.extraCharges",
  });
  const advanceLorryHire = useWatch({
    control,
    name: "lorryHireInfo.advanceLorryHire",
  });

  useEffect(() => {
    const finalAmount =
      (Number(lorryHire) || 0) +
      (Number(extraHeightCharges) || 0) +
      (Number(extraLengthCharges) || 0) +
      (Number(detentionCharges) || 0) +
      (Number(extraCharges) || 0);
    setValue("lorryHireInfo.totalLorryHire", finalAmount);
    setValue(
      "lorryHireInfo.balanceLorryHire",
      finalAmount - Number(advanceLorryHire)
    );
  }, [
    lorryHire,
    extraLengthCharges,
    extraHeightCharges,
    detentionCharges,
    extraCharges,
    advanceLorryHire,
    extraCharges,
  ]);

  return (
    <Card className="w-full col-span-3 md:col-span-1 p-0 gap-0 rounded-b-sm">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Lorry Hire Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          control={control}
          name="lorryHireInfo.chargedWeight"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Charged Weight
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.lorryHire"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Lorry Hire
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.extraHeightCharges"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Extra Height Charges
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.extraLengthCharges"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Extra Length Charges
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.detentionCharges"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Detention Charges
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.extraCharges"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Extra Charges
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.totalLorryHire"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Total Lorry Hire
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3 disabled:bg-gray-300"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lorryHireInfo.advanceLorryHire"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Advance Lorry Hire
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lorryHireInfo.balanceLorryHire"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Balance Lorry Hire
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3 disabled:bg-gray-300"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lorryHireInfo.remarks"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Remarks
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full md:w-2/3"
                  placeholder="Information about Extra Lorry Hire (if any)"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}

export default LorryHireInformation;

import { Card, CardContent, CardHeader } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function LorryHireInformation() {
  const { control } = useFormContext();

  return (
    <Card className="w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="p-3 bg-[#3279b7] text-white rounded-t-sm">
        Lorry Hire Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          control={control}
          name="lorryHireInfo.chargedWeight"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Charged Weight
              </FormLabel>
              <FormControl>
                <Input className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.lorryHire"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Lorry Hire</FormLabel>
              <FormControl>
                <Input className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.extraHeightCharges"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Extra Height Charges
              </FormLabel>
              <FormControl>
                <Input className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.extraLengthCharges"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Extra Length Charges
              </FormLabel>
              <FormControl>
                <Textarea className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.detentionCharges"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Detention Charges
              </FormLabel>
              <FormControl>
                <Input className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.extraCharges"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Extra Charges
              </FormLabel>
              <FormControl>
                <Input className="w-2/3" disabled {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lorryHireInfo.totalLorryHire"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Total Lorry Hire
              </FormLabel>
              <FormControl>
                <Input className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lorryHireInfo.advanceLorryHire"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Advance Lorry Hire
              </FormLabel>
              <FormControl>
                <Input className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lorryHireInfo.balanceLorryHire"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Balance Lorry Hire
              </FormLabel>
              <FormControl>
                <Input className="w-2/3" disabled {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lorryHireInfo.remarks"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Remarks
              </FormLabel>
              <FormControl>
                <Textarea className="w-2/3" placeholder="Information about Extra Lorry Hire (if any)" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}

export default LorryHireInformation;

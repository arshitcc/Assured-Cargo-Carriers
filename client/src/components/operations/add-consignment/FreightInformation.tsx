import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

function FreightInformation() {
  const { control, setValue } = useFormContext();

  const totalFreight = useWatch({ control, name: "freightInfo.totalFreight" });
  const advance = useWatch({ control, name: "freightInfo.advance" });

  useEffect(() => {
    const sum = (Number(totalFreight) || 0) - (Number(advance) || 0);
    setValue("freightInfo.balance", sum);
  }, [totalFreight, advance]);

  return (
    <Card className="col-span-3 md:col-span-1 w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Freight Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          control={control}
          name="freightInfo.totalFreight"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Total Freight
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter Total Freight"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="freightInfo.advance"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Advance
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter Advance Amount"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="freightInfo.balance"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Balance
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
      </CardContent>
    </Card>
  );
}

export default FreightInformation;

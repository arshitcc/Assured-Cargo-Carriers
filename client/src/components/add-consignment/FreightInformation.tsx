import { Card, CardContent, CardHeader } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

function FreightInformation() {

  const { control } = useFormContext();

  return (
    <Card className="col-span-3 md:col-span-1 w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="p-3 bg-[#3279b7] text-white rounded-t-sm">
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
              <FormLabel className="font-semibold w-full md:w-1/3">Advance</FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" defaultValue={0} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="freightInfo.balance"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">Balance</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3 disabled:bg-gray-300"
                  defaultValue={0}
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

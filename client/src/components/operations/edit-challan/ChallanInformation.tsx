import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

function ChallanInformation() {
  const { control } = useFormContext();

  return (
    <Card className="w-full col-span-3 md:col-span-1 p-0 gap-0 rounded-b-sm">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Challan Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          control={control}
          name="challanInfo.fromStation"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                From Station
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="challanInfo.toStation"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                To Station
              </FormLabel>
              <FormControl>
                <Input className="w-full md:w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="challanInfo.numberOfConsignment"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Number of Consignment
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3 disabled:bg-gray-300"
                  disabled
                  defaultValue={0}
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

export default ChallanInformation;

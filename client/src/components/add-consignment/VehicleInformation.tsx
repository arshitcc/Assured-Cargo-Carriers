import { Card, CardContent, CardHeader } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

function VehicleInformation() {
  const { control } = useFormContext();
  return (
    <Card className="w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="p-3 bg-[#3279b7] text-white rounded-t-sm">
        Vehichle Information
      </CardHeader>
      <CardContent className="space-y-2 p-4" >
        <FormField
          control={control}
          name="vehicleInfo.vehicleNumber"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Vehicle Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-2/3"
                  placeholder="Enter Vehicle Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="vehicleInfo.from"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">From</FormLabel>
              <FormControl>
                <Input className="w-2/3" placeholder="Mumbai, Maharashtra, India" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="vehicleInfo.to"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">To</FormLabel>
              <FormControl>
                <Input className="w-2/3" placeholder="Varanasi, Uttar Pradesh, India" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}

export default VehicleInformation;

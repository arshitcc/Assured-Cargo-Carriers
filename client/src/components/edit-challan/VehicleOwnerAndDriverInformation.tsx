import { Card, CardContent, CardHeader } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function VehicleOwnerAndDriverInformation() {
  const { control } = useFormContext();
  return (
    <Card className="w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="p-3 bg-[#3279b7] text-white rounded-t-sm">
        Vehichle Owner and Driver Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          control={control}
          name="vehicleOwnerDriverInfo.ownerName"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Owner Name</FormLabel>
              <FormControl>
                <Input className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleOwnerDriverInfo.ownerMobile"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Owner Mobile
              </FormLabel>
              <FormControl>
                <Input
                  className="w-2/3"
                  placeholder="Owner Mobile"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleOwnerDriverInfo.ownerPan"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Owner PAN</FormLabel>
              <FormControl>
                <Input className="w-2/3" placeholder="Owner PAN" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleOwnerDriverInfo.ownerAddress"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Owner Address
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-2/3"
                  placeholder="Owner Address"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleOwnerDriverInfo.driverName"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Driver Name</FormLabel>
              <FormControl>
                <Input className="w-2/3" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleOwnerDriverInfo.driverMobile"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Driver Mobile
              </FormLabel>
              <FormControl>
                <Input
                  className="w-2/3"
                  placeholder="Driver Mobile"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleOwnerDriverInfo.driverLicenseNumber"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Driver License Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-2/3"
                  placeholder="Driver License Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleOwnerDriverInfo.driverAddress"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Driver Company
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-2/3"
                  placeholder="Driver Address"
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

export default VehicleOwnerAndDriverInformation;

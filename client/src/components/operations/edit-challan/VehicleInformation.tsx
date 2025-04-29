import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function VehicleInformation() {
  const { control } = useFormContext();
  return (
    <Card className="w-full col-span-3 md:col-span-1 p-0 gap-0 rounded-b-sm">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Vehichle Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          name="vehicleInfo.vehicleType"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="w-full md:w-1/3 font-semibold">
                Vehicle Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue="Market">
                <FormControl>
                  <SelectTrigger className="w-full md:w-2/3">
                    <SelectValue placeholder="Select Vehicle Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Market" className="hover:bg-gray-100">
                    Market
                  </SelectItem>
                  <SelectItem
                    value="Company Vehicle"
                    className="hover:bg-gray-100"
                  >
                    Company Vehicle
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleInfo.vehicleRegistrationNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Vehicle Registration Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Vehicle Registration Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleInfo.engineNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Engine Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Engine Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleInfo.chasisNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Chasis Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Chasis Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="vehicleInfo.make"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Make
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Make"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="vehicleInfo.capacity"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Capacity
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Capacity"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="vehicleInfo.permitNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Permit Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Permit Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="vehicleInfo.insuranceNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Insurance Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Insurance Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="vehicleInfo.insuranceCompany"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Insurance Company
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Insurance Company"
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

export default VehicleInformation;

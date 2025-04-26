import { Card, CardContent, CardHeader } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function ChallanInformation() {
  const { control } = useFormContext();

  return (
    <Card className="w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="p-3 bg-[#3279b7] text-white rounded-t-sm">
        Challan Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          control={control}
          name="challanInfo.from"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">From</FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="From"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.to"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">To</FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="To"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.vehicleRegistrationNo"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Vehicle Registration No
              </FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Vehicle Registration No"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.make"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Make</FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Make"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.type"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Type</FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Type"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.ownerName"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Owner Name</FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Owner Name"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.driverName"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Driver Name</FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Driver Name"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.brokerName"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">Broker Name</FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Broker Name"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.totalLorryHire"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Total Lorry Hire
              </FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Total Lorry Hire"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.partLorryHire"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Part Lorry Hire
              </FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Part Lorry Hire"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.balanceLorryHire"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Balance Lorry Hire
              </FormLabel>
              <FormControl>
                <Input
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Balance Lorry Hire"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="challanInfo.remarks"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormLabel className="font-semibold w-1/3">
                Loading Remarks
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-2/3 disabled:bg-gray-300"
                  placeholder="Loading Remarks"
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

export default ChallanInformation;

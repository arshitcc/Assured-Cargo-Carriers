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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function InsuranceInformation() {
  const { control } = useFormContext();
  return (
    <Card className="col-span-3 md:col-span-2 w-full p-0 gap-0 rounded-b-sm ">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Insurance Information
      </CardHeader>
      <CardContent className="space-y-2 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="insuranceInfo.insuranceNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Insurance Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter Insurance Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="insuranceInfo.insuranceDate"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Insurance Date
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter Insurance Date"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="insuranceInfo.insuranceAmount"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Insurance Amount
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter Insurance Amount"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="insuranceInfo.insuranceCompanyName"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Insurance Company Name
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter Insurance Company Name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="insuranceInfo.risk"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Risk
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue="Owner Risk">
                <FormControl>
                  <SelectTrigger className="w-full md:w-2/3">
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      value="Owner Risk"
                      className="hover:bg-gray-100"
                    >
                      Owner Risk
                    </SelectItem>
                    <SelectItem
                      value="Company Risk"
                      className="hover:bg-gray-100"
                    >
                      Company Risk
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="insuranceInfo.wayBillOrPermitNumber"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                WayBill / Permit Number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter WayBill / Permit Number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="insuranceInfo.wayBillOrPermitExpiryDate"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                WayBill / Permit Expiry Date
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter WayBill / Permit Expiry Date"
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

export default InsuranceInformation;

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function TransporterInformation() {
  const { control } = useFormContext();
  return (
    <Card className="col-span-3 md:col-span-1 w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Transporter Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          control={control}
          name="transporterInfo.transporterName"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Transporter Name
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3"
                  placeholder="Enter Transporter Name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="transporterInfo.transporterCode"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Transporter Code
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3 disabled:bg-gray-300 font-semibold"
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="transporterInfo.transporterAddress"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2 items-center">
              <FormLabel className="font-semibold w-full md:w-1/3 self-start mt-3">
                Transporter Address
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full md:w-2/3"
                  {...field}
                  placeholder="Enter Transporter Address"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}

export default TransporterInformation;

import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Input } from "../ui/input";

function TruckArrivalReportHeader() {
  const { control } = useFormContext();

  return (
    <Card className="w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Truck Arrival Report
      </CardHeader>
      <CardContent className="p-3 flex flex-col md:flex-row gap-2 justify-around">
        <FormField
          name="branch"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold">Branch</FormLabel>
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
          name="challanNo"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold">Challan No</FormLabel>
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
          name="challanDate"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold">Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      disabled
                      className={cn(
                        "pl-3 text-left font-normal disabled:bg-gray-300",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-full md:w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          name="type"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2 w-full md:w-1/8">
              <FormLabel className="font-semibold">Type</FormLabel>
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
          name="scheduledDate"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold">SchDate</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-2/3 disabled:bg-gray-300 font-semibold"
                  defaultValue={field.value ? format(field.value, "PPP") : ""}
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="tarBranch"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold">Branch</FormLabel>
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
      </CardContent>
    </Card>
  );
}

export default TruckArrivalReportHeader;

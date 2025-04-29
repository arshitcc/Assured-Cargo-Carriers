import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

function Remarks() {
  const { control } = useFormContext();
  return (
    <Card className="col-span-3 md:col-span-1 w-full p-0 gap-0 rounded-b-sm h-full md:h-1/2">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Additional Information
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <FormField
          control={control}
          name="additionalInfo.remarks"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2 items-center">
              <FormLabel className="font-semibold w-full md:w-1/3 self-start mt-3">
                Remarks
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full md:w-2/3"
                  {...field}
                  placeholder="Enter Remarks"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}

export default Remarks;

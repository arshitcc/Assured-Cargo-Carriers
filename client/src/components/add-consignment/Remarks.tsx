import { Card, CardContent, CardHeader } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";

function Remarks() {
  const { control } = useFormContext();
  return (
    <Card className="w-full p-0 gap-0 rounded-b-sm ">
      <CardHeader className="p-3 bg-[#3279b7] text-white rounded-t-sm"> Additional Information </CardHeader>
      <CardContent className="space-y-2 p-4">
      <FormField
          control={control}
          name="additionalInfo.remarks"
          render={({ field }) => (
            <FormItem className="flex gap-2 items-center">
              <FormLabel className="font-semibold w-1/3 self-start mt-3">
                Remarks
              </FormLabel>
              <FormControl>
                <Textarea className="w-2/3" {...field} placeholder="Enter Remarks" />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}

export default Remarks;

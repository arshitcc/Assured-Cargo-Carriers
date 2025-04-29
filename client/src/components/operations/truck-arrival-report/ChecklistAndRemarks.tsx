import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

function ChecklistAndRemarks() {
  const { control } = useFormContext();
  return (
    <Card className="col-span-1 row-span-1 w-full p-0 gap-0 rounded-b-sm">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Checklist and Loading Remarks
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <FormField
          control={control}
          name="checklistAndRemarks.isTotalPaymentRecieved"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs md:text-sm">
                  Is Total Payment Recieved ?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="checklistAndRemarks.isPOD_with_ClearSignAndStamp"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs md:text-sm">
                  Is POD is recieved with clear sign and stamp ?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="checklistAndRemarks.isShortExcessDamageLeakageVerified"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs md:text-sm">
                  Is Short/Excess/Damage/Leakage verified ?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="checklistAndRemarks.isVehicleDetainedByCustomer"
          render={({ field }) => (
            <FormItem className="flex gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs md:text-sm">
                  Is Vehicle detained by Customer ?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="checklistAndRemarks.loadingRemarks"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                Loading Remarks
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full md:w-2/3"
                  placeholder="Loading Remarks"
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

export default ChecklistAndRemarks;

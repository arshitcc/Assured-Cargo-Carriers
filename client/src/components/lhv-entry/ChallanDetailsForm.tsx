import { FormField, FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent, CardHeader } from "../ui/card";

export function ChallanDetailsForm() {
  const { control } = useFormContext();

  return (
    <div className="w-full md:w-1/3">
      <Card className="max-h-[80vh] p-0 gap-0">
        <CardHeader className="bg-[#3279b7] text-white font-semibold rounded-t-xl py-2">
          Challan Details
        </CardHeader>
        <CardContent className="py-2 px-4 max-h-[60vh] overflow-auto space-y-4">
          <FormField
            control={control}
            name="challanDetails.challanNo"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormLabel className="font-semibold w-1/3">
                  Challan No
                </FormLabel>
                <FormControl>
                  <Input className="w-2/3" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.date"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormLabel className="font-semibold w-1/3">Date</FormLabel>
                <FormControl>
                  <Input className="w-2/3" type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.from"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormLabel className="font-semibold w-1/3">From</FormLabel>
                <FormControl>
                  <Input className="w-2/3" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.to"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormLabel className="font-semibold w-1/3">To</FormLabel>
                <FormControl>
                  <Input className="w-2/3" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.branch"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormLabel className="font-semibold w-1/3">Branch</FormLabel>
                <FormControl>
                  <Input className="w-2/3" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.challanType"
            render={({ field }) => (
              <FormItem className="flex gap-4 my-4">
                <FormLabel className="font-semibold w-1/3">
                  Challan Type
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-2/3">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Main">Main</SelectItem>
                      <SelectItem value="Part">Part</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          {/** Numeric weights and charges **/}
          {[
            { name: "acWt", label: "AC Weight" },
            { name: "chWt", label: "CH Weight" },
            { name: "lorryHire", label: "Lorry Hire" },
            { name: "part", label: "Part Pay" },
            { name: "balance", label: "Balance" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={control}
              name={`challanDetails.${name}`}
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <FormLabel className="font-semibold w-1/3">{label}</FormLabel>
                  <FormControl>
                    <Input className="w-2/3" type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}

          {/** Vehicle and party info **/}
          {[
            { name: "vehNo", label: "Vehicle No" },
            { name: "make", label: "Make" },
            { name: "ownerName", label: "Owner Name" },
            { name: "ownerPAN", label: "Owner PAN" },
            { name: "brokerName", label: "Broker Name" },
            { name: "brokerPAN", label: "Broker PAN" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={control}
              name={`challanDetails.${name}`}
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <FormLabel className="font-semibold w-1/3">{label}</FormLabel>
                  <FormControl>
                    <Input className="w-2/3" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

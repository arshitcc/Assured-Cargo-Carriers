import { FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Input } from "./ui/input";
import { useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader } from "./ui/card";

export function ChallanDetailsForm() {
  const { control } = useFormContext();

  return (
    <div className="w-1/3 max-h-[80vh] overflow-auto">
      <Card className="bg-black">
        <CardHeader className="text-white text-xl font-semibold">Challan Details</CardHeader>
        <CardContent className="bg-white p-2">
          <FormField
            control={control}
            name="challanDetails.challanNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Challan No</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.from"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.to"
            render={({ field }) => (
              <FormItem>
                <FormLabel>To</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.branch"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Branch</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="challanDetails.challanType"
            render={({ field }) => (
              <FormItem className="flex gap-4 my-4">
                <FormLabel>Challan Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
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
            { name: "part", label: "Part" },
            { name: "balance", label: "Balance" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={control}
              name={`challanDetails.${name}`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
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
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input {...field} />
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

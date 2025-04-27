import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader } from "../ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

function AddConsignmentHeader() {
  const { control } = useFormContext();

  return (
    <Card className="p-0 gap-0 rounded-b-sm">
      <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
        Add Consignment
      </CardHeader>
      <CardContent className="p-3 flex flex-col md:flex-row gap-2 justify-around">
        <FormField
          name="branch"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold w-full md:w-1/3">
                BrCd
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue="Pune">
                <FormControl>
                  <SelectTrigger className="w-full md:w-2/3">
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Pune" className="hover:bg-gray-100">
                    Pune
                  </SelectItem>
                  <SelectItem value="Surat" className="hover:bg-gray-100">
                    Surat
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          name="consignmentNo"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold">CnNo</FormLabel>
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
          name="consignmentDate"
          control={control}
          render={({ field }) => {
            const [open, setOpen] = useState(false);
            return (
              <FormItem className="flex flex-col md:flex-row gap-2">
                <FormLabel className="font-semibold">CnDate</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                        onClick={() => setOpen((prev) => !prev)}
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
                  <PopoverContent
                    className="w-full md:w-auto p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        setOpen(false);
                      }}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            );
          }}
        />
        <FormField
          name="departureBranch"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row gap-2">
              <FormLabel className="font-semibold">DepBr</FormLabel>
              <Select onValueChange={field.onChange} defaultValue="Pune">
                <FormControl>
                  <SelectTrigger className="w-full md:w-2/3">
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Pune" className="hover:bg-gray-100">
                    Pune
                  </SelectItem>
                  <SelectItem value="Surat" className="hover:bg-gray-100">
                    Surat
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          name="scheduleDeliveryDate"
          control={control}
          render={({ field }) => {
            const [open, setOpen] = useState(false);
            return (
              <FormItem className="flex flex-col md:flex-row gap-2">
                <FormLabel className="font-semibold">SchDel</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                        onClick={() => setOpen((prev) => !prev)}
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
                  <PopoverContent
                    className="w-full md:w-auto p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        setOpen(false);
                      }}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            );
          }}
        />
      </CardContent>
    </Card>
  );
}

export default AddConsignmentHeader;

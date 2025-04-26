import { Card, CardContent, CardHeader } from "../ui/card";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
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
import { CalendarIcon, Loader, SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchChallanSchema = z.object({
  challanNoVehicleNo: z.string().optional(),
  branch: z.string().optional(),
  fromDate: z.date().optional(),
  toDate: z.date().optional(),
});

type SearchChallanForm = z.infer<typeof searchChallanSchema>;

function SearchChallanHeader() {
  const [searching, setSearching] = useState(false);

  const searchChallanForm = useForm<SearchChallanForm>({
    resolver: zodResolver(searchChallanSchema),
    defaultValues: {
      challanNoVehicleNo: "",
      branch: "",
      fromDate: new Date(),
      toDate: new Date(),
    },
  });

  const handleSearchChallan = async (data: SearchChallanForm) => {
    setSearching(true);
    try {
      console.log("first");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log(data);
      console.log("done");
    } catch (error) {
      console.log(error);
    } finally {
      setSearching(false);
    }
  };

  return (
    <Form {...searchChallanForm}>
      <form
        className="space-y-4"
        onSubmit={searchChallanForm.handleSubmit(handleSearchChallan)}
      >
        <Card className="p-0 gap-0 rounded-b-sm">
          <CardHeader className="p-3 bg-[#3279b7] text-white rounded-t-sm">
            Search Challan
          </CardHeader>
          <CardContent className="mx-auto flex gap-4 py-4">
            <FormField
              name="challanNoVehicleNo"
              control={searchChallanForm.control}
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <FormControl>
                    <Input
                      className="disabled:bg-gray-300 font-semibold placeholder:md:text-sm"
                      placeholder="Enter Challan No / Vehicle No"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="branch"
              control={searchChallanForm.control}
              render={({ field }) => (
                <FormItem className="flex gap-2 ">
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="All Branches" />
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
              name="fromDate"
              control={searchChallanForm.control}
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Enter From Date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date > new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              name="toDate"
              control={searchChallanForm.control}
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Enter To Date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={searching}
              className="cursor-pointer bg-[#5FA6C4] hover:bg-[#5FA6C4]"
            >
              {searching ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <SearchIcon className="mr-2 h-4 w-4" />
              )}
              Search
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}

export default SearchChallanHeader;

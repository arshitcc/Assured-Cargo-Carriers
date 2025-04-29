import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SearchBillForm,
  searchBillSFormSchema,
} from "@/schemas/finances/search-bill.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SearchBillHeader() {

  const [searching, setSearching] = useState(false);

  const searchBillForm = useForm<SearchBillForm>({
    resolver: zodResolver(searchBillSFormSchema),
    defaultValues: {
      billNumber: "",
    },
  });

  const handleSearchBill = async (data: SearchBillForm) => {
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
    <Form {...searchBillForm}>
      <form
        className="space-y-4"
        onSubmit={searchBillForm.handleSubmit(handleSearchBill)}
      >
        <Card className="p-0 gap-0 rounded-b-sm">
          <CardHeader className="font-semibold p-3 bg-[#3279b7] text-white rounded-t-sm">
            Search Bill
          </CardHeader>
          <CardContent className="p-3 mx-auto flex flex-col sm:flex-row gap-4">
            <FormField
              name="billNumber"
              control={searchBillForm.control}
              render={({ field }) => (
                <FormItem className="flex flex-col md:flex-row gap-2">
                  <FormControl>
                    <Input
                      className="disabled:bg-gray-300 font-semibold placeholder:md:text-sm"
                      placeholder="Enter Bill Number"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={searching}
              className="cursor-pointer bg-[#5FA6C4] hover:bg-[#5FA6C4]"
            >
              {searching ? (
                <LoaderIcon className="mr-1 h-4 w-4 animate-spin" />
              ) : (
                <SearchIcon className="mr-1 h-4 w-4" />
              )}
              Search
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}

export default SearchBillHeader;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { voucherEntrySchema, VoucherEntry } from "../../schemas/forms";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl } from "../ui/form";
import { Button } from "../ui/button";
import { ChallanDetailsForm } from "./ChallanDetailsForm";
import { LorryHirePaymentDetailsForm } from "./LorryHirePaymentDetailsForm";
import { PaymentModeForm } from "./PaymentModeForm";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function LorryHireVoucherEntryPage() {
  const form = useForm<VoucherEntry>({
    resolver: zodResolver(voucherEntrySchema),
    defaultValues: {
      branch: "",
      voucherNo: "",
      date: new Date(),
      type: "",
      cbsDate: new Date(),
      challanDetails: {
        /* empty defaults */
      },
      lorryHirePayment: {
        /* */
      },
      paymentMode: {
        mode: undefined,
        cashAmt: 0,
        chqAmt: 0,
        chqNo: "",
        chqDate: "",
        chqBank: "",
        paidTo: "",
        payeePAN: "",
        remarks: "",
      },
    },
  });

  function onSubmit(data: VoucherEntry) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="p-0 gap-0">
          <CardHeader className="p-0">
            <CardTitle className="bg-[#3279b7] text-white text-2xl p-4 rounded-t-xl">
              Lorry Hire Voucher Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-2 bg-white rounded-3xl">
            <div className="flex flex-wrap gap-4 justify-between py-4 px-2">
              <FormField
                name="branch"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex gap-2">
                    <FormLabel className="font-semibold">Branch</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-2/3">
                          <SelectValue placeholder="Select Branch" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem
                            value="Pune"
                            className="hover:bg-gray-100"
                          >
                            Pune
                          </SelectItem>
                          <SelectItem
                            value="Surat"
                            className="hover:bg-gray-100"
                          >
                            Surat
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name="voucherNo"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex gap-2">
                    <FormLabel className="font-semibold">Voucher No.</FormLabel>
                    <Select {...field} disabled>
                      <SelectTrigger className="w-2/3">
                        <SelectValue placeholder="Select Branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pune" className="hover:bg-gray-100">
                          Auto Generate
                        </SelectItem>
                        <SelectItem value="Surat" className="hover:bg-gray-100">
                          Manual
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name="cbsDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex gap-2">
                    <FormLabel className="font-semibold">Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
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
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                name="type"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex gap-2">
                    <FormLabel className="font-semibold">Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-2/3">
                          <SelectValue placeholder="Select Payment Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            value="Part"
                            className="hover:bg-gray-100"
                          >
                            Part
                          </SelectItem>
                          <SelectItem
                            value="Full"
                            className="hover:bg-gray-100"
                          >
                            Full
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="date"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex gap-2">
                    <FormLabel className="font-semibold">CBS Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
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
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-around gap-4">
              <ChallanDetailsForm />
              <LorryHirePaymentDetailsForm />
              <PaymentModeForm />
            </div>
            <Button className="max-w-xl mx-auto" type="submit">
              Save
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { voucherEntrySchema, VoucherEntry } from "../schemas/forms";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Select, SelectItem } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import { ChallanDetailsForm } from "../components/ChallanDetailsForm";
import { LorryHirePaymentDetailsForm } from "../components/LorryHirePaymentDetailsForm";
import { PaymentModeForm } from "../components/PaymentModeForm";
import { SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function LorryHireVoucherEntryPage() {
  const form = useForm<VoucherEntry>({
    resolver: zodResolver(voucherEntrySchema),
    defaultValues: {
      branch: "",
      voucherNo: "",
      date: new Date().toISOString().split("T")[0],
      type: "Part",
      cbsDate: "",
      challanDetails: {
        /* empty defaults */
      },
      lorryHirePayment: {
        /* */
      },
      paymentMode: {
        mode: "Select",
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
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Lorry Hire Voucher Entry</CardTitle>
          </CardHeader>
          <CardContent className={`max-h-[calc(100vh-150px)] flex flex-col gap-4`}>
            <div className="flex flex-wrap gap-4 justify-between">
              <FormField
                name="branch"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex gap-2">
                    <FormLabel>Branch</FormLabel>
                    <Select {...field}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Branch" />
                      </SelectTrigger>
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
                name="voucherNo"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex gap-2">
                    <FormLabel>Voucher No.</FormLabel>
                    <Select {...field} disabled>
                      <SelectTrigger className="w-[180px]">
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
                name="date"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex gap-2">
                    <FormLabel>Date</FormLabel>
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
                          selected={date}
                          onSelect={setDate}
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
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Branch" />
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
                    <FormLabel>Date</FormLabel>
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
                          selected={date}
                          onSelect={setDate}
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

            <div className="flex justify-around gap-4">
              <ChallanDetailsForm />
              <LorryHirePaymentDetailsForm />
              <PaymentModeForm />
            </div>
            <Button type="submit">Save</Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function PaymentModeForm() {
  const { control } = useFormContext();

  return (
    <div className="w-full md:w-1/3">
      <Card className=" p-0 gap-0">
        <CardHeader className="font-semibold bg-[#3279b7] text-white rounded-t-xl py-2">
          Payment Mode
        </CardHeader>
        <CardContent className="bg-white py-2 px-4 rounded-b-xl overflow-auto space-y-4">
          <FormField
            control={control}
            name="paymentMode.mode"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row gap-4 my-4">
                <FormLabel className="font-semibold w-full md:w-1/3">
                  Mode (Pay)
                </FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full md:w-2/3">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asset Purchase">
                        Asset Purchase
                      </SelectItem>
                      <SelectItem value="Bank Charges">Bank Charges</SelectItem>
                      <SelectItem value="Bank Deposit">Bank Deposit</SelectItem>
                      <SelectItem value="Bank Interest Recieved">
                        Bank Interest Recieved
                      </SelectItem>
                      <SelectItem value="Bank Loan">Bank Loan</SelectItem>
                      <SelectItem value="Bank Loan Installment">
                        Bank Loan Installment
                      </SelectItem>
                      <SelectItem value="Bank Withdrawl">
                        Bank Withdrawl
                      </SelectItem>
                      <SelectItem value="Business Promotion Expenses">
                        Business Promotion Expenses
                      </SelectItem>
                      <SelectItem value="CBS Difference">
                        CBS Difference
                      </SelectItem>
                      <SelectItem value="Consultation Charge">
                        Consultation Charge
                      </SelectItem>
                      <SelectItem value="Conveyance Expense">
                        Conveyance Expense
                      </SelectItem>
                      <SelectItem value="Credit Card Installment">
                        Credit Card Installment
                      </SelectItem>
                      <SelectItem value="Credit Card Loan">
                        Credit Card Loan
                      </SelectItem>
                      <SelectItem value="Direct Transfer">
                        Direct Transfer
                      </SelectItem>
                      <SelectItem value="Donation">Donation</SelectItem>
                      <SelectItem value="Electricity Bill">
                        Electricity Bill
                      </SelectItem>
                      <SelectItem value="Fleet Cash Card Recharge">
                        Fleet Cash Card Recharge
                      </SelectItem>
                      <SelectItem value="Fleet Maintainance">
                        Fleet Maintainance
                      </SelectItem>
                      <SelectItem value="Fleet Petrol Card Recharge">
                        Fleet Petrol Card Recharge
                      </SelectItem>
                      <SelectItem value="Fleet RF Card(Toll) Recharge">
                        Fleet RF Card(Toll) Recharge
                      </SelectItem>
                      <SelectItem value="Fleet Tripsheet">
                        Fleet Tripsheet
                      </SelectItem>
                      <SelectItem value="Fuel Pump On Account">
                        Fuel Pump On Account
                      </SelectItem>
                      <SelectItem value="Incidental">Incidental</SelectItem>
                      <SelectItem value="Inter Branch Transaction">
                        Inter Branch Transaction
                      </SelectItem>
                      <SelectItem value="Lorry Hire">Lorry Hire</SelectItem>
                      <SelectItem value="Medical Expenses">
                        Medical Expenses
                      </SelectItem>
                      <SelectItem value="Misc Collection">
                        Misc Collection
                      </SelectItem>
                      <SelectItem value="Misc Expense">Misc Expense</SelectItem>
                      <SelectItem value="Office Equipment and Maintainance">
                        Office Equipment and Maintainance
                      </SelectItem>
                      <SelectItem value="Office Expense">
                        Office Expense
                      </SelectItem>
                      <SelectItem value="Office Vehicle Fuel Expense">
                        Office Vehicle Fuel Expense
                      </SelectItem>
                      <SelectItem value="Office Vehicle Loan Installment">
                        Office Vehicle Loan Installment
                      </SelectItem>
                      <SelectItem value="Office Vehicle Repair">
                        Office Vehicle Repair
                      </SelectItem>
                      <SelectItem value="Party On Account">
                        Party On Account
                      </SelectItem>
                      <SelectItem value="Postal And Courier Expense">
                        Postal And Courier Expense
                      </SelectItem>
                      <SelectItem value="Professional Tax">
                        Professional Tax
                      </SelectItem>
                      <SelectItem value="Property Tax">Property Tax</SelectItem>
                      <SelectItem value="Rent Advance">Rent Advance</SelectItem>
                      <SelectItem value="Rent Expense">Rent Expense</SelectItem>
                      <SelectItem value="Staff Advance">
                        Staff Advance
                      </SelectItem>
                      <SelectItem value="Staff Incentive">
                        Staff Incentive
                      </SelectItem>
                      <SelectItem value="Staff Salary">Staff Salary</SelectItem>
                      <SelectItem value="Staff Welfare">
                        Staff Welfare
                      </SelectItem>
                      <SelectItem value="Stationery Expense">
                        Stationery Expense
                      </SelectItem>
                      <SelectItem value="Tax">Tax</SelectItem>
                      <SelectItem value="TDS Refund">TDS Refund</SelectItem>
                      <SelectItem value="Telephone Mobile Internet Expense">
                        Telephone Mobile Internet Expense
                      </SelectItem>
                      <SelectItem value="Third Party Lended Installment">
                        Third Party Lended Installment
                      </SelectItem>
                      <SelectItem value="Third Party Lending">
                        Third Party Lending
                      </SelectItem>
                      <SelectItem value="Third Party Loan">
                        Third Party Loan
                      </SelectItem>
                      <SelectItem value="Third Party Loan Installment">
                        Third Party Loan Installment
                      </SelectItem>
                      <SelectItem value="Travelling Expense">
                        Travelling Expense
                      </SelectItem>
                      <SelectItem value="Water Bill">Water Bill</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          {[
            { name: "cashAmt", label: "Cash Amt" },
            { name: "chqAmt", label: "Cheque Amt" },
            { name: "chqNo", label: "Cheque Number" },
            { name: "chqDate", label: "Cheque Date" },
            { name: "chqBank", label: "Cheque Bank" },
            { name: "paidTo", label: "Paid To" },
            { name: "payeePAN", label: "Payee PAN", placeholder: "PAN" },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              control={control}
              name={`paymentMode.${name}`}
              render={({ field }) => (
                <FormItem className="flex flex-col md:flex-row gap-2">
                  <FormLabel className="font-semibold w-full md:w-1/3">
                    {label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...(name.includes("Amt") ? { type: "number" } : {})}
                      {...field}
                      placeholder={label}
                      className="w-full md:w-2/3"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}

          <FormField
            control={control}
            name="paymentMode.remarks"
            render={({ field }) => (
              <FormItem className="col-span-full flex flex-col md:flex-row gap-4">
                <FormLabel className="font-semibold w-full md:w-1/3 items-start">
                  Remarks
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Remarks"
                    className="w-full md:w-2/3"
                    rows={3}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}

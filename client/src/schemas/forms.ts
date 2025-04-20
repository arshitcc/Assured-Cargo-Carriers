import { z } from "zod";

export const challanDetailsSchema = z.object({
  challanNo: z.string().nonempty("Challan No is required"),
  date: z.string().regex(/\d{2}-[A-Za-z]{3}-\d{4}/, "Invalid date format"),
  from: z.string().nonempty("From location is required"),
  to: z.string().nonempty("To location is required"),
  branch: z.string().nonempty("Branch is required"),
  challanType: z.string().nonempty("Type is required"),
  acWt: z.number().min(0),
  chWt: z.number().min(0),
  lorryHire: z.number().min(0),
  part: z.number().min(0),
  balance: z.number().min(0),
  vehNo: z.string().nonempty(),
  make: z.string().nonempty(),
  ownerName: z.string().nonempty(),
  ownerPAN: z.string().optional(),
  brokerName: z.string().optional(),
  brokerPAN: z.string().optional(),
});

export const lorryHirePaymentSchema = z.object({
  lhPaid: z.number().min(0),
  dtnPaid: z.number().min(0),
  enRtExp: z.number().min(0),
  mmChg: z.number().min(0),
  miscExp: z.number().min(0),
  lhpmDed: z.number().min(0),
  otherDed: z.number().min(0),
  totalAmt: z.number().min(0),
  tdsDed: z.number().min(0),
  vcrAmount: z.number().min(0),
});

export const paymentModeSchema = z.object({
  mode: z.enum(["Cash", "Cheque", "BankTransfer", "Select"]),
  cashAmt: z.number().min(0),
  chqAmt: z.number().min(0),
  chqNo: z.string().optional(),
  chqDate: z.string().optional(),
  chqBank: z.string().optional(),
  paidTo: z.string().optional(),
  payeePAN: z.string().optional(),
  remarks: z.string().optional(),
});

export const voucherEntrySchema = z.object({
  branch: z.string().nonempty(),
  voucherNo: z.string().optional(),
  date: z.string(),
  type: z.string().nonempty(),
  cbsDate: z.string().optional(),
  challanDetails: challanDetailsSchema,
  lorryHirePayment: lorryHirePaymentSchema,
  paymentMode: paymentModeSchema,
});

export type VoucherEntry = z.infer<typeof voucherEntrySchema>;
export type ChallanDetails = z.infer<typeof challanDetailsSchema>;
export type LorryHirePayment = z.infer<typeof lorryHirePaymentSchema>;
export type PaymentMode = z.infer<typeof paymentModeSchema>;
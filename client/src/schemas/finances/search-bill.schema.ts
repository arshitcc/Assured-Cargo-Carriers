import z from "zod";

export const searchBillSFormSchema = z.object({
    billNumber : z.string(),
});

export type SearchBillForm = z.infer<typeof searchBillSFormSchema>;
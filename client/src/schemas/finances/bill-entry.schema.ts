import z from "zod";

export const billEntryFormSchema = z.object({
    branch : z.string(),
    billNumber : z.string(),
    date : z.date(),
    type : z.string(),
    submissionDate : z.string(),
    partyInfo : z.object({
        partyName: z.string(),
        partyCode : z.string(),
        partyAddress : z.string(),
        partyMobile : z.string(),
        partyEmail : z.string().email(),

        contactPersonName : z.string(),
        gstNumber : z.string().max(15),
        referenceNumber : z.string(),
        billDescription : z.string(),
        billAmount : z.string(),
        numberOfConsignments : z.number(),
        dueDate : z.date()
    })
});

export type BillEntryForm = z.infer<typeof billEntryFormSchema>
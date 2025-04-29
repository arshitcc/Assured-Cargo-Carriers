import { z } from "zod";

export const searchChallanSchema = z.object({
  challanNoVehicleNo: z.string().optional(),
  branch: z.string().optional(),
  fromDate: z.date().optional(),
  toDate: z.date().optional(),
});

export type SearchChallanForm = z.infer<typeof searchChallanSchema>;
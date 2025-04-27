import { z } from "zod";

export const truckArrivalReportSchema = z.object({
  branch: z.any(),
  challanNo: z.any(),
  challanDate: z.any(),
  type: z.any(),
  scheduledDate: z.any(),
  tarBranch: z.any(),
  challanInfo: z.any(),
  tarInfo: z.any(),
  checklistAndRemarks: z.any(),
});

export type TruckArrivalReportForm = z.infer<typeof truckArrivalReportSchema>;
import { z } from "zod";

export const editChallanFormSchema = z.object({
  branch: z.any(),
  challanNo: z.any(),
  challanDate: z.any(),
  type: z.any(),
  scheduledDate: z.any(),
  challanInfo: z.any(),
  vehicleInfo : z.any(),
  vehicleOwnerDriverInfo : z.any(),
  lorryHireInfo : z.any(),
  checklistAndRemarks : z.any(),
});

export type EditChallanForm = z.infer<typeof editChallanFormSchema>;
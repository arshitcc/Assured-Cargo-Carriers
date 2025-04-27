import { z } from "zod";

export const addConsignmentFormSchema = z.object({
  branch: z.any(),
  consignmentNo: z.any(),
  consignmentDate: z.any(),
  departureBranch: z.any(),
  scheduleDeliveryDate: z.any(),
  transporterInfo : z.any(),
  vehicleInfo : z.any(),
  freightInfo : z.any(),
  insuranceInfo : z.any(),
  additionalInfo : z.any(),
});

export type AddConsignmentForm = z.infer<typeof addConsignmentFormSchema>;


import AddConsignmentHeader from "@/components/add-consignment/AddConsignmentHeader";
import FreightInformation from "@/components/add-consignment/FreightInformation";
import InsuranceInformation from "@/components/add-consignment/InsuranceInformation";
import Remarks from "@/components/add-consignment/Remarks";
import TransporterInformation from "@/components/add-consignment/TransporterInformation";
import VehicleInformation from "@/components/add-consignment/VehicleInformation";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, SaveIcon } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";

const addConsignmentFormSchema = z.object({
  branch: z.any(),
  consignmentNo: z.any(),
  consignmentDate: z.any(),
  departureBranch: z.any(),
  scheduleDeliveryDate: z.any(),
});

type AddConsignmentForm = z.infer<typeof addConsignmentFormSchema>;

function AddConginment() {
  const [saving, setSaving] = useState(false);
  const addConsignmentForm = useForm<AddConsignmentForm>({
    resolver: zodResolver(addConsignmentFormSchema),
    defaultValues: {
      branch: "",
      consignmentNo: "Autogenrate",
      consignmentDate: new Date(),
      departureBranch: "",
      scheduleDeliveryDate: new Date(),
    },
  });

  const handleAddConsignment = async (data: AddConsignmentForm) => {
    setSaving(true);
    try {
      console.log("first");

      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log(data);
      console.log("done");
    } catch (error) {
      console.log(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen px-2">
      <Form {...addConsignmentForm}>
        <form
          className="space-y-4"
          onSubmit={addConsignmentForm.handleSubmit(handleAddConsignment)}
        >
          <FormProvider {...addConsignmentForm}>
            <AddConsignmentHeader />
            <div className="flex gap-4">
              <div className="w-1/2 space-y-2">
                <TransporterInformation />
                <VehicleInformation />
                <FreightInformation />
              </div>
              <div className="w-1/2 space-y-2 flex flex-col">
                <InsuranceInformation />
                <Remarks />
                <div className="h-full flex justify-end items-center">
                  <Button
                    type="submit"
                    disabled={saving}
                    className="mx-auto cursor-pointer bg-[#52A44D] hover:bg-[#52A44D]"
                  >
                    {saving ? (
                      <Loader className="h-4 w-20 animate-spin" />
                    ) : (
                      <SaveIcon />
                    )}
                    Save and Exit
                  </Button>
                </div>
              </div>
            </div>
          </FormProvider>
        </form>
      </Form>
    </div>
  );
}

export default AddConginment;

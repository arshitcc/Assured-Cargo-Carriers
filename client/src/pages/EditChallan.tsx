import EditChallanHeader from "@/components/edit-challan/EditChallanHeader";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import ChallanInformation from "@/components/edit-challan/ChallanInformation";
import VehicleInformation from "@/components/edit-challan/VehicleInformation";
import { Button } from "@/components/ui/button";
import { Loader, SaveIcon } from "lucide-react";
import VehicleOwnerAndDriverInformation from "@/components/edit-challan/VehicleOwnerAndDriverInformation";
import LorryHireInformation from "@/components/edit-challan/LorryHireInformation";
import ChecklistAndRemarks from "@/components/edit-challan/ChecklistAndRemarks";

const editChallanFormSchema = z.object({
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

type EditChallanForm = z.infer<typeof editChallanFormSchema>;

const EditChallan = () => {
  const [editing, setEditing] = useState(false);

  const editChallanForm = useForm<EditChallanForm>({
    resolver: zodResolver(editChallanFormSchema),
    defaultValues: {
      branch: "",
      challanNo: "19282",
      challanDate: new Date(),
      type: "",
      scheduledDate: new Date(),
      challanInfo: {
        fromStation: "",
        toStation: "",
        numberOfConsignment: "",
      },
      vehicleInfo: {
        vehicleType: "",
        vehicleRegistrationNumber: "",
        engineNumber: "",
        chasisNumber: "",
        make: "",
        capacity: "",
        permitNumber: "",
        insuranceNumber: "",
        insuranceCompany: "",
      },
      vehicleOwnerDriverInfo: {
        ownerName: "",
        ownerMobile: "",
        ownerPan : "",
        ownerAddress : "",
        driverName : "",
        driverMobile : "",
        driverLicenseNumber : "",
        driverAddress : "",
      },
      lorryHireInfo : {
        chargedWeight : "",
        lorryHire : "",
        extraHeightCharges : "",
        extraLengthCharges : "",
        detentionCharges : "",
        extraCharges : "",
        totalLorryHire : "",
        advanceLorryHire : "",
        balanceLorryHire : "",
        remarks : "",
      },
      checklistAndRemarks : {
        isDL_ScannedAndVerified : false,
        isPAN_LorryOwner_ScannedAndVerified : false,
        isRC_Vehicle_ScannedAndVerified : false,
        loadingRemarks : "",
      }
    },
  });

  const handleEditChallan = async (data: EditChallanForm) => {
    setEditing(true);
    try {
      console.log("first");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log(data);
      console.log("done");
    } catch (error) {
      console.log(error);
    } finally {
      setEditing(false);
    }
  };
  
  return (
    <div>
      <div className="min-h-screen px-2">
        <Form {...editChallanForm}>
          <form
            className="space-y-4"
            onSubmit={editChallanForm.handleSubmit(handleEditChallan)}
          >
            <FormProvider {...editChallanForm}>
              <EditChallanHeader />
              <div className="flex gap-4">
                <ChallanInformation />
                <VehicleInformation />
                <VehicleOwnerAndDriverInformation/>
                <LorryHireInformation/>
                <ChecklistAndRemarks/>
              </div>
            </FormProvider>
            <div className="h-full flex justify-end items-center">
              <Button
                type="submit"
                disabled={editing}
                className="mx-auto cursor-pointer bg-[#52A44D] hover:bg-[#52A44D]"
              >
                {editing ? (
                  <Loader className="h-4 w-20 animate-spin" />
                ) : (
                  <SaveIcon />
                )}
                Save and Exit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditChallan;

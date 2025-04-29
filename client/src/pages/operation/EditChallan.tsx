import EditChallanHeader from "@/components/operations/edit-challan/EditChallanHeader";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import ChallanInformation from "@/components/operations/edit-challan/ChallanInformation";
import VehicleInformation from "@/components/operations/edit-challan/VehicleInformation";
import { Button } from "@/components/ui/button";
import { LoaderIcon, PlusIcon, SaveIcon } from "lucide-react";
import VehicleOwnerAndDriverInformation from "@/components/operations/edit-challan/VehicleOwnerAndDriverInformation";
import LorryHireInformation from "@/components/operations/edit-challan/LorryHireInformation";
import ChecklistAndRemarks from "@/components/operations/edit-challan/ChecklistAndRemarks";
import {
  EditChallanForm,
  editChallanFormSchema,
} from "@/schemas/operations/edit-challan.schema";
import { useNavigate } from "react-router-dom";

const EditChallan = () => {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

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
        ownerPan: "",
        ownerAddress: "",
        driverName: "",
        driverMobile: "",
        driverLicenseNumber: "",
        driverAddress: "",
      },
      lorryHireInfo: {
        chargedWeight: "0",
        lorryHire: "0",
        extraHeightCharges: "0",
        extraLengthCharges: "0",
        detentionCharges: "0",
        extraCharges: "0",
        totalLorryHire: "",
        advanceLorryHire: "",
        balanceLorryHire: "",
        remarks: "",
      },
      checklistAndRemarks: {
        isDL_ScannedAndVerified: false,
        isPAN_LorryOwner_ScannedAndVerified: false,
        isRC_Vehicle_ScannedAndVerified: false,
        loadingRemarks: "",
      },
    },
  });

  const handleEditChallan = async (data: EditChallanForm) => {
    setEditing(true);
    setSaving(true);
    try {
      console.log("first");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log(data);
      console.log("done");
    } catch (error) {
      console.log(error);
    } finally {
      setEditing(false);
      setSaving(false);
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
              <div className="grid grid-cols-3 gap-4">
                <VehicleInformation />
                <VehicleOwnerAndDriverInformation />
                <LorryHireInformation />
                <ChallanInformation />
                <ChecklistAndRemarks />
              </div>
            </FormProvider>
            <div className="h-full flex justify-end pb-2 gap-2">
              <div>
                <Button
                  type="submit"
                  disabled={editing}
                  className="mx-auto cursor-pointer bg-[#52A44D] hover:bg-[#52A44D]"
                >
                  {editing ? (
                    <LoaderIcon className="h-4 w-20 animate-spin" />
                  ) : (
                    <SaveIcon />
                  )}
                  Save and Exit
                </Button>
              </div>

              <div>
                <Button
                  type="button"
                  onClick={() => {
                    navigate("/add-this-consignment");
                  }}
                  disabled={saving}
                  className="mx-auto cursor-pointer bg-[#52A44D] hover:bg-[#52A44D]"
                >
                  {editing ? (
                    <LoaderIcon className="h-4 w-20 animate-spin" />
                  ) : (
                    <PlusIcon />
                  )}
                  Save and Add Consignment
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditChallan;

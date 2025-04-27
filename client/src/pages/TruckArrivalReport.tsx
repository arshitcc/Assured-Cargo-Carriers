import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { LoaderIcon, SaveIcon } from "lucide-react";
import TruckArrivalReportHeader from "@/components/truck-arrival-report/TruckArrivalReportHeader";
import ChecklistAndRemarks from "@/components/truck-arrival-report/ChecklistAndRemarks";
import TARInformation from "@/components/truck-arrival-report/TARInformation";
import ChallanInformation from "@/components/truck-arrival-report/ChallanInformation";
import { TruckArrivalReportForm, truckArrivalReportSchema } from "@/schemas/truck-arrival-report.schema";

function TruckArrivalReport() {
  const [editing, setEditing] = useState(false);

  const editChallanForm = useForm<TruckArrivalReportForm>({
    resolver: zodResolver(truckArrivalReportSchema),
    defaultValues: {
      branch: "Pune",
      challanNo: "19282",
      challanDate: new Date(),
      type: "Main",
      scheduledDate: "",
      tarBranch: "Pune",
      challanInfo: {
        from: "",
        to: "",
        vehicleRegistrationNo: "",
        make: "",
        type: "",
        ownerName: "",
        driverName: "",
        brokerName: "",
        totalLorryHire: "",
        partLorryHire: "",
        balanceLorryHire: "",
        loadingRemarks: "",
      },
      tarInfo : {
      },
      checklistAndRemarks: {
        isTotalPaymentRecieved: false,
        isPOD_with_ClearSignAndStamp: false,
        isShortExcessDamageLeakageVerified: false,
        isVehicleDetainedByCustomer: false,
        loadingRemarks: "",
      },
    },
  });

  const handleEditChallan = async (data: TruckArrivalReportForm) => {
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
              <TruckArrivalReportHeader />
              <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4">
                <ChallanInformation/>
                <TARInformation />
                <ChecklistAndRemarks />
              </div>
            </FormProvider>
            <div className="h-full flex justify-end items-center">
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
          </form>
        </Form>
      </div>
    </div>
  );
}

export default TruckArrivalReport;

import BillEntryHeader from "@/components/finance/Bills/AddBill/BillEntryHeader";
import PartyInformation from "@/components/finance/Bills/AddBill/PartyInformation";
import PartyInformation2 from "@/components/finance/Bills/AddBill/PartyInformation2";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { BillEntryForm, billEntryFormSchema } from "@/schemas/finances/bill-entry.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, SaveIcon } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function BillEntry() {
  
  const [saving, setSaving] = useState(false);
  const billEntryForm = useForm<BillEntryForm>({
    resolver: zodResolver(billEntryFormSchema),
    defaultValues: {
      
    },
  });

  const handleBillEntry = async (data: BillEntryForm) => {
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
      <Form {...billEntryForm}>
        <form
          className="space-y-4"
          onSubmit={billEntryForm.handleSubmit(handleBillEntry)}
        >
          <FormProvider {...billEntryForm}>
            <BillEntryHeader />
            <div className="grid grid-cols-2 gap-4 p-2">
              <PartyInformation/>
              <PartyInformation2/>
              <div className="col-span-2 h-full flex justify-end items-center">
                <Button
                  type="submit"
                  disabled={saving}
                  className="mx-auto cursor-pointer bg-[#52A44D] hover:bg-[#52A44D]"
                >
                  {saving ? (
                    <LoaderIcon className="h-4 w-20 animate-spin" />
                  ) : (
                    <SaveIcon />
                  )}
                  Save
                </Button>
              </div>
            </div>
          </FormProvider>
        </form>
      </Form>
    </div>
  );
}

export default BillEntry
"use client";

import { stepperFormSchema, StepperFormData } from "@/schemas/stepper.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StepOne } from "./steps/step1";
import { StepTwo } from "./steps/step2";
import { Button, App } from "antd";
import { LettersPullUp } from "@/utils/letterpullupEffect";
import { useSubmitEnquiryMutation } from "@/services/enquiry.query";
import { motion } from "motion/react";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const { message } = App.useApp();
  const { mutate } = useSubmitEnquiryMutation();

  const { control, trigger, handleSubmit, formState: { errors },reset } = useForm<StepperFormData>({
    resolver: zodResolver(stepperFormSchema),
    mode: "onChange",
  });

  const onSubmit = (data: StepperFormData) => {
    console.log(data)
    mutate(data, {
      onSuccess: (response) => {
        console.log(response)
        console.log("SUCCESS", response);

        message.success("Enquiry Submitted!");
         reset();
         setStep(1);
      },

      onError: (error) => {
        console.log("ERROR", error);
        message.error("Failed to submit enquiry.");
      },
    });
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const nextStep = async () => {
    const stepFields: Record<number, Array<keyof StepperFormData>> = {
      1: ["fullName", "email", "phone"],
      2: ["problemType", "painlevel", "message"],
    };

    const fields = stepFields[step] ?? [];
    const isValid = await trigger(fields);

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };    

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 mb-8">
      {/* Premium Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl"
      >
        {/* Gradient Header */}
        <div className="h-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500" />
        
        <div className="p-8 md:p-12">
          {/* Title Section */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-4">Get In Touch</p>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              <LettersPullUp text="Submit Your Enquiry" />
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Tell us about your dental concerns and our specialists will get back to you soon
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: `${(step / 2) * 100}%` }} />
            <div className="ml-4 text-sm font-semibold text-cyan-600">
              Step {step} of 2
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && <StepOne control={control} errors={errors} />}
              {step === 2 && <StepTwo control={control} errors={errors} />}
            </motion.div>

            {/* Actions */}
            <div className="flex gap-4 mt-10 justify-between">
              {step > 1 && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={prevStep}
                    className="px-8 py-2 h-auto rounded-lg border-2 border-slate-300 text-slate-700 font-semibold hover:border-slate-400 transition-all"
                  >
                    Previous
                  </Button>
                </motion.div>
              )}

              {step < 2 ? (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="ml-auto">
                  <Button
                    onClick={nextStep}
                    className="h-auto btn_cls"
                  >
                    Next
                  </Button>
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="ml-auto btn_cls"
                >
                  Submit
                </motion.button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default StepperForm;

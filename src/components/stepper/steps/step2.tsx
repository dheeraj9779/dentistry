
import { StepperFormData } from "@/schemas/stepper.schema";
import { Form, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { motion } from "motion/react";
import { AppstoreOutlined } from "@ant-design/icons";

type Props = {
  control: Control<StepperFormData>;
  errors: FieldErrors<StepperFormData>;
};

const options = [
    {
        label: "Mild",
        value: "mild"
    },
    {
        label: "Moderate",
        value: "moderate"
    },
    {
        label: "Severe",
        value: "severe"
    }
]

export const StepTwo = ({control, errors}: Props) => {
    return (
       <div>
     
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.4 }}
      >
        <Controller
          name="problemType"
          control={control}
          render={({ field }) => (
          <Form.Item
              name="problemType"
              
              label={
                <span className="text-lg font-semibold text-slate-800">
                  What&apos;s Your Problem?
                </span>
              }
              layout="vertical"
              validateStatus={errors.problemType ? "error" : ""}
              help={errors.problemType?.message}
              className="mb-6"
          >
            <Select
              {...field}
              placeholder="Select a problem"
              size="large"
              className="input_cls"
              prefix={<AppstoreOutlined className="text-cyan-500! mr-1"/>}
              options={[
                { label: "Tooth Pain", value: "tooth_pain" },
                { label: "Whitening", value: "whitening" },
                { label: "Braces", value: "braces" },
                { label: "Cleaning", value: "cleaning" },
              ]}
            />
          </Form.Item>
          )}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Controller
          name="painlevel"
          control={control}
          rules={{
            required: "Please select pain level",
          }}
          render={({ field }) => (
            <Form.Item
              label={
                <span className="text-lg font-semibold text-slate-800">
                  Severity Level
                </span>
              }
              layout="vertical"
              validateStatus={
                errors.painlevel ? "error" : ""
              }
              help={errors.painlevel?.message}
              className="mb-6"
            >
              <Radio.Group
                {...field}
                className="flex! gap-4! w-full"
                size="large"
              >
                {options.map((option) => {

                  const isActive =
                    field.value === option.value;

                  return (
                    <Radio.Button
                      key={option.value}
                      value={option.value}
                      className={`
                        flex-1!
                        h-auto!
                        rounded-3xl!
                        border!
                        px-5!
                        py-2!
                        text-center!
                        text-base!
                        font-medium!
                        shadow-sm!
                        transition-all!
                        duration-200!

                        ${
                          isActive
                            ? `
                              border-cyan-600!
                              bg-cyan-600!
                              text-white!
                              shadow-xl!
                            `
                            : `
                              border-slate-200!
                              bg-white!
                              text-slate-800!
                              hover:border-cyan-300!
                              hover:bg-cyan-50!
                            `
                        }
                      `}
                    >
                      {option.label}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </Form.Item>
          )}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
          <Form.Item 
            label={
                <span className="text-lg font-semibold text-slate-800">
                  Additional Details
                </span>
              }
            layout="vertical"
            validateStatus={errors.message ? "error" : ""}
            help={errors.message?.message}
            className="mb-0"
          >
            <TextArea 
              {...field} 
              placeholder="Please describe your symptoms or concerns in detail..." 
              size="large"
              rows={5}
              className="input_cls"
            />
          </Form.Item>
          )}
        />
      </motion.div>
    </div>
    )   
}
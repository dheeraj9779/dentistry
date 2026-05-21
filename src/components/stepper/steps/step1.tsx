import { StepperFormData } from "@/schemas/stepper.schema";
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { motion } from "motion/react";

type Props = {
  control: Control<StepperFormData>;
  errors: FieldErrors<StepperFormData>;
};

export const StepOne = ({control, errors}: Props) => {
    const fields = ["fullName", "email", "phone"];
    
    return (
       <div>
      
      {fields.map((fieldName, idx) => (
        <motion.div
          key={fieldName}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
        >
          {fieldName === "fullName" && (
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label={
                <span className="text-lg font-semibold text-slate-800">
                  Full Name
                </span>
              }
                  layout="vertical"
                  validateStatus={errors.fullName ? "error" : ""}
                  help={errors.fullName?.message}
                  className="mb-6"
                >
                  <Input 
                    {...field} 
                    prefix={<UserOutlined className="text-cyan-500! mr-1" />}
                    placeholder="Enter your full name" 
                    size="large"
                    className="input_cls"
                  />
                </Form.Item>
              )}
            />
          )}

          {fieldName === "email" && (
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label={
                <span className="text-lg font-semibold text-slate-800">
                  Email
                </span>
              }
                  layout="vertical"
                  validateStatus={errors.email ? "error" : ""}
                  help={errors.email?.message}
                  className="mb-6"
                >
                  <Input 
                    {...field} 
                    prefix={<MailOutlined className="text-cyan-500! mr-1" />}
                    placeholder="Enter your email" 
                    size="large"
                    type="email"
                    className="input_cls"
                  />
                </Form.Item>
              )}
            />
          )}

          {fieldName === "phone" && (
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label={
                <span className="text-lg font-semibold text-slate-800">
                  Phone Number
                </span>
              }
                  layout="vertical"
                  validateStatus={errors.phone ? "error" : ""}
                  help={errors.phone?.message}
                  className="mb-0"
                >
                  <Input 
                    {...field} 
                    prefix={<PhoneOutlined className="text-cyan-500! mr-1" />}
                    placeholder="Enter your phone number" 
                    size="large"
                    className="input_cls"
                  />
                </Form.Item>    
              )}
            />
          )}
        </motion.div>
      ))}
      
    </div>
    )
}
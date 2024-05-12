'use client'
import { formSchema } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldName } from "react-hook-form";
import { z } from "zod";


const CustomFormSchema = formSchema('sign-up')

interface CustomForm {
    control:Control<z.infer<typeof CustomFormSchema>>,
    name:FieldName<z.infer<typeof CustomFormSchema>>,
    label:string,
    placeholder:string,
    type:string,
}

const CustomInput = ({ control, name, label, placeholder,type }: CustomForm) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;

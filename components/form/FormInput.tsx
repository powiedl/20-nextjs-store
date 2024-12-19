import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
};

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
  required = false,
}: FormInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        required={required}
      />
    </div>
  );
};
export default FormInput;

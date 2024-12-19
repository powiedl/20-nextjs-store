import { Label } from '../ui/label';
import { Input } from '../ui/input';
const name = 'price';
type FormInputNumberProps = {
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
};

const PriceInput = ({
  label = 'Price ($)',
  placeholder,
  required,
  defaultValue,
}: FormInputNumberProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type='number'
        min={0}
        placeholder={placeholder}
        defaultValue={defaultValue || 100}
        required={required}
      />
    </div>
  );
};
export default PriceInput;

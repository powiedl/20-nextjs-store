import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
  required?: boolean;
  rows?: number;
};

function TextAreaInput({
  name,
  labelText,
  defaultValue,
  required,
  rows = 5,
}: TextAreaInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        required={required}
        className='leading-loose'
      />
    </div>
  );
}

export default TextAreaInput;

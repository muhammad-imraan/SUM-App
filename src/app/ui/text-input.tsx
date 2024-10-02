import { useField } from 'formik';
import { InputProps } from '@/app/ui/interfaces';


//this field can be used for text input, email input and password input
export default function TextInput({ label, ...props }: InputProps) {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label><br />
            <input className="border border-purple-500 rounded p-2 text-[12px] w-full" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-[12px]">{meta.error}</div>
            ) : null}
        </>
    );
}

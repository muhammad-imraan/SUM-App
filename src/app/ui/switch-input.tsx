import { useField } from 'formik';
import { InputProps } from '@/app/ui/interfaces';

export default function SwitcherInput({ text, ...props }: InputProps) {
    const [field, meta] = useField(props);

    return (
        <>
            <label className="inline-flex items-center my-5 cursor-pointer">
                <input type="checkbox" className="sr-only peer" {...field} {...props} />
                <div className="relative w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-700"></div>
                <span className="ms-3 text-[12px] text-gray-900 dark:text-gray-300">{text}</span>
            </label>
            {/* <input className="border border-purple-500 rounded p-2 text-[12px] w-full" {...field} {...props} /> */}
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-[12px]">{meta.error}</div>
            ) : null}
        </>
    );
}

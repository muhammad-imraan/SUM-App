export interface InputProps {
    label: string;
    name: string;
    id?: string;
    type?: string;
    placeholder?: string;
    [key: string]: any; // for any other props
}
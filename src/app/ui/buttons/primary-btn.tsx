export default function PrimaryBtn(props: any) {
    return (
        <button
            className="w-full bg-purple-700 text-white rounded-sm p-3 hover:bg-purple-800"
            {...props}
        >
            {props.text}
            </button>
    );
}
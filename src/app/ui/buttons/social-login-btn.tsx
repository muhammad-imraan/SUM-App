
export default function SocialLoginBtn(props: any) {
    return (
        <button
            className={`w-full rounded-sm p-2 border border-gray-300 ${props.className}`}
            {...props}
        >
            <div className="flex items-center">{props.icon}<span className="px-2">{props.text}</span></div>
        </button>
    );
}
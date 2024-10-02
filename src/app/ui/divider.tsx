
export default function Divider(props: any) {

    if (props.to === 'left') {
        return <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6" style={props.style} >{props.text}</div>
    } else if (props.to === 'right') {
        return <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6">{props.text}</div>
    } else if (props.to === 'center') {
        return <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6" style={props.style}>{props.text}</div>
    }
}
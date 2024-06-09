
export default function ModalContent({ onClose }: any) {
    return (
        <div className="modal">
            <div className="text-white text-xl">I'm a modal dialog</div>
            <button onClick={onClose} className="bg-green-700 p-2 ms-4 rounded-md">Close</button>
        </div>
    );
}

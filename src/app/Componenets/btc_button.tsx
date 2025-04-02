interface BtcProps {
    name: string;
    amount: string;
}
const BtcButton: React.FC<BtcProps> = ({ name, amount }) => {

    return (
        <div className="w-full flex flex-col flex-wrap justify-center item-start ">
            <div className="text-3xl text-gray-600">
                {name}
                <div className="text-6xl text-white">
                    {amount}
                </div>
            </div>
        </div>
    );
};
export default BtcButton;

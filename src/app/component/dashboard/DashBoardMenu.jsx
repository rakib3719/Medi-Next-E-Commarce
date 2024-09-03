import Link from "next/link";
import { FaQrcode } from "react-icons/fa";


const DashBoardMenu = () => {
    return (
    
       
<div  className="bg-[#2b97a4] min-h-screen">
<div className="text-white flex justify-between mx-8 items-center py-8 border-[#1b6f7e] border-b">

    <Link href={'/'} className="text-3xl font-bold ">MediNext</Link>
    <FaQrcode className="text-3xl"/>
</div>

</div>

    );
};

export default DashBoardMenu;
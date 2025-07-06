import logo from '@/assets/images/logo-2.jpg'
import Image from "next/image";


export default function Logo() {
return (
    <Image src={logo} alt="Logo" className="w-10 h-10 rounded-full flex items-center justify-center" />
)
}
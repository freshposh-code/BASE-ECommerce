'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GrTransaction } from 'react-icons/gr'
import { IoAnalytics } from 'react-icons/io5'
import { MdAccountTree, MdDashboard } from 'react-icons/md'

const menus = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        href: "/admin/dashboard",
    },
    {
        title: "Product",
        icon: <AiOutlineShoppingCart />,
        href: "/admin/dashboard",
    },
    {
        title: "Accounts",
        icon: <MdAccountTree />,
        href: "/admin/dashboard",
    },
    {
        title: "Transaction",
        icon: <GrTransaction />,
        href: "/admin/dashboard",
    },
    {
        title: "Analytics",
        icon: <IoAnalytics />,
        href: "/admin/dashboard",
    },
    {
        title: "setting",
        icon: <MdDashboard />,
        href: "/admin/dashboard",
    },
]
const Sidebar = () => {
    const [activeBar, setActiveBar] = useState(0)

    const handleActivebar = (index: number) => {
        setActiveBar(index)
    }
    const pathName = usePathname();

    return <div className='bg-white w-[300px] min-h-screen p-4 shrink-0'>
        <div className="flex items-center gap-4">
            <img className='size-12 rounded-lg' src="/logo.jpg" alt="logo" />
            <h2 className='text-[20px] font-semibold'>Posh Association</h2>
        </div>

        <ul className="space-y-4 mt-6">
            {menus.map((menu, index) =>
                <Link key={menu.title} href={menu.href} onClick={() => handleActivebar(index)}
                    className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${activeBar === index ? "bg-pink text-white" : ""}
                 ${pathName !== menu.href ? "bg-pink text-white" : "bg-gray-200"}`}>

                    <div className="text-[20px]">{menu.icon}</div>
                    <p>{menu.title}</p>
                </Link>)}
        </ul>
    </div>
}

export default Sidebar
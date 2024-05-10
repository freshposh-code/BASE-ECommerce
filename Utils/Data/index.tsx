import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics } from "react-icons/io5";
import { MdAccountTree, MdDashboard, MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from 'react-icons/tb'

export const menus = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        href: "/admin/dashboard",
    },
    {
        title: "Product",
        icon: <AiOutlineShoppingCart />,
        href: "/admin/products",
    },
    {
        title: "Accounts",
        icon: <MdAccountTree />,
        href: "/admin/account",
    },
    {
        title: "Transaction",
        icon: <GrTransaction />,
        href: "/admin/transaction",
    },
    {
        title: "Analytics",
        icon: <IoAnalytics />,
        href: "/admin/analytics",
    },
    {
        title: "setting",
        icon: <MdDashboard />,
        href: "/setting",
    },
]

export const features = [
    {
        icon: <TbTruckDelivery className="text-4xl" />,
        title: "Free Delivery",
        desc: "Orders from all item",
    },
    {
        icon: <RiRefund2Fill className="text-4xl" />,
        title: "Return & Refund",
        desc: "Money back guarantee",
    },
    {
        icon: <TbDiscount className="text-4xl" />,
        title: "Member Discount",
        desc: "On Order Over $99.00",
    },
    {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "Support 24/7",
        desc: "Contact us 24 hours a day",
    },
]
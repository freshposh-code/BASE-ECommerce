import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics } from "react-icons/io5";
import { MdAccountTree, MdDashboard } from "react-icons/md";

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
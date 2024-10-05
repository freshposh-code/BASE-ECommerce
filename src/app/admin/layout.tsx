'use client'

import Loader from '@/components/Admin-panel/Loader'
import Login from '@/components/Admin-panel/Login'
import Sidebar from '@/components/Admin-panel/Sidebar'
import { useAppSelector } from '@/components/Redux/hooks'
import { useSession } from 'next-auth/react'

const layout = ({ children }: { children: React.ReactNode }) => {
    const isLoading = useAppSelector(store => store.LoadingReducer)
    // const { data: session } = useSession()

    // if (!session) {
    //     return <Login />
    // }

    return (
        <div className='flex'>
            <Sidebar />
            <div className="w-full h-full">
                {/* <Navbar /> */}

                <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">
                    {children}
                </div>
            </div>
            {isLoading && <Loader />}
        </div>
    )
}

export default layout
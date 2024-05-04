'use client'

import Login from '@/components/Admin-panel/Login'
import { useAppSelector } from '@/components/Redux/hooks'
import { useSession } from 'next-auth/react'
import React from 'react'

const layout = () => {


    const isLoading = useAppSelector(store => store.LoadingReducer)
    const { data: session } = useSession()

    if (!session?.user) {
        return <Login />
    }

    return (
        <div>layout</div>
    )
}

export default layout
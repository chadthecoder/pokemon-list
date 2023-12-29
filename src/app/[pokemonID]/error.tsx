'use client'

import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router";

export default function ErrorBoundry({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) {

    const router = useRouter();

    function routeReplace(url: string)
    {
        router.replace(url)
    }

    return (
        <>
            {error.message}
            <button onClick={reset}>Try Again!</button>
        </>
    )
}
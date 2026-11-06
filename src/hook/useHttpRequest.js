import { useEffect, useState } from 'react'

export function useHttpRequest(url) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const res = await fetch(url)

                if (!res.ok) {
                    throw new Error(`Erreur HTTP ! Statut : ${res.status}`);
                }
                const d = await res.json()
                setData(d)
                setIsLoading(false)
            }
            catch (err) {
                setError(err.message)
                setIsLoading(false)
            }
        })()
    }, [])
    return { isLoading, error, data }
}
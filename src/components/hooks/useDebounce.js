import { useState, useEffect } from 'react'

export default function useDebounce(func, wait) {
    const [id, setId] = useState(null)
    useEffect(() => {
        return () => {
            clearTimeout(id)
        }
    }, [id])
    return (...args) => {
        if (id) {
            clearTimeout(id)
        }
        setId(
            setTimeout(() => {
                setId(null)
                func(...args)
            }, wait)
        )
    }
}
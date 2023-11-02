import { useState, useEffect, useRef } from 'react'

export default function useThrottle(func, wait) {
    const [id, setId] = useState(null)
    const [previous, setPrevious] = useState(Date.now())
    const remaining = useRef(wait)
    let now = previous
    let diff = 0
    useEffect(() => {
        return () => {
            clearTimeout(id)
            now = Date.now()
            diff = wait - (now - previous)
            remaining.current = diff < wait && diff > 0 ? diff : 0
        }
    }, [id, previous])
    return (...args) => {
        if (remaining.current <= 0) {
            func(...args)
            setPrevious(Date.now())
        } else {
            setId(
                setTimeout(() => {
                    func(...args)
                }, remaining.current)
            )
        }
    }
}

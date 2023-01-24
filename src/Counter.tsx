import { useEffect, useState } from "react";
import { interval } from "rxjs"

const source$ = interval(1000);

export const Counter = () => {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const subscription = source$.subscribe((x) => {
            setCount(x)
        })

        return () => { subscription.unsubscribe() }
    }, [source$])
    
    return <div>{count}</div>
}
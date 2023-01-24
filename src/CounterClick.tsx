import { useEffect, useMemo, useRef, useState } from "react";
import { interval, map, Observable, Subject } from "rxjs"


export const CounterClick = () => {
    const [ count, setCount ] = useState(0);

    const reactiveRef = useRef(null as any);

    if(!reactiveRef.current) {
        const subject= new Subject();
        const callback = (value: any) => subject.next(value);
        const observable = subject.asObservable();

        reactiveRef.current = {
            callback,
            observable
        } as const
    }
 
    const source$: any = useMemo(() => {
       return reactiveRef.current.observable.pipe(map((_, i) => i))
    }, [ reactiveRef.current.observable])
    
    useEffect(() => {
        const subscription = source$.subscribe((value: any) => {
            setCount(value)
        })

        return () => subscription.unsubscribe();
    }, [source$])

    return <button onClick={() => reactiveRef.current.callback()}>{count}</button>
}
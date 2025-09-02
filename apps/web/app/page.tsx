'use client'
import { trpc } from "../utils/trpc";

export default function Page() {
    const get = trpc.getEndpoint.useQuery(); 
    return (
        <div className="">{JSON.stringify(get.data)}</div>
    ); 
}

import { trpc } from "../utils/trpc";

export default async function Page() {
    const get = trpc.getEndpoint.useQuery(); 
    return (
        <div className="">{JSON.stringify(get.data)}</div>
    ); 
}
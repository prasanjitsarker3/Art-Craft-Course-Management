import { useQuery } from "@tanstack/react-query";


const useAdminMangeClass = () => {
    const { data: manegeClass = [],  refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://art-server.vercel.app/classes')
            return res.json()
        }
    })
    return [manegeClass, refetch]
};

export default useAdminMangeClass;
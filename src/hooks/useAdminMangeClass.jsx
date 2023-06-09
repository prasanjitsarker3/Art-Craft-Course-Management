import { useQuery } from "@tanstack/react-query";


const useAdminMangeClass = () => {
    const { data: manegeClass = [],  refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json()
        }
    })
    return [manegeClass, refetch]
};

export default useAdminMangeClass;
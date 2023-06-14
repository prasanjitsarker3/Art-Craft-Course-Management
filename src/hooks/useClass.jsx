import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const { data: classes = [], isLoading: loading , refetch} = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch('https://art-server.vercel.app/class')
            return res.json()
        }
    })
    return [classes, loading, refetch]
};

export default useClass;
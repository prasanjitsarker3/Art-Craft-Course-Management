import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {data:instructor=[], isLoading:loading, refetch}=useQuery({
        queryKey:['instructor'],
        queryFn: async ()=>{
            const res = await fetch('https://art-server.vercel.app/InsUser')
            return res.json()
        }
    })
    console.log(instructor);
    return [instructor, loading, refetch]
};

export default useInstructor;
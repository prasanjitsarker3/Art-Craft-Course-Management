import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {data:instructor=[], isLoading:loading, refetch}=useQuery({
        queryKey:['instructor'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/instructor')
            return res.json()
        }
    })
    return [instructor, loading, refetch]
};

export default useInstructor;
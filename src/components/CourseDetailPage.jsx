import { useParams, useSearchParams } from "react-router-dom"

export const CourseDetailPage = ()=> {

const params = useParams()
const [searchParams,setSearchParams] = useSearchParams()

const price = searchParams.get("price")
const rating = searchParams.get("rating")

console.log(searchParams)


    return (
        <>
        <h1 className="text-center">This is course page of {params.name}  </h1>
        <h1 className="text-center">Price:{price}  </h1>
        <h1 className="text-center">Rating:{rating}  </h1>
        </>
    )
}





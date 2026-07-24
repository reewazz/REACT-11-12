import { useParams } from "react-router-dom"

export const CourseDetailPage = ()=> {

const params = useParams()


    return (
        <h1 className="text-center">This is course page of {params.name}  </h1>
    )
}





import { CourseRepresentation } from '../../courseRepresentation';
import './courses.css'

export function Courses(props){
    const currentCourses = props.currentItems;

    return(
        <>
            {
            Array.isArray(currentCourses) 
            ? currentCourses.map(el => <CourseRepresentation key={el.id} data={el} />) 
            : ''
            }
        </>
    );
}
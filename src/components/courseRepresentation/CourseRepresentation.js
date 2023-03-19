import { Link } from 'react-router-dom';
import './course-representation.css'

export function CourseRepresentation(props){

    const data = props.data;

    return(
        <Link to='/lesson' state={{id : data.id}}>
            <article className="course-container">
                <img src={data.previewImageLink + "/cover.webp"} alt="lesson pic" />
                <div className="course-info">
                    <h3 className='title'>{data.title}</h3>
                    <p>Lessons count: <span>{data.lessonsCount}</span></p>
                    {   data.meta.skills?.length > 0 ?
                        <ul className='skill-list'> Skills:
                            {data.meta.skills?.map(el => <li key={el}>{el}</li>)}
                        </ul>
                        : null
                    }
                    <p>Rating: <span>{data.rating}</span></p>
                </div>
                <p></p>
            </article>
        </Link>
    );
}
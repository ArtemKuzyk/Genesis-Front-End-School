export function Lesson(props){
    const data = props.data.el;
    console.log(data)
    const setNewUrl = (e, url) => {
        const prevEl = document.querySelector('.active-lesson');
        prevEl?.classList.toggle('active-lesson');
        e.target.classList.toggle('active-lesson');
        if(url.slice(-4) === 'html'){

        } else {
            props.data.setUrl(url);
        }
    }

    return(
        <>
            <li className="lesson-title" 
                onClick={(e) => setNewUrl(e, data.link)}>
                {data.title}
                {
                    data.status === 'locked'
                    ?<span className="tooltiptext">The lesson is blocked</span>
                    :null
                }
            </li>
        </>
    );
}
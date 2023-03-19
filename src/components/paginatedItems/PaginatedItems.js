import { useState, useEffect } from 'react';
import { DataLoader, DATA_URL } from '../../services/dataLoader';
import { LocalStorageService, LS_KEYS } from '../../services/localStorage';
import { Courses } from '../pages/courses/Courses';
import ReactPaginate from 'react-paginate';

import './paginated-items.css';

export function PaginatedItems({itemsPerPage}){

    const [courses, setCourses] = useState(LocalStorageService.get(LS_KEYS.COURSES_LIST) || null);
    const [currentCourses, setCurrentCourses] = useState(null)
    let pageCount;
    useEffect(() => {
        const fetchData = async () => {
            await DataLoader.set(DATA_URL.PATH)
            setCourses(LocalStorageService.get(LS_KEYS.COURSES_LIST))
        }
        fetchData()
        .catch(console.error);
    }, []);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
      useEffect(() => {
        if(courses){
          setCurrentCourses(courses.slice(itemOffset, endOffset));
          pageCount = Math.ceil(courses.length / itemsPerPage);
        }
      }, [courses]);

    const handlePageClick = (event) => {
        console.log(event)
        const newOffset = (event.selected * itemsPerPage) % courses.length;
        setItemOffset(newOffset);
    };

  return (
    <>
      { currentCourses 
        ? <Courses currentItems={currentCourses} />
        : null
      }
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName="active"
      />
    </>
  );
}
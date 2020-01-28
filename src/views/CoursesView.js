import React, { useEffect } from 'react';
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow, 
  Link,
} from 'carbon-components-react';
import { courses } from '../utils';
import { courseOverview as mockCourseOverview } from '../mock-data';

const CoursesView = () => {
  useEffect(() => {

  }, []);

  const headers = [
    {
      key: 'name',
      header: 'Course name',
    },
    {
      key: 'reviews',
      header: 'Reviews',
    },
    {
      key: 'workload',
      header: 'Workload',
    },
    {
      key: 'difficulty',
      header: 'Difficulty',
    },
    {
      key: 'rating',
      header: 'Rating',
    },
    {
      key: 'enrolled',
      header: 'Enrolled',
    },
    {
      key: 'greaterThanB',
      header: '≥ B %',
    },
    {
      key: 'lessThanC',
      header: '≤ C %',
    },
    {
      key: 'withdrew',
      header: 'Withdrew',
    },
  ];

  return (
    <div className="main-content">
      <DataTable
        rows={mockCourseOverview.map(course => {
          // Find course number and name
          const currentCourse = courses.find(c => c.id === course.id);
          const number = currentCourse.number;
          const name = currentCourse.name;
          return ({
            ...course,
            name: <Link href={`/course/${course.id}`}>{`CS ${number} ${name}`}</Link>,
          });
        })}
        headers={headers}
        isSortable={true}
        render={({ rows, headers, getHeaderProps }) => (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header})}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </div>
  )
}

export default CoursesView;
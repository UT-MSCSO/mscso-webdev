import React, { useEffect } from 'react';
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow
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
    <div>
      <DataTable
        rows={mockCourseOverview.map(course => {
          // Find course number and name
          const number = courses.find(c => c.id === course.id).number;
          const name = courses.find(c => c.id === course.id).name;
          return ({
            ...course,
            name: `CS ${number} ${name}`,
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
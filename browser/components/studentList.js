import React from 'react';

const StudentList = props => {
  const { students, selectedStudent } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th>Sudent Name</th>
          <th>Test</th>
        </tr>
        {students.map(student => {
          return (
            <tr key={student.id} student={student}>
              <td>{student.fullName}</td>
              <td onClick={() => selectedStudent(student.id)}>details</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentList;

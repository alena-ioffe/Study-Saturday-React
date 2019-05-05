import React from 'react';

const StudentList = props => {
  const { students, selectedStudent } = props;

  return (
    <tbody>
      {students.map(student => (
        <tr key={student.id} student={student}>
          <td>{student.fullName}</td>
          <td className="default" onClick={() => selectedStudent(student)}>
            details
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default StudentList;

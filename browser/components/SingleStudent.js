import React from 'react';

const SingleStudent = props => {
  const { student } = props;
  const { fullName, tests } = student;

  console.log('here all props: ', props);

  const avgGrade = arr => {
    return Math.round(
      arr.map(test => test.grade).reduce((x, y) => x + y) / arr.length
    );
  };

  return (
    <div>
      <h2>{fullName}</h2>
      <h2>Average grade: {avgGrade(tests)}%</h2>
      <table>
        <tbody>
          {tests.map(test => (
            <tr key={test.id}>
              <th>{test.subject}%</th>
              <th>{test.grade}%</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SingleStudent;

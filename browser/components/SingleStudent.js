import React from 'react';

const SingleStudent = props => {
  const { oneStudent, allTests } = props;
  const { fullName } = oneStudent;
  console.log('here all tests: ', allTests);

  return (
    <div>
      <h2>{fullName}</h2>
      <h2>Average grade: 75%</h2>
      <table>
        <tbody>
          <tr>
            <th>Subject </th>
            <th>Grade</th>
          </tr>

          <tr>
            <td>Computer Science</td>
            <td>75</td>
          </tr>
          <tr>
            <td>Art</td>
            <td>75%</td>
          </tr>
          <tr>
            <td>IURE</td>
            <td>75%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleStudent;

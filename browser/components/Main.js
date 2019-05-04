import React from 'react';
import axios from 'axios';
import StudentList from './studentList';
import SingleStudent from './SingleStudent';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      test: '',
      oneStudent: {},
      allTests: {},
    };
    this.selectedStudent = this.selectedStudent.bind(this);
    //this.allTests = this.allTests.bind(this);
  }

  async selectedStudent(id) {
    try {
      const { data } = await axios.get(`/student/${id}`);
      this.setState({ oneStudent: data });
    } catch (error) {
      console.error('pick is not working');
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/test');
      this.setState({ allTests: data });
    } catch (error) {
      console.error('no tests');
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (error) {
      console.error('Opps!');
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>

        <StudentList
          students={this.state.students}
          selectedStudent={this.selectedStudent}
        />
        {this.state.oneStudent.id ? (
          <SingleStudent
            oneStudent={this.state.oneStudent}
            allTests={this.state.allTests}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Main;

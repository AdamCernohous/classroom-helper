import { useEffect, useState } from 'react';

const Student = () => {
  const [student, setStudent] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:4000/students');
      const data = await response.json();
      setStudent(data[Math.floor(Math.random() * data.length) + 1]);
      console.log(student);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Student</h1>
      <p>{student.firstName + " " + student.lastName}</p>
    </div>
  );
}
 
export default Student;
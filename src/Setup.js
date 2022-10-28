import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Setup = () => {
  const [students, setStudents] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch('http://localhost:4000/students')
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [students]);

  const deleteStudent = (id) => {
    fetch('http://localhost:4000/students/' + id, {
      method: "DELETE"
    });
  }

  return (
    <div>
      <h1>Setup</h1>
      {
        students.map(student => {
          return (
            <div key={student.id}>
              <p>{student.firstName + " " + student.lastName}</p>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </div>
          )
        })
      }
      <form onSubmit={handleSubmit((data) => {
        fetch('http://localhost:4000/students', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: 0,
            firstName: data.firstName,
            lastName: data.lastName
          })
        });
      })}>
        <input {...register("firstName", { required: true })} placeholder="FirstName" />
        <input {...register("lastName", { required: true })} placeholder="LastName" />
        <input type={"submit"} />
      </form>
    </div>
  );
}
 
export default Setup;
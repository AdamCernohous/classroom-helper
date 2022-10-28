import { useEffect, useState } from 'react';

const Order = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/students')
      .then(res => res.json())
      .then(data => setStudents(data.sort(() => Math.random() - 0.5)));
  }, []);

  return (
    <div>
      <h1>Order</h1>
      {
        students.map(student => {
          return (
            <div key={student.id}>
              <p>{student.firstName + " " + student.lastName}</p>
            </div>
          )
        })
      }
    </div>
  );
}
 
export default Order;
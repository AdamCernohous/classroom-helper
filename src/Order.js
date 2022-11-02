import { useEffect, useState } from 'react';

const Order = () => {
  const [students, setStudents] = useState([]);

  const getData = async () => {
    await fetch('http://localhost:4000/students')
      .then(res => res.json())
      .then(data => setStudents(data.sort(() => Math.random() - 0.5)));
  }

  useEffect(() => {
    getData();
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
      <button onClick={getData}>Zamíchat studenty🤪</button>
    </div>
  );
}
 
export default Order;
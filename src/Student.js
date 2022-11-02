import { useEffect, useState } from 'react';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [luckyOne, setLuckyOne] = useState({
    id: 0,
    firstName: "Mike",
    lastName: "Oxmall"
  });

  const getData = async () => {
    await fetch('http://localhost:4000/students')
    .then(res => res.json())
    .then(data => {
      setStudents(data);
      console.log(data);
    })
    .catch(err => console.log(err))
  }

  const pickLuckyOne = () => {
    var r = Math.floor(Math.random() * students.length);
    setLuckyOne(students[r]);
    console.log(luckyOne)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Student</h1>
      <p>{luckyOne.firstName + " " + luckyOne.lastName}</p>
      <button onClick={pickLuckyOne}>Vybrat studenta😈</button>
    </div>
  );
}
 
export default Student;
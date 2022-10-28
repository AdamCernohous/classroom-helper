import { useState } from "react";
import { useForm } from 'react-hook-form';

const Random = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [random, setRandom] = useState(0);
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h1>Random</h1>
      <form onSubmit={handleSubmit((data) => {
        setRandom(Math.floor(Math.random() * (parseInt(data.max) - parseInt(data.min))) + parseInt(data.min));
      })}>
        <label for="min">{min}</label>
        <input id="min" {...register("min", { required: true, min: 1, max: 100, value: 1 })} onChange={e => setMin(e.target.value)} type={"range"} />
        <label for="min">{max}</label>
        <input id="max" {...register("max", { required: true, min: 1, max: 100, value: 100 })} onChange={e => setMax(e.target.value)} type={"range"} />
        <input type={"submit"} value="Generate" />
        <p>{random}</p>
      </form>
    </div>
  );
}
 
export default Random;
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onsubmit(data){
    console.log(data);
  }

  return (
   <div>
     <form action="" onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label >First Name</label>
        <input type="text" 
        {...register('firstname',
        { required: true,
          minLength: {value: 3, message: "Min length is 3"},   
          maxLength: {value: 7, message: "max length is 7"} },
          
        )}/>
        {errors.firstname && <p>{errors.firstname.message}</p>}
      </div>
      <div>
        <label >Middel Name</label>
        <input type="text" {...register('middle name')}/>
      </div>
      <div>
        <label >Last Name</label>
        <input type="text" {...register('last name')}/>
      </div>
      <input type="submit" value="Submit"/>
     </form>
   </div>
  )
}

export default App

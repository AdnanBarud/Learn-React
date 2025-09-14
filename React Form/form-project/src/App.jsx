import { useForm } from "react-hook-form"
import './App.css'

function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onsubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }

  return (
   <div>
     <form action="" onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label >First Name</label>
        <input type="text" 
        className={errors.firstname ? "error-border" : ""}
        {...register('firstname',
        { required: true,
          minLength: {value: 3, message: "Min length is 3"},   
          maxLength: {value: 7, message: "max length is 7"} },
          
        )}/>
        {errors.firstname && <p className="error-msg">{errors.firstname.message}</p>}
      </div>
      <div>
        <label >Middel Name</label>
        <input type="text" {...register('middlename')}/>
      </div>
      <div>
        <label >Last Name</label>
        <input type="text" {...register('lastname', {
          patterns: {
            value: /^[A-Za-z]+$/i,
            message: "Alphabetical characters only"
          }
})}/>
        {errors.lastname && <p className="error-msg">{errors.lastname.message}</p>} 
      </div>
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? 'submitting' : 'submit'}/>
     </form>
   </div>
  )
}

export default App

import { useState } from 'react';

export const useForm = (inicialState = []) => {
 const[formValues, setFormValues] = useState(inicialState);
 const handleInputChange = ({ target }) => {
     setFormValues({
         ...formValues,
         [ target.name ]: target.value,
     })
 }

 return [ formValues, handleInputChange]

}

import { useState } from 'react'

const useForm = (initialData, onValidate) => {

    const [user, setUser] = useState(initialData)
    const[loading, setLoading] = useState(false)
    const[errors, setErrors] = useState({})

    const handleChange = ({target}) => {
        const {name, value} = target;
        setUser((prev) =>({
            ...prev,
            [name]: value
        }))
    }

    const sendUser={
        firstName: user.nombre,
        lastName: user.apellido,
        email: user.email,
        password: user.password
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = onValidate(user)
        setErrors(err)
        
        if(Object.keys(err).length===0){
            setLoading(true);
            fetch('http://todo-api.ctd.academy:3000/v1/users',
            {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify(sendUser)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.succes === "true" && setUser(initialData)
                setLoading(false)
            })
        }
    }

    return {user, errors, loading, handleChange, handleSubmit}
}
export default useForm

// {
//     "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zdHJpY21hcmlhbm9AZ21haWwuY29tIiwiaWQiOjE0LCJpYXQiOjE2NzgzNzQ0NzB9.J7uAuxwD5B10uD_ilhGPujLYZYVSC_kSfCTa6UPM6mg"
// }
import React, { useState } from 'react'


const userFormLogin = (initialData, onValidate) =>{

    const [user, setUser] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const[errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setUser((prev) =>({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = onValidate(user);
        setErrors(err)

        if(Object.keys(err).length === 0){
            setLoading(true)
            fetch('http://todo-api.ctd.academy:3000/v1/users/login',{
                method: 'POST',
                body: JSON.stringify({
                    email: user.email,
                    password: user.password
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },  
            })
            .then(response =>{
                console.log(response);
                if(response.ok != true){
                    alert('Usuario o contraseña incorrecto')
                }
                return response.json()
            })
            .then((data) => {
                if(data.jwt){
                    localStorage.setItem("jwt",JSON.stringify(data))
                    location.replace('/')
                }
            })
            .catch(error => {
                console.log('promesa rechazada')
                console.log(error)
            })
        }
    }
    return {user, handleSubmit, handleChange, errors, loading}
}

export default userFormLogin

//localStorage.getItem(JSON.parse(jwt))
import {createContext, useContext, useState } from "react"
import { handleLogin } from "../Api"

//nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => { },
    doLogout: () => { }
}

//context
const AuthContext = createContext(initialAuthState)

//custom hooks
const useAuth = () => {
    return useContext(AuthContext)
}

//provider
const AuthProvider = ({children}) =>  {
    //state 
    const [isLoggedin, setIsLoggedin] = useState(false)

    //function
    const doLogin = async (email, password) => {
    //memanggil api dengan data email & password
    console.log(email, password)
    //memanggil menggunakan axios
    const apiresult = await handleLogin(email, password)
    console.log(apiresult)
    //jika berhasil setisloggedin (true)
    //simpan token kedalam local storage

    //jika gagal tampilkan peringatan
    
        setIsLoggedin(true)
    }

    const doLogout = () => {
        setIsLoggedin(false)
    }

//return
return (
    <AuthContext.Provider value={{ isLoggedin, doLogin, doLogout }}>
        {children}
    </AuthContext.Provider>
)
}

//export provider & hooks
export {AuthProvider, useAuth}
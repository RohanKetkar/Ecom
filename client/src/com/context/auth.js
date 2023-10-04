import {useState , useEffect , useContext , createContext} from 'react'
import axios from 'axios'
const Authcontext = createContext()


const Authprovider = ({children}) =>{
    const [auth , setauth] = useState({
        user:null,
        token:""
    })  
    //setting def axios
    axios.defaults.headers.common["Authorization"] = auth?.token
   useEffect(()=>{
const data = localStorage.getItem('auth')
if(data){
    let parsedata = JSON.parse(data)
    setauth({
        ...auth,
        user:parsedata.user,
        token:parsedata.token
    })
}
    },[])
    return (
        <Authcontext.Provider value= {[auth , setauth]}>
            {children}
        </Authcontext.Provider>
    )
}

//custom hook

const useAuth = ()=> useContext(Authcontext)
export {useAuth , Authprovider}
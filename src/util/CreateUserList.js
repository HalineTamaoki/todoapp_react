import { useMemo, useState, useEffect }  from 'react'
import UseTodoContext from './UseContext'

//Create the list of all users and return this list
function CreateUserList() {
    const { getAll, all } = UseTodoContext(); //sees the api and create the list
    const [finalUserList, setfinalUserList] = useState([])
    let list = useMemo(() => [], []);

//this allow to continue getting the list while it isn't loaded    
    if (!all.loadedAll){
    getAll();
    }

//this storage the list on a local variable    
    else{
    list = all.listAll
    }

//this just garantee that the list will have the format that is desired    
    useEffect(() => {
    let userList = [];
    
    if(list.length>0){
        list.forEach(element => {
        userList.push(element.userId)
        });  
        setfinalUserList([...new Set(userList)]) //this allow that the final list will have unique values
    }
    }, [list])
    
    return finalUserList
} 

export default CreateUserList
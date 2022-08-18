//saves anything that is changed on the localstorage

function SaveLocalStorage(id, title, completed, userId, action) {
    const currentList = JSON.parse(localStorage.getItem("all"));

//if a task is edited or marked as completed
    if (action === "complete" || action ==="edit"){
        let newList = [];

        currentList.forEach(element => {
            if(element.id === id){
                newList.push({
                    userId: userId, 
                    id: id, 
                    title: title, 
                    completed: completed
                })
            }    

            else{
                newList.push(element)
            }
        });

        localStorage.removeItem("all"); //remove the current list from local storage
        localStorage.setItem("all", JSON.stringify(newList)) //add the new list to local storage
    }

//if a task is removed
    else if(action==="delete"){
        let newList = [];

        currentList.forEach(element => {
            if(element.id !== id){
                newList.push(element)
            }    
        });

        localStorage.removeItem("all");
        localStorage.setItem("all", JSON.stringify(newList))
    }

//if a task is added
    else if(action==="add"){
        currentList.push({
            userId: userId, 
            id: id, 
            title: title, 
            completed: completed
        })

        localStorage.removeItem("all");
        localStorage.setItem("all", JSON.stringify(currentList))
    }

}

export default SaveLocalStorage
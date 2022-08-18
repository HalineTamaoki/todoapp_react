//get the list from localstorage

function GetListPerUser(userid) {
    let listTasks = [];

    const listAll = JSON.parse(localStorage.getItem("all"))
    listAll.forEach(element => {
      if(element.userId === parseInt(userid.userid)){
        listTasks.push(element)
      }
    });
   
    return listTasks
}

export default GetListPerUser
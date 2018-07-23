function GetDate(slash = '/'){
    var d = new Date();
    var result = d.getDate() + slash + d.getMonth() + slash + d.getFullYear();
    console.log(result);
    return result;
}
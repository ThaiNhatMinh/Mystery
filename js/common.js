function _GetDate(slash = '/')
{
    var d = new Date();
    var result = d.getDate() + slash + d.getMonth() + slash + d.getFullYear();
    console.log(result);
    return result;
}


module.exports = 
{
    GetDate: function(slash = '/')
    {
        var d = new Date();
        var result = d.getDate() + slash + (d.getMonth()+1) + slash + d.getFullYear();
        console.log(result);
        return result;
    }
};

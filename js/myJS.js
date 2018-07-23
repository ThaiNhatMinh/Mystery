function GetDate(slash = '/'){
    var d = new Date();
    var result = d.getDate() + slash + d.getMonth() + slash + d.getFullYear();
    console.log(result);
    return result;
}

const {ipcRenderer} = require('electron')

const SaveBtn = document.getElementById('Save');
SaveBtn.addEventListener('click',function()
{
    ipcRenderer.send('update-notify-value',document.getElementById('TextNode').value);
})
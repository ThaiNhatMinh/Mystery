function GetDate(slash = '/'){
    var d = new Date();
    var result = d.getDate() + slash + d.getMonth() + slash + d.getFullYear();
    console.log(result);
    return result;
}

const {ipcRenderer} = require('electron')
const {dialog} = require('electron').remote;

const SaveBtn = document.getElementById('Save');
SaveBtn.addEventListener('click',function()
{
    ipcRenderer.send('SaveData',document.getElementById('TextNode').value);
})
const PathBtn = document.getElementById('PathDialog');
PathBtn.addEventListener('click',function()
{
    var path = dialog.showOpenDialog({properties:['openDirectory']});
    ipcRenderer.send('SetPath',path[0]);
})
const fs=require('fs');
let d='';
fs.readFileSync('file.txt',(err,data)=>
{
    if(err===null)
    {
        d=data.toString();
        console.log(data.toString());

    }
    else
    {
    console.log(err.message);
}});

fs.writeFile('file.txt',d + 'hello every one ',(err) =>
{
    if(err===null)
    {
        console.log('successfully entered');

    }
    else
    {
        console.log(err.message);
    }
});
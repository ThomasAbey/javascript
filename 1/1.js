function result()
{
var op= document.getElementById('operator').value;
var fnum=document.getElementById('fnum').value;
var lnum=document.getElementById('lnum').value;
var result
fnum=Number(fnum)
lnum=Number(lnum)

switch (op) {
    case '+':
        result=fnum+lnum
        break;
    case '-':
        result=fnum-lnum
        break;
    case '*':
        result=fnum*lnum
        break;
    case '/':
        result=fnum/lnum
        break;

    default:
        break;
}
    document.getElementById('data').innerHTML=result;
}
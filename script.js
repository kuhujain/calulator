function appendvalue(char)
{
    const question=document.getElementById("ques")
    if(char==='c')
    {
        question.value=" ";
    }
    else if( char==='=')
    {
     const result=eval(question.value)
     question.value=result;
    }
    else{
     question.value= question.value + char; 
    }

}
function AddNum(){
    let num1 = document.getElementById('firstbox').value 
    let num2 = document.getElementById('secondbox').value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let h1 = document.getElementById("result")
    res= num1+num2
    h1.innerHTML="Result: " + res
}

function SubNum(){
    let num1 = document.getElementById('firstbox').value 
    let num2 = document.getElementById('secondbox').value
    let h1 = document.getElementById("result")
    res= num1-num2
    h1.innerHTML="Result: " + res
}

function MulNum(){
    let num1 = document.getElementById('firstbox').value 
    let num2 = document.getElementById('secondbox').value
    let h1 = document.getElementById("result")
    res= num1*num2
    h1.innerHTML="Result: " + res
}

function DivNum(){
    let num1 = document.getElementById('firstbox').value 
    let num2 = document.getElementById('secondbox').value
    let h1 = document.getElementById("result")
    res= num1/num2
    h1.innerHTML="Result: " + res
}

function PowNum(){
    let num1 = document.getElementById('firstbox').value 
    let num2 = document.getElementById('secondbox').value
    let h1 = document.getElementById("result")
    res= num1**num2
    h1.innerHTML="Result: " + res
}
console.log('잘불러왔니?')

let elInputUsername = document.querySelector('#username')
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

//아이디 입력창(elInputUsername)에 글자를 키보드로 입력할때
//함수가 이벤트핸들러

elInputUsername.onkeyup = function(){

//글자수가 네개 이상이면
if(isMoreThan4Length(elInputUsername.value)){
    //성공메세지가 보여야함
   elSuccessMessage.classList.remove('hide')
    //실패 메세지가 가려져야함
   elFailureMessage.classList.add('hide')
}
else{
    //성공메세지가 가려져야 함
    elSuccessMessage.classList.add('hide')
    //실패메세지가 보여야 함
    elFailureMessage.classList.remove('hide')
}
}

function isMoreThan4Length(value){
    return value.length >= 4
}


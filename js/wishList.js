const wishForm = document.querySelector("#wish-form");
const wishInput = document.querySelector("#wish-form input");
const wishList = document.querySelector("#wish-list");

let wishsarr = [];

function saveWish(){
    localStorage.setItem("wishs", JSON.stringify(wishsarr));
}

function delWish(event){
    const li = event.target.parentElement;//이벤트가 발생한 target의 parentElement 저장
    li.remove();
    wishsarr = wishsarr.filter((wish) => wish.id !== parseInt(li.id));//true 이면 저장, flase이면 저장 x
    saveWish();
}

function paintWish(newWish){
    const li = document.createElement("li");
    li.id = newWish.id;//지울때 사용
    const span = document.createElement("span");
    span.innerText = newWish.text;//wish를 span안에 넣기
    const button = document.createElement("buttton");//삭제 버튼 만들기
    button.innerText = "❌";
    button.addEventListener("click", delWish)//이벤트 리스너를 통해 버튼 누르면 del함수
    li.appendChild(span);//li 마지막에 span태그 넣기
    li.appendChild(button);//li 마지막에 button 넣기
    wishList.appendChild(li);//wishLish 마지막에 li 넣기
}

function wishSubmit(event){
    event.preventDefault();// 새로고침 방지
    const newWish = wishInput.value;//newWish 변수에 input 값 저장
    wishInput.value = "";
    const newWishObj = {
        text : newWish,//text에 newWish 값 저장
        id : Date.now(),//랜덤 숫자
    }
    wishsarr.push(newWishObj);//wishsarr배열에 newWishObj 넣기
    paintWish(newWishObj);
    saveWish();
}


wishForm.addEventListener("submit", wishSubmit);

const savedWishs = localStorage.getItem("wishs");

if(savedWishs !== null){//savedWishs 즉 wishs 배열이 null이 아니라면
    const parsedWishs = JSON.parse(savedWishs)
    wishsarr = parsedWishs;//이전 wishs 저장
    parsedWishs.forEach(paintWish);//각 item 마다 painWish 함수 실행
}
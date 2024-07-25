(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = [`바다 갈까?`, `계곡 갈까?`, `워터파크 갈까?`, `해외 갈까?`, `호캉스 어때?`];
    let index = 0;
    let currentTxt = txtArr[index].split();
    
    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random()*100));
        }else{//글자가 없으면
            currentTxt = spanEl.textContent.split();
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt(){
       currentTxt.pop();
       spanEl.textContent = currentTxt.join();
       if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random()*100));
       }else{//글자가 없으면
        index = (index + 1)% txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
       }

    }
    writeTxt();

})();
// 스크롤시 header 클래스 추가 삭제 
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browerScrollY = window.scrollY;
    if(browerScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}

//메뉴 스크롤 이동
/* move.js */
/* 애니메이션 스크롤 이동 */
const animationMove = function(selector){
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };
  // 스크롤 이벤트 연결하기
  const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
  for(let i = 0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click', function(e){
      const target = this.dataset.target;
      animationMove(target);
    });
  }
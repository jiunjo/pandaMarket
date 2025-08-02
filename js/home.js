// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", function () {
  console.log("판다마켓 웹사이트가 로드되었습니다.");

  // 내부 페이지 링크 처리
  document.querySelectorAll('a[href^="/"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // 루트 페이지('/')는 제외하고 처리
      if (this.getAttribute("href") !== "/") {
        // 로그인, 상품, 개인정보 정책, FAQ 페이지는 준비 중
        if (
          this.getAttribute("href") === "/login" ||
          this.getAttribute("href") === "/items" ||
          this.getAttribute("href") === "/privacy" ||
          this.getAttribute("href") === "/faq"
        ) {
          e.preventDefault();
          alert("이 페이지는 준비 중입니다: " + this.getAttribute("href"));
        }
      }
    });
  });

  // 반응형 이미지 처리
  function handleResponsiveImages() {
    const windowWidth = window.innerWidth;
    const heroSection = document.querySelector(".hero-section");
    const hotItemsSection = document.querySelector(".hot-items-section");
    const searchSection = document.querySelector(".search-section");
    const registerSection = document.querySelector(".register-section");
    const chatSection = document.querySelector(".chat-section");

    if (windowWidth <= 768) {
      // 모바일 화면에서 이미지 크기 조정
      if (heroSection) {
        const pandaImg = heroSection.querySelector(".panda-img");
        if (pandaImg) {
          pandaImg.style.maxWidth = "200px";
          pandaImg.style.width = "200px";
        }
      }
    } else {
      // 데스크탑 화면에서 이미지 크기 복원
      if (heroSection) {
        const pandaImg = heroSection.querySelector(".panda-img");
        if (pandaImg) {
          pandaImg.style.maxWidth = "300px";
          pandaImg.style.width = "300px";
        }
      }
    }
  }

  // 초기 로드 시 실행
  handleResponsiveImages();

  // 화면 크기 변경 시 실행
  window.addEventListener("resize", handleResponsiveImages);
});

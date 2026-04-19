
// 페이지 콘텐츠 데이터
const contentData = {
    home: {
        title: "홈 화면",
        text: "현재 윈도우 실험실에서 프론트엔드 기능을 테스트 중입니다."
    },
    about: {
        title: "소개",
        text: "Hooni님은 52세 영어 튜터이자 개발자입니다. 리눅스 서버 3대를 운영 중이죠!"
    },
    server: {
        title: "서버 현황",
        text: "Kali, Ubuntu, Mint 서버가 깃허브 백업 시스템과 연결되어 있습니다."
    }
};

// 내용을 바꿔주는 함수
function changeContent(page) {
    const area = document.getElementById('content-area');
    const data = contentData[page];

    area.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.text}</p>
        <p style="color: grey; font-size: 0.9rem; margin-top: 10px;">
            (마지막 업데이트: ${new Date().toLocaleTimeString()})
        </p>
    `;
    
    console.log(`${page} 페이지로 전환되었습니다.`);
}
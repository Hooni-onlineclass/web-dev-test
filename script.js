
// 페이지 콘텐츠 및 테마 색상 데이터
const contentData = {
    home: {
        title: "🏠 홈 화면",
        text: "현재 윈도우 실험실에서 프론트엔드 기능을 테스트 중입니다.",
        color: "#4834d4" // 진한 파랑
    },
    about: {
        title: "👨‍🏫 소개",
        text: "Hooni님은 52세 영어 튜터이자 개발자입니다. 리눅스 서버 3대를 운영 중이죠!",
        color: "#eb4d4b" // 부드러운 빨강
    },
    server: {
        title: "🖥️ 서버 현황",
        text: "Kali, Ubuntu, Mint 서버가 깃허브 백업 시스템과 연결되어 있습니다.",
        color: "#6ab04c" // 산뜻한 초록
    }
};

function changeContent(page) {
    const area = document.getElementById('content-area');
    const container = document.querySelector('.container');
    const data = contentData[page];

    // 1. 내용 변경 (기존 로직)
    area.innerHTML = `
        <h2 style="color: ${data.color}">${data.title}</h2>
        <p>${data.text}</p>
        <p style="color: grey; font-size: 0.8rem; margin-top: 20px;">
            업데이트: ${new Date().toLocaleTimeString()}
        </p>
    `;

    // 2. 테두리 색상 실시간 변경 (직관적인 피드백)
    container.style.borderTop = `10px solid ${data.color}`;
    container.style.transition = "all 0.5s ease";
    
    console.log(`${page} 테마로 변경되었습니다.`);
}
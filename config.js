// 에이랑 공용달력 설정 — 이 값들은 공개되어도 괜찮은 값이에요(보안은 Firestore 규칙이 담당).
window.AIRANG_CONFIG = {
  // Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → SDK 설정의 firebaseConfig 값을 그대로 붙여 넣으세요.
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    appId: ""
  },
  // Google Cloud 콘솔 → API 및 서비스 → 사용자 인증 정보 → OAuth 2.0 클라이언트 ID(웹 애플리케이션)
  googleClientId: ""
};

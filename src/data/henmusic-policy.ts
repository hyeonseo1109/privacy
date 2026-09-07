import type { PrivacyPolicy } from "@/types/privacy-policy";

export const henMusicPrivacyPolicy = {
  appName: "HenMusic",
  slug: "henmusic",
  navLabel: "HenMusic",
  developer: "HenDo",
  contactEmail: "alsgustj2@naver.com",
  effectiveDate: "2026년 9월 7일",
  summary:
    "HenMusic은 기기의 로컬 음악을 재생하고 사용자가 선택한 앨범 커버와 가사를 관리합니다. 음원 파일은 개발자 서버로 전송하지 않으며, 사용자가 온라인 앨범 커버 검색을 실행한 경우에만 검색어가 MusicBrainz로 전송됩니다.",
  sections: [
    {
      id: "overview",
      title: "1. 개인정보 처리방침 개요",
      paragraphs: [
        "HenDo(이하 “개발자”)가 제공하는 HenMusic(이하 “앱”)은 로컬 음악 플레이어 기능을 제공하기 위해 기기 내 음악 정보와 사용자 설정을 처리합니다.",
        "앱은 회원가입, 로그인, 광고, 분석 SDK 또는 개발자가 운영하는 사용자 데이터 수집 서버를 사용하지 않습니다.",
      ],
    },
    {
      id: "local-data",
      title: "2. 기기에서 접근하고 처리하는 정보",
      items: [
        "음악 파일의 URI, 파일명, 경로, 곡명, 아티스트, 앨범, 재생 시간, 트랙 번호, 추가·수정 시각 및 embedded artwork",
        "사용자가 작성하거나 LRC 파일에서 가져온 가사와 싱크 시간",
        "좋아요, 재생 횟수와 최근 재생 시각, 현재 재생목록, 재생 위치, 반복·셔플 상태",
        "사용자 앨범, 폴더, 정렬 및 목록/카드 보기 설정",
        "사용자가 Android 사진 선택기로 직접 선택한 이미지와 앱이 생성한 1:1 커버 사본",
        "플로팅 가사 위치, 테마, 스캔 폴더 및 기타 앱 설정",
      ],
    },
    {
      id: "purpose",
      title: "3. 정보 이용 목적",
      items: [
        "로컬 음악 검색·정렬·재생과 백그라운드 재생 제공",
        "재생목록, 좋아요, 많이 들은 곡, 사용자 앨범·폴더 및 설정 복원",
        "가사 표시, LRC 가져오기, 직접 싱크 편집 및 플로팅 가사 제공",
        "사용자가 요청한 음악 태그와 앨범 커버 수정",
      ],
    },
    {
      id: "network",
      title: "4. 외부 서비스와 전송 정보",
      paragraphs: [
        "사용자가 ‘앨범 커버 검색’을 직접 실행하면 입력한 검색어(보통 곡명, 아티스트, 앨범명 조합)가 MusicBrainz로 전송됩니다. MusicBrainz가 반환한 release ID로 Cover Art Archive의 커버 이미지 미리보기를 불러옵니다.",
        "Cover Art Archive 커버는 이미지별 저작권이 달라 앱에서 미리보기만 제공하며 자동으로 저장·자르기·음원 파일에 삽입하지 않습니다.",
        "Google Play 공개 release에서는 LRCLIB 원격 가사 검색이 비활성화됩니다. LRCLIB의 가사 콘텐츠 표시·저장·수정 권한이 명확해지거나 별도 라이선스를 확보하기 전에는 원격 가사 metadata를 전송하지 않습니다.",
        "음원 파일, 사용자가 작성한 가사, 재생 기록, 좋아요, 사용자 앨범·폴더 정보는 MusicBrainz나 Cover Art Archive로 전송하지 않습니다.",
      ],
    },
    {
      id: "storage",
      title: "5. 저장, 보유 및 백업",
      paragraphs: [
        "앱 DB와 설정은 기기의 앱 전용 저장소에 보관됩니다. 사용자가 직접 선택한 커버의 편집 사본도 앱 전용 저장소에 보관됩니다.",
        "Android 자동 백업이 켜져 있는 기기에서는 앱 DB와 DataStore 설정이 사용자의 Google 계정 백업에 포함될 수 있습니다. 편집한 커버 이미지 파일은 현재 백업 규칙에 포함되지 않습니다.",
      ],
    },
    {
      id: "permissions",
      title: "6. Android 권한",
      items: [
        "음악 및 오디오 읽기: MediaStore에 등록된 로컬 음악을 검색하고 재생합니다.",
        "알림: 백그라운드 재생 제어와 재생 상태를 표시합니다.",
        "포그라운드 미디어 재생: 화면이 꺼지거나 다른 앱을 사용할 때도 음악을 재생합니다.",
        "다른 앱 위에 표시: 사용자가 플로팅 가사를 켠 경우에만 가사 오버레이를 표시합니다.",
        "인터넷: 사용자가 실행한 MusicBrainz/Cover Art Archive 커버 검색과 미리보기에 사용합니다.",
        "사진 선택: Android 시스템 사진 선택기에서 사용자가 직접 고른 이미지만 접근하며 전체 사진 권한을 요청하지 않습니다.",
      ],
    },
    {
      id: "editing",
      title: "7. 음원 파일 변경",
      paragraphs: [
        "곡 정보 또는 앨범 커버 변경은 사용자가 명시적으로 저장을 선택하고 Android의 MediaStore 쓰기 승인을 완료한 경우에만 수행됩니다. 앱은 승인된 MP3/M4A/FLAC 파일의 metadata를 수정할 수 있습니다.",
      ],
    },
    {
      id: "deletion",
      title: "8. 삭제 방법",
      items: [
        "가사, 앨범, 폴더와 커버는 앱의 해당 삭제 기능으로 지울 수 있습니다.",
        "Android 설정의 ‘앱 정보 → 저장공간 → 데이터 삭제’ 또는 앱 삭제로 앱 전용 데이터를 지울 수 있습니다.",
        "음원 파일 삭제는 별도의 Android 확인 화면에서 사용자가 승인해야 수행됩니다.",
      ],
    },
    {
      id: "children",
      title: "9. 아동의 개인정보",
      paragraphs: [
        "앱은 연령을 확인하지 않으며 아동의 개인정보를 의도적으로 수집하지 않습니다. 회원가입, 광고 또는 맞춤형 분석을 제공하지 않습니다.",
      ],
    },
    {
      id: "changes",
      title: "10. 처리방침 변경",
      paragraphs: [
        "기능, 권한 또는 외부 서비스가 변경되면 이 페이지를 갱신하고 변경된 시행일을 표시합니다.",
      ],
    },
    {
      id: "contact",
      title: "11. 문의처",
      paragraphs: [
        "HenMusic의 데이터 처리에 대한 문의는 아래 이메일로 보내 주세요.",
      ],
    },
  ],
} satisfies PrivacyPolicy;

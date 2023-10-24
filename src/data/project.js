
export function getProjectTitles() {
    // 데이터에서 'title' 속성만 추출하여 새로운 배열을 생성합니다.
    const projectTitles = projectData.map((project) => project.title);
    return projectTitles;
}

export function getProjectListData() {
    const projectListData = projectData.map((project,idx) => (
    {  
        id : idx,
        title : project.title,
        subtitle: project.subtitle,
        tag : project.tag,
        name : project.name
    })
    );
    return projectListData
}


export function getProjectById(id) {
    const project = projectData.find( (item) => (item.name == decodeURIComponent(id)));
    return project
}
export function getProjectByIndex(idx) {
    
    const project = projectData[idx];
    return project
}

//리스트 순서 랜덤으로 할거면 쓸 거
function shuffleArray(array) {
    const shuffledArray = array.slice(0,18); 
    const teamArray = array.slice(19,);
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    return [...teamArray, ...shuffledArray];
  }


// 엑셀에 취합 후 변환해 삽입
export const projectData = [
    
        {
            "index": 0,
            "tag": "TEAM",
            "title": "Invitation to Remininsce",
            "subtitle": "추억으로의초대",
            "description": "오마주는 필연적으로 과거를 현재에 재현할 것을 요한다. 이렇게 재현된 과거는 수용자들이 자신의 추억 속으로 몰입할 수 있는 매개체가 된다. 그렇게 촉발된 추억에 수용자가 몰입할 때, 비로소 오마주가 성립된다.  \n 우리팀은 각자 다른 기억을 가지고 있는 사람들이 저마다의 추억과 연결될 수 있는 소재로 ‘장소’를 채택했다. 사람들은 항상 특정한 장소에 머무르며, 그곳은 기억을 담고 있다.  장소를 통해 관객이 기억을 떠올려 기억 속 공간을 재현하고 추억에 몰입할 수 있도록 초대하고자 한다.",
            "name": "웹팀",
            "members": "이진희, 김유민, 김유진, 배유림, 엄채연",
            "filmTitle": "추억으로의 초대 : Intro",
            "filmBody": "이곳은 현재의 부산대 앞거리, 어라? 퍼즐 조각이다.\n퍼즐 조각들을 하나하나 맞춰갈수록 점점 드러나는 것은 과거의 부산대 앞거리 모습.\n재현된 과거의 풍경을 통해 각자의 추억속에 빠져보자.\n",
            "filmVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY",
            "interTitle": "추억으로의 초대 : Proto",
            "interBody": "1. 이것은 조금 특이한 초대장이다. 초대장 안에는 부산대학교 앞거리 풍경을 담은 퍼즐조각이 있다. \n기억을 떠올리듯 퍼즐을 맞춰보자. 그 끝에는 완성된 과거가 있고 그 모습을 통해 우리는 추억을 떠올리게 된다. \n 2. ‘지도앱’에서 각자의 특정한 장소를 선택해 퍼즐을 맞춤으로서 과거를 재현하고 각자의 추억에 몰입할 수 있도록 기획한 <추억으로 초대>의 프로토타입 버전으로, 부산대 앞거리로 장소를 한정해 개발되었다.",
            "interFormat": "web",
            "interMethod": "1. 화면의 초대장을 탭해 초대장을 연다. ||\n2. '현재'모습으로 된 퍼즐판에, '과거'모습의 퍼즐 조각을 맞춘다. ||\n3. 완성된 옛모습을 감상하며 추억에 잠긴다.",
            "interVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY"
           },
           {
            "index": 1,
            "tag": "TEAM",
            "title": "임시제목",
            "subtitle": "임시부제목",
            "description": "임시설명",
            "name": "디피팀",
            "members": "문관영, 김도연, 김민호, 박재현, 전서연",
            "filmTitle": "임시영상제목",
            "filmBody": "임시영상설명",
            "filmVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY",
            "interTitle": "임시인터제목",
            "interBody": "임시인터설명",
            "interFormat": "임시",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n4. 세번째 단계 입력",
            "interVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY"
           },
           {
            "index": 2,
            "tag": "TEAM",
            "title": "임시제목",
            "subtitle": "임시부제목",
            "description": "임시설명",
            "name": "도록팀",
            "members": "김현서, 박원영, 이세영, 전종규, 전혜성",
            "filmTitle": "임시영상제목",
            "filmBody": "임시영상설명",
            "filmVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY",
            "interTitle": "임시인터제목",
            "interBody": "임시인터설명",
            "interFormat": "임시",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n5. 세번째 단계 입력",
            "interVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY"
           },
           {
            "index": 3,
            "tag": "TEAM",
            "title": "임시제목",
            "subtitle": "임시부제목",
            "description": "임시설명",
            "name": "영상팀",
            "members": "민재현, 이민영, 김나연, 박찬유",
            "filmTitle": "임시영상제목",
            "filmBody": "임시영상설명",
            "filmVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY",
            "interTitle": "임시인터제목",
            "interBody": "임시인터설명",
            "interFormat": "임시",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n6. 세번째 단계 입력",
            "interVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY"
           },
    
        {
        "index": 4,
        "tag": "INDIVIDUAL",
        "title": "소유",
        "subtitle": "운!",
        "description": "우리는일생동안 더 나은 '나'가 되기 위해 끊임없이 노력한다. \n그 과정에서 ‘나’는 성공한 사람들의 경험을 오마주하여 자신의 성장과 성공을 추구하며 소유하고자 한다. 나의 컨셉에서는 '소유'를 내가 직접 행하는 행동과 연결짓고, 끊임없이 오마주의 대상을 닮아가는 것을 '성장'으로 정의한다.\n  따라서 노력과 성공의 경험을 소유하며 성장해 나가는 과정을 강조하며, 노력을 멈추지 말고 지속적으로 소유하여 성공을 이루어내는 메세지를 담고 있다.",
        "name": "김나연",
        "email": "yohotiger2680@gmail.com",
        "phone": "-",
        "instagram": "-",
        "url": "-",
        "posterTitle": "운삼기칠",
        "posterBody": "<운삼기칠>은 행운이 3할, 행함(소유)가 7할이라는 의미로 열심히 노력해 7할을 채우면 나머지 3할은 행운이 채워 완성한다는 뜻이다.\n\n",
        "interTitle": "운삼기칠",
        "interBody": "\n사용자가 플레이를 시작하면 만나게 되는 네잎 클로버는 성공의 경험을, 네잎 클로버를 찾는 행위는 ‘소유’를, 7개의 네잎 클로버를 찾고 난 후 보상을 받는 행위는 ‘성장’을, 마지막으로 보상 자체는 3할의 행운을 의미한다.\n\n사용자는 일련의 과정을 수행함으로써 짧은 시간동안 더 나은 ‘나’가 되기 위해 일생동안 수행할 성공 경험의 오마주를 체험하게 된다.\n\n모두의 더 나은 삶을 응원한다.",
        "interFormat": "unity",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n3. 세번째 단계 입력",
        "interVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY"
       },
       {
        "index": 5,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "김도연",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n4. 세번째 단계 입력"
       },
       {
        "index": 6,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "김민호",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n5. 세번째 단계 입력"
       },
       {
        "index": 7,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "김유민",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n6. 세번째 단계 입력"
       },
       {
        "index": 8,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "김유진",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n7. 세번째 단계 입력"
       },
       {
        "index": 9,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "김현서",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n8. 세번째 단계 입력"
       },
       {
        "index": 10,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "문관영",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n9. 세번째 단계 입력"
       },
       {
        "index": 11,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "민재현",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n10. 세번째 단계 입력"
       },
       {
        "index": 12,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "박원영",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n11. 세번째 단계 입력"
       },
       {
        "index": 13,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "박재현",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n12. 세번째 단계 입력"
       },
       {
        "index": 14,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "박찬유",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n13. 세번째 단계 입력"
       },
       {
        "index": 15,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "배유림",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n14. 세번째 단계 입력"
       },
       {
        "index": 16,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "엄채연",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n15. 세번째 단계 입력"
       },
       {
        "index": 17,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "이민영",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n16. 세번째 단계 입력"
       },
       {
        "index": 18,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "이세영",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n17. 세번째 단계 입력"
       },
       {
        "index": 19,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "이진희",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n18. 세번째 단계 입력"
       },
       {
        "index": 20,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "전서연",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n19. 세번째 단계 입력"
       },
       {
        "index": 21,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "전종규",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n20. 세번째 단계 입력"
       },
       {
        "index": 22,
        "tag": "INDIVIDUAL",
        "title": "임시",
        "subtitle": "임시부제",
        "name": "전혜성",
        "email": "mail.com",
        "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n21. 세번째 단계 입력"
       },
       
]

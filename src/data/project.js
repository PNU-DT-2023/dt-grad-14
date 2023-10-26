
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
            "name": "웹팀",
            "members": "이진희, 김유민, 김유진, 배유림, 엄채연",
            "title": "Invitation to Remininsce",
            "subtitle": "추억으로의초대",
            "description": "오마주는 필연적으로 과거를 현재에 재현할 것을 요한다. 이렇게 재현된 과거는 수용자들이 자신의 추억 속으로 몰입할 수 있는 매개체가 된다. 그렇게 촉발된 추억에 수용자가 몰입할 때, 비로소 오마주가 성립된다. \n\n 우리팀은 각자 다른 기억을 가지고 있는 사람들이 저마다의 추억과 연결될 수 있는 소재로 ‘장소’를 채택했다. 사람들은 항상 특정한 장소에 머무르며, 그곳은 기억을 담고 있다.  장소를 통해 관객이 기억을 떠올려 기억 속 공간을 재현하고 추억에 몰입할 수 있도록 초대하고자 한다.",
            "filmTitle": "추억으로의 초대: Intro",
            "filmBody": "이곳은 현재의 부산대 앞거리, 어라? 퍼즐 조각이다.\n\n퍼즐 조각들을 하나하나 맞춰갈수록 점점 드러나는 것은 과거의 부산대 앞거리 모습.\n\n재현된 과거의 풍경을 통해 각자의 추억속에 빠져보자.",
            "filmVideoURL": "유튜브 링크",
            "interTitle": "추억으로의 초대: Proto",
            "interBody": "1. 이것은 조금 특이한 초대장이다. 초대장 안에는 부산대학교 앞거리 풍경을 담은 퍼즐조각이 있다. \n기억을 떠올리듯 퍼즐을 맞춰보자. 그 끝에는 완성된 과거가 있고 그 모습을 통해 우리는 추억을 떠올리게 된다. \n2. ‘지도앱’에서 각자의 특정한 장소를 선택해 퍼즐을 맞춤으로서 과거를 재현하고 각자의 추억에 몰입할 수 있도록 기획한 <추억으로 초대>의 프로토타입 버전으로, 부산대 앞거리로 장소를 한정해 개발되었다.",
            "interFormat": "web",
            "interMethod": "1. 화면의 초대장을 탭해 초대장을 연다. ||\n2. '현재'모습으로 된 퍼즐판에, '과거'모습의 퍼즐 조각을 맞춘다. ||\n3. 완성된 옛모습을 감상하며 추억에 잠긴다.",
            "interVideoURL": "유튜브 링크"
           },
           {
            "index": 1,
            "tag": "TEAM",
            "name": "디피팀",
            "members": "김현서, 박원영, 이세영, 전종규, 전혜성",
            "title": "항해",
            "description": "우리는 어디로 향하고, 어떻게 그곳에 도달할 것인지에 대한 여정 속에서 오마주를 경험한다. 마침내 도착한 항해의 끝에 더욱 성장한 우리의 모습을 발견한다.",
            "filmTitle": "Run on: 계속하다",
            "filmBody": "우리는 존경하는 대상을 닮고 싶어 한다.\n\n그들을 본받기 위한 과정은 끊임없는 노력과 인내가 필요한 달리기와 비슷하다.\n\n자신의 의지로 그들과 가까워지는 것을 통해 존경과 존중을 표현할 수 있다.\n\n‘Run on: 계속하다’는 어떠한 환경에서도 계속해서 달려가는 모습을 담은 영상이다.",
            "interTitle": "Sending Credit",
            "interBody": "Credit: 칭찬, 명예롭게 하다.\n\n엔딩 크레딧은 이름을 언급하여 감사를 표하는 일반적인 형태로, 오마주의 한 방식이다.\n\n이 형식을 빌려 전시의 마지막에 감사의 마음을 전하는 공간을 마련했다.\n\n고마운 사람에게, 사랑하는 사람에게 크레딧을 보내보자. 각자의 크레딧은 어떤 형태로 나타날까.",
            "interFormat": "Web",
            "interMethod": "1. 전하고자 하는 메시지를 입력한다.\n\n2. 화면에 메시지가 출력된다.\n\n3. 특정 단어가 포함된 경우 이미지가 생성된다."
           },
           {
            "index": 2,
            "tag": "TEAM",
            "name": "도록팀",
            "members": "문관영, 김도연, 김민호, 박재현, 전서연",
            "title": "임시제목",
            "subtitle": "임시부제목",
            "description": "임시설명",
            "filmTitle": "임시영상제목",
            "filmBody": "임시영상설명",
            "interTitle": "임시인터제목",
            "interBody": "임시인터설명",
            "interFormat": "임시",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n3. 세번째 단계 입력"
           },
           {
            "index": 3,
            "tag": "TEAM",
            "name": "영상팀",
            "members": "민재현, 김나연, 박찬유, 이민영",
            "title": "Behind The Scene",
            "description": "위대한 걸작들은 어디서 비롯되는가? \n\n창작물 이면에는 수 많은 창작자들과 지난한 창작과정이 존재한다.\n\n아직 빛을 발하지 못한 작품이더라도, 그 뒤에 위치한 모든 창작자들의 순수한 열정은 그 자체로 아름다우며 존경스럽다.\n\n우리는 일련의 작품들을 통해 오늘도 더 나은 작품을 위해 고뇌하는 세상 모든 창작자들과 그들의 투쟁에 오마주를 표한다.",
            "filmTitle": "Close Up",
            "filmBody": "창작자 없이는 창작물도 없다.\n\n예술 이전에 사람이 존재한다.\n\n무결해 보이는 작품과 달리, 예술가는 인간이기에 때때로 고통스러워하기도, 좌절하기도 한다.\n\n이는 거장들도 마찬가지다. 그들의 인간적인 고민과 역경, 그리고 이를 예술로 승화시키려는 숭고한 노력은 작품보다 더욱 아름답다.\n\n그렇기에 우리의 오마주는 작품이 아닌 사람을 향한다.",
            "interTitle": "Reveal",
            "interBody": "창작의 여정은 무에서 유를 창조하는 행위로,\n\n창작자들은 그 과정에서 수많은 자기의심과 시행착오에 직면한다.\n\n그러나 그들의 끈질긴 인내와 뜨거운 열정은 이러한 난관을 극복하게 만든다.\n\n작은 눈송이가 모여 큰 눈밭을 이루듯,\n\n창작의 과정 또한 점점 축적되어 그 자체로도 숭고한 예술이 된다.\n\n관객은 눈을 매개로 그동안 작품에 가리어져 있던 창작 과정의 아름다움을 드러낸다.\n\n나아가 관객 또한 하나의 창작 과정을 경험하며 창작의 순수한 아름다움을 체험한다.",
            "interFormat": "Touch Designer",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n3. 세번째 단계 입력"
           },
           {
            "index": 4,
            "tag": "INDIVIDUAL",
            "name": "김나연",
            "title": "소유",
            "subtitle": "Get Lucky!",
            "description": "우리는 일생동안 더 나은 '나'가 되기 위해 끊임없이 노력한다. 그 과정에서 ‘나’는 성공한 사람들의 경험을 오마주하여 자신의 성장과 성공을 추구하며 ‘소유’하고자 한다. 나의 컨셉에서는 '소유'를 내가 직접 행하는 행동과 연결짓고, 끊임없이 오마주의 대상을 닮아가려 노력하는 것을 '성장'으로 정의한다. 따라서 노력과 성공의 경험을 소유하며 성장해 나가는 과정을 강조하며, 노력을 멈추지 말고 지속적으로 소유하여 성공을 이루어내자는 메세지를 담고 있다. ",
            "email": "yohotiger2680@gmail.com",
            "instagram": "@___skdus___",
            "posterTitle": "운삼기칠",
            "posterBody": "7할의 노력에 3할의 행운이 더해져 완성된다는 의미를 제액초복(除厄招福)의 상징인 부적으로 표현하여 관객에게 강한 기원력이 전달되도록 마음을 담아 제작하였다. \n\n성공의 경험을 오마주하여 소유하려 노력하는 당신의 염원이 이루어지길 바란다.",
            "interTitle": "운삼기칠",
            "interBody": "<운삼기칠>은 행운이 3할, 행함(소유)이 7할이라는 뜻으로 열심히 노력하면 나머지 3할은 행운이 채워 원하는 바를 이루게 되는 것을 의미한다.\n\n게임에서 네잎 클로버를 찾는 행위는 열심히 노력해 소유하는 7할을 상징하며, 7개의 네잎 클로버를 찾아 보상을 받는 과정은 성장을 의미한다. 마지막 보상은 3할의 행운을 상징한다. \n\n사용자는 일련의 과정을 수행함으로써 더 나은 ‘나’가 되기 위해 일생동안 수행할 <성공 경험의 오마주>를 체험하게 된다.",
            "interFormat": "Unity, AR, iOS app development",
            "interMethod": "1. 거치대에서 아이패드를 분리한다 ||\n2. 게임을 플레이한다 ||\n3. 거치대에 아이패드를 거치하고 다음 단계를 수행한다",
            "interVideoURL": "https:\/\/www.youtube.com\/embed\/i7oJQ_h98ak"
           },
           {
            "index": 5,
            "tag": "INDIVIDUAL",
            "name": "김도연",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n4. 세번째 단계 입력"
           },
           {
            "index": 6,
            "tag": "INDIVIDUAL",
            "name": "김민호",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n5. 세번째 단계 입력"
           },
           {
            "index": 7,
            "tag": "INDIVIDUAL",
            "name": "김유민",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n6. 세번째 단계 입력"
           },
           {
            "index": 8,
            "tag": "INDIVIDUAL",
            "name": "김유진",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n7. 세번째 단계 입력"
           },
           {
            "index": 9,
            "tag": "INDIVIDUAL",
            "name": "김현서",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n8. 세번째 단계 입력"
           },
           {
            "index": 10,
            "tag": "INDIVIDUAL",
            "name": "문관영",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n9. 세번째 단계 입력"
           },
           {
            "index": 11,
            "tag": "INDIVIDUAL",
            "name": "민재현",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n10. 세번째 단계 입력"
           },
           {
            "index": 12,
            "tag": "INDIVIDUAL",
            "name": "박원영",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n11. 세번째 단계 입력"
           },
           {
            "index": 13,
            "tag": "INDIVIDUAL",
            "name": "박재현",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n12. 세번째 단계 입력"
           },
           {
            "index": 14,
            "tag": "INDIVIDUAL",
            "name": "박찬유",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n13. 세번째 단계 입력"
           },
           {
            "index": 15,
            "tag": "INDIVIDUAL",
            "name": "배유림",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n14. 세번째 단계 입력"
           },
           {
            "index": 16,
            "tag": "INDIVIDUAL",
            "name": "엄채연",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n15. 세번째 단계 입력"
           },
           {
            "index": 17,
            "tag": "INDIVIDUAL",
            "name": "이민영",
            "title": "존경과 결핍",
            "subtitle": "LACK",
            "description": "존경이란 감정은 언제나 비교를 동반한다. 존경하여 닮고 싶은 대상은 끊임없이 나를 견주게 만들고, 따라서 나에게 없거나 부족한 것 즉 '결핍'을 상기시킨다. 하지만 또한, 이렇게 자각한 결핍은 대상을 본받고자 하는 마음에서 비롯된 것이기에 존경은 이를 극복하기 위한 가장 강력한 동기부여가 된다. \n따라서 존경은 나의 결핍을 일깨워주며, 동시에 결핍을 해소하기 위한 노력의 자극제로써 성장의 원동력이 된다.",
            "email": "enldrnfdl31@naver.com",
            "phone": '01075244534',
            "instagram": "@lamp6laddinny",
            "posterTitle": "결핍의 자각",
            "posterBody": "존경하는 대상과 마주한 나는 결핍을 발견한다. 내가 선망하고, 따라가고자 하며, 사랑하고, 본받아 성장하고자 하는 존경의 대상은 나도 몰랐던 나의 결여된 부분을 상기시킨다.",
            "interTitle": "결핍의 해소",
            "interBody": "존경은 나의 결핍을 해소하기 위한 동기부여로 작용한다. 비어있던 나의 결핍된 부분은 노력을 통해 메꿔지고, 결국 성장한다.",
            "interFormat": "Cinema 4D, PyCharm",
            "interMethod": "1. 스크린 앞 적절한 위치에 선다. ||\n2. 알맞은 포즈를 취하여 인터랙션이 다음 단계로 진행되도록 한다.  ||\n3. 마지막 단계까지 인터랙션을 감상한다."
           },
           {
            "index": 18,
            "tag": "INDIVIDUAL",
            "name": "이세영",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n17. 세번째 단계 입력"
           },
           {
            "index": 19,
            "tag": "INDIVIDUAL",
            "name": "이진희",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n18. 세번째 단계 입력"
           },
           {
            "index": 20,
            "tag": "INDIVIDUAL",
            "name": "전서연",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n19. 세번째 단계 입력"
           },
           {
            "index": 21,
            "tag": "INDIVIDUAL",
            "name": "전종규",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n20. 세번째 단계 입력"
           },
           {
            "index": 22,
            "tag": "INDIVIDUAL",
            "name": "전혜성",
            "email": "mail.com",
            "interMethod": "1. 첫번째 단계 입력 ||\n2. 두번째 단계 입력 ||\n21. 세번째 단계 입력"
           }
       
]


export function getProjectTitles() {
    // 데이터에서 'title' 속성만 추출하여 새로운 배열을 생성합니다.
    const projectTitles = projectData.map((project) => project.title);
    return projectTitles;
}

export function getProjectListData() {
    const projectListData = projectData.map((project) => (
    {  
        id : project.id,
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
          "tag": "INDIVIDUAL",
          "title": "소유",
          "subtitle": "운!",
          "introduction": "우리는일생동안 더 나은 '나'가 되기 위해 끊임없이 노력한다. 그 과정에서 ‘나’는 성공한 사람들의 경험을 오마주하여 자신의 성장과 성공을 추구하며 소유하고자 한다. 나의 컨셉에서는 '소유'를 내가 직접 행하는 행동과 연결짓고, 끊임없이 오마주의 대상을 닮아가는 것을 '성장'으로 정의한다. 따라서 노력과 성공의 경험을 소유하며 성장해 나가는 과정을 강조하며, 노력을 멈추지 말고 지속적으로 소유하여 성공을 이루어내는 메세지를 담고 있다.",
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
          "interVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY"
         },
         {
          "index": 1,
          "name": "김도연"
         },
         {
          "index": 2,
          "name": "김민호"
         },
         {
          "index": 3,
          "name": "김유민"
         },
         {
          "index": 4,
          "name": "김유진"
         },
         {
          "index": 5,
          "name": "김현서"
         },
         {
          "index": 6,
          "name": "문관영"
         },
         {
          "index": 7,
          "name": "민재현"
         },
         {
          "index": 8,
          "name": "박원영"
         },
         {
          "index": 9,
          "name": "박재현"
         },
         {
          "index": 10,
          "name": "박찬유"
         },
         {
          "index": 11,
          "name": "배유림"
         },
         {
          "index": 12,
          "name": "엄채연"
         },
         {
          "index": 13,
          "name": "이민영"
         },
         {
          "index": 14,
          "name": "이세영"
         },
         {
          "index": 15,
          "name": "이진희"
         },
         {
          "index": 16,
          "name": "전서연"
         },
         {
          "index": 17,
          "name": "전종규"
         },
         {
          "index": 18,
          "name": "전혜성"
         },
         {
          "index": 19,
          "tag": "TEAM",
          "title": "추억",
          "subtitle": "추억으로의초대",
          "introduction": "오마주는 과거를 현재에 재현시킨다.",
          "name": "웹팀",
          "members": "이진희, 김유민, 김유진, 배유림, 엄채연",
          "filmTitle": "추억으로의 초대",
          "filmBody": "추억으로의 초대",
          "filmVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY",
          "interTitle": "추억으로의 초대",
          "interBody": "하하하",
          "interFormat": "web",
          "interVideoURL": "https:\/\/www.youtube.com\/embed\/lXZngFLxBLY"
         },
         {
          "index": 20,
          "tag": "TEAM",
          "name": "디피팀",
          "members": "문관영, 김도연, 김민호, 박재현, 전서연"
         },
         {
          "index": 21,
          "tag": "TEAM",
          "name": "도록팀",
          "members": "김현서, 박원영, 이세영, 전종규, 전혜성"
         },
         {
          "index": 22,
          "tag": "TEAM",
          "name": "영상팀",
          "members": "민재현, 이민영, 김나연, 박찬유"
         }
]

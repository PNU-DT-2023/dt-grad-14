
export function getProfileListData() {
    const profileListData = profileData.map((project,idx) => (
    {  
        id : idx,
        name : project.name
    })
    );
    return profileListData
}

export function getProfileByName(name) {
    const profile = profileData.find( (item) => (item.name == decodeURIComponent(name)));
    return profile
}

export const profileData = [
    {
        "Index": 0,
        "name": "김나연",
        "engName": "Kim Nayeon",
        "team": "영상팀",
        "introduction": "낭만과 행복을 추구하는 디자인을 하고 있습니다",
        "email": "yohotiger2680@gmail.com",
        "phone": "010-3005-1793",
        "instagram": "___skdus___"
       },
       {
        "Index": 1,
        "name": "김도연",
        "engName": "Kim Doyeon",
        "team": "도록팀",
        "email": "osenmeltom@gmail.com",
        "phone": "010-7259-5089",
        "instagram": "osenmeltom"
       },
       {
        "Index": 2,
        "name": "김민호",
        "engName": "Kim Min Ho",
        "team": "도록팀",
        "email": "lucas03100908@gmail.com",
        "phone": "010-5392-6470",
        "instagram": "luc.mho"
       },
       {
        "Index": 3,
        "name": "김유민",
        "engName": "Kim Yu Min",
        "team": "웹팀",
        "introduction": "스스로 부족함을 많이 깨달은 한 해였습니다. 좋은 동료들과 함께할 수 있어 행복했습니다. 오랫동안 그리워할 날들에 함께해주어서 고맙습니다. ",
        "email": "dbals757@pusan.ac.kr",
        "phone": "010-3502-7843",
        "instagram": "u.min_the_world",
        "url": "https:\/\/www.behance.net\/kmyumn"
       },
       {
        "Index": 4,
        "name": "김유진",
        "team": "웹팀",
        "email": "122nd@pusan.ac.kr",
        "phone": "010-8907-0158",
        "instagram": "1__22nd"
       },
       {
        "Index": 5,
        "name": "김현서",
        "engName": "Kim Hyeon Seo",
        "team": "DP팀",
        "introduction": "심플하고 미니멀한 디자인을 좋아하며 \n창의적인 아이디어를 생각해 내는 일에 매력을 느낍니다.",
        "email": "georia0525@naver.com",
        "phone": "010-2269-5382",
        "instagram": "kmyns_"
       },
       {
        "Index": 6,
        "name": "문관영",
        "engName": "Moon Kwanyoung",
        "team": "도록팀",
        "email": "echo9810@naver.com",
        "phone": "010-5012-3850",
        "instagram": "mooonk_y"
       },
       {
        "Index": 7,
        "name": "민재현",
        "engName": "Min Jae Hyun",
        "team": "영상팀",
        "email": "sfcc329@gmail.com",
        "phone": "010-2351-5981",
        "instagram": "min.jae.hyun"
       },
       {
        "Index": 8,
        "name": "박원영",
        "engName": "Park Won Young",
        "team": "DP팀",
        "email": "oneangsae@gmail.com",
        "phone": "010-4536-3209"
       },
       {
        "Index": 9,
        "name": "박재현",
        "engName": "Park Jae Hyun",
        "team": "도록팀",
        "email": "pjs5062@gmail.com",
        "phone": "010-9022-6656",
        "instagram": "pnu_idiot"
       },
       {
        "Index": 10,
        "name": "박찬유",
        "engName": "Park Chan Yeu",
        "team": "영상팀",
        "email": "us05154@naver.com",
        "phone": "010-5034-2463",
        "instagram": "its_beareel"
       },
       {
        "Index": 11,
        "name": "배유림",
        "engName": "Bae YuRim",
        "team": "웹팀",
        "email": "363daisy@gmail.com",
        "phone": "010-3639-5980",
        "instagram": "3lo_rim",
        "url": "https:\/\/www.behance.net\/ba33c297"
       },
       {
        "Index": 12,
        "name": "엄채연",
        "engName": "Eom Chae Yeon",
        "team": "웹팀",
        "email": "sorimchuku@gmail.com",
        "phone": "010-2818-6421",
        "instagram": "eomyummy"
       },
       {
        "Index": 13,
        "name": "이민영",
        "engName": "Lee Minyoung",
        "team": "영상팀",
        "email": "enldrnfdl31@naver.com",
        "phone": "010-7524-4534",
        "instagram": "lamp6laddinny"
       },
       {
        "Index": 14,
        "name": "이세영",
        "engName": "Lee Seyoung",
        "team": "DP팀",
        "introduction": "재미와 센스를 곁들인 신박함을추구합니다. 상상하는 것들을 구체화하는 기획에 즐거움을 느낍니다.",
        "email": "banaunawoo052@gmail.com",
        "phone": "010-5873-5854",
        "instagram": "2_seng_0",
        "url": "https:\/\/www.behance.net\/2M30cm"
       },
       {
        "Index": 15,
        "name": "이진희",
        "engName": "Lee\nJinhee",
        "team": "웹팀",
        "introduction": "사용자 경험에서 착안한 재미있는 아이디어들에 관심이 많습니다. ",
        "email": "alivemaker@naver.com",
        "phone": "010-7244-8579",
        "instagram": "ccleanhouse_",
        "url": "https:\/\/www.linkedin.com\/in\/jinheelee97\/"
       },
       {
        "Index": 16,
        "name": "전서연",
        "engName": "Chun Seoyeon",
        "team": "도록팀",
        "introduction": "물음표를 느낌표로 바꾸는 일을 좋아하는, 책임감 있는 디자이너입니다.",
        "email": "nhsy1024@gmail.com",
        "phone": "010-6437-7968",
        "instagram": "deon_de0yeon"
       },
       {
        "Index": 17,
        "name": "전종규",
        "engName": "Jeon Jonggyu",
        "team": "DP팀",
        "email": "jonggyu4274@gmail.com",
        "phone": "010-3144-4274"
       },
       {
        "Index": 18,
        "name": "전혜성",
        "engName": "Jeon Hyeseong",
        "team": "DP팀",
        "introduction": "다양성을 존중하는 디자인,\n누구나 쉽고 편안하게 이용할 수 있는 디자인을 추구합니다.",
        "email": "jeon.comet.design@gmail.com",
        "phone": "010-9922-6032",
        "instagram": "im___hyeseong"
       }
]
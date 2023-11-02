
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
        "email": "yohotiger2680@gmail.com",
        "instagram": "@___skdus___"
       },
       {
        "Index": 1,
        "name": "김도연",
        "team": "도록팀"
       },
       {
        "Index": 2,
        "name": "김민호",
        "team": "도록팀"
       },
       {
        "Index": 3,
        "name": "김유민",
        "team": "웹팀"
       },
       {
        "Index": 4,
        "name": "김유진",
        "team": "웹팀"
       },
       {
        "Index": 5,
        "name": "김현서",
        "team": "디피팀"
       },
       {
        "Index": 6,
        "name": "문관영",
        "team": "도록팀"
       },
       {
        "Index": 7,
        "name": "민재현",
        "team": "영상팀"
       },
       {
        "Index": 8,
        "name": "박원영",
        "team": "디피팀"
       },
       {
        "Index": 9,
        "name": "박재현",
        "team": "도록팀"
       },
       {
        "Index": 10,
        "name": "박찬유",
        "team": "영상팀"
       },
       {
        "Index": 11,
        "name": "배유림",
        "team": "웹팀"
       },
       {
        "Index": 12,
        "name": "엄채연",
        "team": "웹팀"
       },
       {
        "Index": 13,
        "name": "이민영",
        "engName": "Lee Minyoung",
        "team": "영상팀",
        "email": "enldrnfdl31@naver.com",
        "phone": '01075244534',
        "instagram": "@lamp6laddinny"
       },
       {
        "Index": 14,
        "name": "이세영",
        "team": "디피팀"
       },
       {
        "Index": 15,
        "name": "이진희",
        "engName": "Lee\nJinhee",
        "team": "웹팀",
        "email": "alivemaker@naver.com"
       },
       {
        "Index": 16,
        "name": "전서연",
        "team": "도록팀"
       },
       {
        "Index": 17,
        "name": "전종규",
        "team": "디피팀"
       },
       {
        "Index": 18,
        "name": "전혜성",
        "team": "디피팀"
       }
]
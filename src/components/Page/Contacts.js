function ContactLinks(props) {
    const profile = props?.data
    return(
        <ul className="p-2 flex flex-col gap-1.5">
                                    <li>{profile?.email && <a alt="이메일" href={`mailto:${profile.email}`}>{profile.email}</a>}</li>
                                    <li>{profile?.phone && <a alt="전화번호" href={`telto:${profile.phone}`}>{profile.phone} </a>}</li>
                                    <li className="leading-normal px-2 bg-slate-700 rounded-full w-fit h-fit ">
                                        {profile?.instagram && <a alt="인스타그램" href={`https://instagram.com/${profile.instagram}`}target="_blank">
                                        @{profile.instagram}</a>}</li>
                                    <li>{profile?.url && <a href={`${profile.url}`} target="_blank">
                                        {profile.url.replace("https://www.","")}</a>}</li>
                                </ul>
    )
}
export default ContactLinks;
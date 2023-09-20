import {TOKEN, DATABASE_ID, PROFILE_DATABASE_ID} from '../../config/index.js';

export async function loadProjects() {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify( {
        "sorts": [
          {
              "property": "Tag",
              "direction": "ascending"
          }
        ]
      })
    };
  
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`,options,  { cache: 'no-store' }, { next: { revalidate: 5 } })
    const projects = await res.json();

    const projectDataList = await projects.results.map((project,idx) => (
        {
          index : idx,
          title : project.properties.Name.title[0].plain_text,
          subtitle : project.properties.SubTitle.rich_text[0].text.content,
          tag : project.properties.Tag.select.name,
          name: project.properties.Credit.rich_text[0].text.content,
          introduction: project.properties.Introduction.rich_text[0].text.content,
          email : project.properties.Email.email,
          phone : project.properties.Phone.phone_number,
          contactURL : project.properties.Contact.url,
          context : project.properties.Context.rich_text[0].text.content,
          posterComment : project.properties.PosterComment.rich_text[0].text.content,
          videoURL : project.properties.VideoURL.url,

        }
    ));
    return projectDataList;
  }
export async function loadProfiles() {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify( {
        "sorts": [
          {
              "property": "Name",
              "direction": "ascending"
          }
        ]
      })
    };
  
    const res = await fetch(`https://api.notion.com/v1/databases/${PROFILE_DATABASE_ID}/query`,options,  { cache: 'no-store' }, { next: { revalidate: 5 } })
    const profiles = await res.json();

    const profileDataList = await profiles.results.map((profile,idx) => (
        {
          name : profile.properties.Name.title[0].plain_text,
          team : profile.properties.TEAM.select?.name,
          engName : profile.properties.EngName.rich_text[0]?.text.content,
          introduction: profile.properties.Introduction.rich_text[0]?.text.content,
          email : profile.properties.Email.email,
          phone : profile.properties.Phone.phone_number,
          contactURL : profile.properties.Contact.url,
          projects : [
            profile.properties.Individual.rich_text[0]?.text.content,
            profile.properties.TeamInter.rich_text[0]?.text.content,
            profile.properties.TeamFilm.rich_text[0]?.text.content,
          ]
        }
    ));
    return profileDataList;
  }

 

  export async function loadProjectItem(title) {
    const data = await loadProjects();
    const titleName = decodeURIComponent(title);
    const project = data.find(findTitle);

    function findTitle (e) {
      const slugTitle = e.title.replaceAll(' ',"");
        if(slugTitle.localeCompare(titleName)===0) {
            return true;
        }
       
    }

    return project
  }

  export async function loadProfileItem(name) {
    const data = await loadProfiles();
    const slugName = decodeURIComponent(name);
    const profile = data.find(findName);

    function findName (e) {
        if(e.name.localeCompare(slugName)===0) {
            return true;
        }
       
    }
    return profile
  }
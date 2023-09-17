import {TOKEN, DATABASE_ID} from '../../config/index.js';

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
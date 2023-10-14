import Link from "next/link"
import { getProjectById} from "@/data/project";
import { IndividaulDetailPage } from "@/components/Page/Individual_detail";
import { TeamDetailPage } from "@/components/Page/Team_detail";
import NavBtn from "@/components/Page/PrevNextBtn";
import Footer from "@/components/Footer/Footer";
export default async function Project({params}) {;
    const data = getProjectById(params.slug);
    return (
        <div>
          {data?.tag === "TEAM" ? (
            <TeamDetailPage data={data} />
          ) : (
            <IndividaulDetailPage data={data} />
          )}
          <NavBtn data={data} />
          <Footer></Footer>
        </div>
      );ㄴ    
}

export async function generateMetadata({ params }) {
    const projectData = getProjectById(params.slug)
  
    return {
      title: projectData ? projectData.title : "",
      description: `${projectData?.subtitle} by.${projectData?.name}`
    }
}
  
import { Timeline, TimelineCard } from "../common/timeline";

export function Experience(){

    return (
        <div className="w-1/2 flex items-center h-full flex-col">
            <h1 className="text-3xl m-6">Working experience</h1>
            <Timeline >

                <TimelineCard date={"Aug 2022"} 
                title={"Medisigh, Full Stack Software Engineer"} 
                description={`'Medisigh' is an online platform that covers everything
                 from care tocarrying out the aesthetic procedure and patient monitoring, containing
                    incredible and innovative tools.`}/>

                <TimelineCard date={"Sep 2021 - Aug 2022"}
                title={"Alterdata Software, Full Stack Software Engineer"}
                description={`Worked on 'Karoo chat' that has thousands of users all over Brazil.
                It handles more than 300 thousand concurrent connections
                  and delivers more than 32 billion real time messages every year.`}/>

                <TimelineCard date={"Jan 2019 - Sep 2021"} 
                title={"Alterdata Software, Quality Analist"}
                description={`Test planning and bug identifications Test planning and bug identifications.
                    Direct contact with the development team, product and participation in the creation of features.`}/>

                <TimelineCard date={"Mar 2018 - Jan 2019"} 
                title={"Alterdata Software, IT support technician"}
                description={` Server technical assistance via chat and telephone
                        Maintenance on Windows Server and Linux servers.`}/>

            </Timeline>


        </div>
    )
}
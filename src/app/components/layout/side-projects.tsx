import Card from "../common/card";

export default function SideProjects(){

    return (
        <div className="w-1/2 flex items-center h-full flex-col">
            <h1 className="text-3xl m-6">Side Projects</h1>

            <div>
                <Card title={"Full stack - Laundry website using TypeScript"} content={`Full-stack developer experienced in
                     maintaining and developing new features with TypeScript,
                        improving codebases for performance and reliability.`} link="https://lavon.com.br"></Card>

                <Card title={"Backend - VR-based psychological treatment game and site"} content={`Backend developer experienced in maintaining and developing new features with TypeScript,
                        improving system performance and reliability.`} link="https://agooravr.com"></Card>

                <Card title={"Front end - New features of a financial system"} content={`Front end improvement of the financial 
                        system for clinics as a independant contractor using Angularjs`} link="https://mv.com.br"></Card>
            </div>


        </div>
    )
}
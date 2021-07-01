// project data에 해당되는 값들의 타입을 각각 명시. 서버에서 타입을 지정해줘도 front에서 모르기 때문?에 만들어준거 같아
export interface ProjectData{
    projectName : string;
    startDate: string;
    deadline: string;
    PM: string;
    member: string;
    setence: string;
}
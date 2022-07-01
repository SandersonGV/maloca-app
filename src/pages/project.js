import PageHeader from "../containers/pageHeader";
import Projects from "../containers/projects";
import MalocaInfo from "../malocaInfo";

const maloca = new MalocaInfo();

const Project = () => {
    return (
        <>
            <PageHeader pageName="Projetos"></PageHeader>
            <Projects projetos={maloca.projetos} />
        </>
    )
};

export default Project;
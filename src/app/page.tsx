import ButtonActions from "@/components/ButtonActions";
import ExperienceField from "@/components/ExperienceField";
import Faqs from "@/components/Faqs";
import MainLayout from "@/components/Layout/Main";
import MovingIcons from "@/components/MovingIcons";
import Profile from "@/components/Profile";
import ProjectCards from "@/components/ProjectCards";
import SkillsField from "@/components/SkillsField";
import Typography from "@/components/Typography";
import { projectData } from "@/data/projectData";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full min-h-[70vh] flex flex-col gap-5 justify-center">
        <Profile />
        <Typography />
        <ButtonActions />
        <MovingIcons />
      </div>
      {projectData.map((project, index) => (
        <ProjectCards
          key={index}
          Title={project.Title}
          SubTitle={project.SubTitle}
          Image={project.Image}
          OptionOne={project.OptionOne}
          OptionTwo={project.OptionTwo}
          ButtonText={project.ButtonText}
          ButtonLink={project.ButtonLink}
          BgColor={project.BgColor}
        />
      ))}
      <SkillsField />
      <ExperienceField />
      <Faqs />
    </MainLayout>
  );
}

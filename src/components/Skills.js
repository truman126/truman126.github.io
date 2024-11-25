import SkillCard from "./SkillCard";
import styled, { keyframes } from "styled-components";


function Skills(props) {

  const languages = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },

    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "NodeJS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/320px-Node.js_logo.svg.png",
    },
    {
      name: "HTML/CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Excel VBA",
      icon: "https://img.icons8.com/color/48/000000/ms-excel.png",
    },
  ];
  const technologies = [
    {
      name: "AWS S3",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "AWS Lambda",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "MongoDB",
      icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Windows",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
    {
      name: "Mac OS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    },

    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Unity",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    },
    {
      name: "Adobe Suite",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Creative_Cloud.svg/320px-Creative_Cloud.svg.png",
    },
    {
      name: "Microsoft Office",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg",
    },
    {
      name: "npm",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/320px-Npm-logo.svg.png",
    },
    {
      name: "GitHub",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/240px-Octicons-mark-github.svg.png",
    },
    {
      name: "GitLab",
      icon: "https://about.gitlab.com/images/press/logo/png/gitlab-logo-500.png",
    },


  ];
  const frameworks = [
    {
      name: "JQuery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png",
    },
  ]

  const Header = styled.h3`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  `;
  const CategoryTitle = styled.h5`
    display: inline;
    margin-right:25px;
    min-width:150px;

  `;
  const Category = styled.div`
  display:flex ;
  align-items:center;
  margin: 20px 0 20px 0;
  `;
  const Wrapper = styled.div``;

  return (
    <Wrapper className={props.className}>
      <a id="skills" />
      <Header>Languages and Technologies</Header>

      <Category>
      <CategoryTitle>Languages</CategoryTitle>
      <div style={{display:'inline'}}>{languages.map((item) => (
        <SkillCard name={item.name} icon={item.icon} />
      ))}</div>
      </Category>
      
      <Category >
      <CategoryTitle>Frameworks</CategoryTitle>
      <div style={{display:'inline'}}>{frameworks.map((item) => (
        <SkillCard name={item.name} icon={item.icon} />
      ))}</div>
      </Category>

      <Category >
      <CategoryTitle>Technologies</CategoryTitle>
      <div style={{display:'inline'}}>{technologies.map((item) => (
        <SkillCard name={item.name} icon={item.icon} />
      ))}
      </div></Category>
    </Wrapper>
  );
}
export default Skills;

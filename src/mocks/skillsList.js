import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiPrisma, SiGithub } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skillsList = [
    {
        logoIcon: <DiJavascript1 size="40px" />,
        name: "JavaScript",
        description: "JavaScript is a programming language."
    },
    {
        logoIcon: <FaReact size="40px" />,
        name: "React",
        description: "React is an open source front-end library JS."
    },
    {
        logoIcon: <TbBrandNextjs size="40px" />,
        name: "NextJs",
        description: "Next.js is a react framework to create fast web applications."
    },
    {
        logoIcon: <SiTypescript size="40px" />,
        name: "TypeScript",
        description: "TypeScript adds additional syntax to JavaScript."
    },
    {
        logoIcon: <FaNodeJs size="40px" />,
        name: "NodeJs",
        description: "NodeJs is an open-source, cross-platform JavaScript runtime environment."
    },
    {
        logoIcon: <SiPostgresql size="40px" />,
        name: "PostgreSQL",
        description: "Open Source Relational Database."
    },
    {
        logoIcon: <SiPrisma size="40px" />,
        name: "Prisma ORM",
        description: "Prisma is an open source next-generation ORM."
    },
    {
        logoIcon: <SiGithub size="40px" />,
        name: "GitHub",
        description: "GitHub is an internet hosting service and version control using Git."
    }
]

export default skillsList;
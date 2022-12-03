export const Config: ConfigStruct = {
    about: {
        title: "Profile",
        content: [
            "Multicultural technology professional with 10+ years of experience in architecture, analyzing, designing, modeling, developing, documenting, testing and deploying high-volume, high-performance event-driven applications using a wide range of tool sets.",
            "5 years of experience in engagement, project delivery as Technical Lead and Scrum Master leading large scale complex systems integration projects using agile methodologies.",
            "Working for the second largest Telecommunications operator in Thailand, I'm responsible for WEB & Digital platform architecture - preparing the Cloud migrations, starting the adoption of DevOps principle, modernizing the stack to embrace API, containers and microservices.",
            "An effective communicator who can easily interact with end-users, technical teams and professionals on all levels."
        ]
    },
    tech: {
        title: "Technology Stack",
        table: [
            {
                title: "Development",
                skills: ["golang", "nodejs", "python", "react", "typescript", "java"]
            },
            {
                title: "Tools",
                skills: ["kafka", "redis", "postgres", "mariadb", "elasticsearch", "Voldemort DB"]
            },
            {
                title: "CI/CD & Automation",
                skills: ["kubernetes", "docker", "harbor", "jenkins", "jira", "groovy", "helm"]
            },
            {
                title: "Monitoring & Alerts",
                skills: ["kibana", "prometheus", "grafana", "line", "email"]
            },
            {
                title: "Maintenance",
                skills: ["logstash", "shell scripts", "cronjobs"]
            },
            {
                title: "Security",
                skills: ["kong", "jwt", "encryption"]
            },
            {
                title: "Documentation",
                skills: ["confluence", "nextjs", "docsify", "markdown"]
            },
            {
                title: "Engineering",
                skills: ["open source", "near realtime", "stream processing", "microservices", "rest/soap api"]
            },
        ]
    },
    experience: {
        title: "Experience",
        details: [
            {
                company: "TrueMove H",
                location: "Bangkok, Thailand (March 2017 – Present)",
                position: "Software Solution Architect",
                tasks: [
                    "Leading a transformation of current On-Premises services to cloud including the infrastructure and networking design, providing integration to Software-as-a-Service offerings.",
                    "Starting the DevOps culture including Continuous Integration & Delivery, bringing the automated infrastructure tools to existing teams and setting guidelines and standards to promote the new software conventions.",
                    "Act as product development expert to support and coach Agile working teams; advise working teams on product specific coding issues and help resolve technology challenges.",
                    "Develops feasibility studies for senior management on large, complex projects.",
                    "Led and delivered 7 projects as Scrum Master and Technical Lead for Digital Marketing Team with monthly releases."
                ]
            },
            {
                company: "IBM Thailand - DTAC",
                location: "Bangkok, Thailand (March 2015 – January 2017)",
                position: "Senior Software Engineer - Backend",
                tasks: [
                    "Responsible for installation and development of Java and Perl based IBM Infosphere Streams component for CEP Platform involving 4 product components (Unica Campaign, Unica Interact, Infosphere Streams & IBM Message Queue).",
                    "Developed near real time backend applications for processing continuous data streams and reacting to critical events within milliseconds using Message Queue, NoSQL and SQL databases.",
                    "Installed 10 Node Redis Cluster for Infosphere streams Platform for storing/processing key-value data of more than 30 million unique subscribers and processing over 3 billion transactions per day.",
                    "Analyzing business requirements to provide functional specification.",
                    "Leading a development team on given project and developing desired functionalities."
                ]
            },
            {
                company: "IBM Malaysia - Celcom",
                location: "Kuala Lumpur, Malaysia (October 2012 – January 2015)",
                position: "Software Engineer - Backend",
                tasks: [
                    "Developed Java based backend application to extract binary and JSON CDRs from Mediation, Converting and Transforming the extracted CDR data according to User needs and loading the CDR’s to IBM DB2 Database.",
                    "Developed clients for Kafka and OSB to read real time data for processing.",
                    "Developed Linux Shell Scripts for housekeeping and fail-over."
                ]
            },
            {
                company: "IBM India - Airtel",
                location: "Gurgaon, India (October 2011 – September 2012)",
                position: "Software Engineer - Backend",
                tasks: [
                    "Developed C++ based backend application to extract  binary and CSV CDRs from Mediation, Converting and Transforming the extracted CDR data according to User needs and loading the CDR’s to IBM DB2 Database.",
                    "Maintaining and Improving existing backend system as per user needs.",
                    "Developed Linux Shell Scripts for housekeeping and fail-over.",
                ]
            }
        ]
    }
}


interface ConfigStruct {
    about: { title: string, content: string[] },
    tech: { title: string, table: { title: string, skills: string[] }[] },
    experience:
        {
            title: string,
            details: {
                company: string, location: string, position: string, tasks: string[]
            }[]
        }
}

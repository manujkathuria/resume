export const Config: ConfigStruct = {
    profile: {
        title: "Profile",
        content: [
            "Experienced Backend Engineer with over 10 years of experience in designing, developing, and maintaining large-scale systems.",
            "Expertise in Event-driven, Stateless, DRY and Elastic microservices based backends for processing high-velocity data streams in near real-time.",
            "Recent coding experience in Golang and TypeScript, as well as experience in IBM Stream Processing Language, Java, and C++.",
            "Proficient in working with various databases such as Redis, Postgres, and Elasticsearch, as well as Kafka messaging system.",
            "Skilled in developing REST, gRPC and SOAP APIs.",
            "Experienced in implementing CI/CD processes to automate the deployment and testing of services, ensuring that they are released to production with high confidence.",
            "Deep understanding of the technical aspects of software development, and I have a proven track record of delivering complex projects on time and within budget.",
            "Experienced in using Scrum methodologies and working with project management tools such as Jira and Confluence to ensure that projects are delivered on time and within scope.",
            "An effective communicator who can easily interact with end-users, technical teams, and professionals on all levels."
        ]
    },
    tech: {
        title: "Technical Skills",
        table: [
            {
                title: "Languages",
                skills: ["golang", "typescript", "IBM SPL", "Core Java", "C++", "Bash Scripting"]
            },
            {
                title: "Tools",
                skills: ["kafka", "redis", "postgres", "elasticsearch", "React", "Web Servers", "jira"]
            },
            {
                title: "Orchestration",
                skills: ["kubernetes", "docker", "jenkins", "helm", "harbor"]
            },
            {
                title: "Monitoring/Alerts",
                skills: ["kibana", "prometheus", "grafana", "HTTP Clients", "Email Clients"]
            },
            {
                title: "Documentation",
                skills: ["confluence", "next.js", "markdown"]
            },

        ]
    },
    experience: {
        title: "Experience",
        details: [
            {
                company: "True Corporation",
                location: "Bangkok, Thailand (March 2017 – Present)",
                role: "Lead Backend Engineer",
                tasks: [
                    "Leading a small team of 3 backend developers to design, develop and maintain Digital Marketing Team Backend",
                    "Implemented CI/CD processes using Jenkins to automate the deployment and testing of services",
                    "Collaborating with other departments such as product management, front-end development, data analytics and quality assurance to ensure the backend systems meet business and user requirements",
                    "Ensuring that the backend systems comply with industry standards and regulations, such as data protection laws.",
                    "Mentoring and coaching team members, providing technical guidance and support."
                ]
            },
            {
                company: "IBM Thailand",
                client: "DTAC",
                location: "Bangkok, Thailand (March 2015 – January 2017)",
                role: "Senior Backend Engineer",
                tasks: [
                    "Responsible for installation and development of Java and Perl based IBM Infosphere Streams component for CEP Platform involving 4 product components (Unica Campaign, Unica Interact, Infosphere Streams & IBM Message Queue).",
                    "Developed near real time backend applications for processing continuous data streams and reacting to critical events within milliseconds using Message Queue, NoSQL and SQL databases.",
                    "Installed 10 Node Redis Cluster for Infosphere streams Platform for storing/processing key-value data of more than 30 million unique subscribers and processing over 3 billion transactions per day.",
                    "Analyzing business requirements to provide functional specification.",
                    "Leading a development team on given project and developing desired functionalities."
                ]
            },
            {
                company: "IBM Malaysia",
                client: "Celcom",
                location: "Kuala Lumpur, Malaysia (October 2012 – January 2015)",
                role: "Backend Engineer",
                tasks: [
                    "Developed Java based backend application to extract binary and JSON CDRs from Mediation, Converting and Transforming the extracted CDR data according to User needs and loading the CDR’s to IBM DB2 Database.",
                    "Developed clients for Kafka and OSB to read real time data for processing.",
                    "Developed Linux Shell Scripts for housekeeping and fail-over."
                ]
            },
            {
                company: "IBM India",
                client: "Bharti Airtel",
                location: "Gurgaon, India (October 2011 – September 2012)",
                role: "Backend Engineer",
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
    profile: { title: string, content: string[] },
    tech: { title: string, table: { title: string, skills: string[] }[] },
    experience:
        {
            title: string,
            details: {
                company: string, client?: string, location: string, role: string, tasks: string[]
            }[]
        }
}

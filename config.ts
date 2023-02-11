export const Config: ConfigStruct = {
    profile: {
        title: "Profile",
        content: [
            "Seasoned Backend Engineer with experience in leading small teams to deliver high-quality, sustainable, and cost-conscious solutions.",
            "Experienced in developing stateless microservices for processing high-velocity data streams in near real-time",
            "Expertise in Golang and TypeScript",
            "Deep understanding of the technical aspects of software development, and I have a proven track record of delivering complex projects on time and within budget",
            "Experienced in implementing CI/CD processes to automate the deployment and testing of services, ensuring that they are released to production with high confidence",
            "Strong believer in the DevOps philosophy and am committed to finding ways to streamline processes and automate repetitive tasks",
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
                position: "Lead Backend Developer",
                tasks: [
                    "Create, deploy, monitor, and maintain high performance and scalable Golang microservices in the production",
                    "Identify, design, and implement internal process improvements: automating manual processes, optimizing data delivery, re-designing infrastructure for greater scalability",
                    "Contribute to backend architectural decisions"
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
    profile: { title: string, content: string[] },
    tech: { title: string, table: { title: string, skills: string[] }[] },
    experience:
        {
            title: string,
            details: {
                company: string, location: string, position: string, tasks: string[]
            }[]
        }
}

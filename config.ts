export const Config: ConfigStruct = {
    profile: {
        title: "Profile",
        content: [
            "Seasoned Backend Engineer with experience in leading small teams to deliver high-quality, sustainable, and cost-conscious solutions.",
            "Expertise in developing stateless microservices based backends for processing high-velocity data streams in near real-time.",
            "Deep understanding of the technical aspects of software development, and I have a proven track record of delivering complex projects on time and within budget.",
            "Experienced in implementing CI/CD processes to automate the deployment and testing of services, ensuring that they are released to production with high confidence.",
            "Experienced in implementing Scrum methodologies to ensure that projects are delivered on time and within scope",
            "Strong believer in the DevOps philosophy and am committed to finding ways to streamline processes and automate repetitive tasks.",
            "Strong commitment to transparency and documentation, and I believe that clear communication and well-documented processes are essential for successful project delivery.",
            "Have a strong eye for design and a passion for creating user-friendly interfaces",
            "Always eager to take on new challenges and work with new technologies, and I believe that continuous learning and professional development are key to success in the technology industry",
            "An effective communicator who can easily interact with end-users, technical teams and professionals on all levels."
        ]
    },
    tech: {
        title: "Technical Expertise",
        table: [
            {
                title: "Languages",
                skills: ["golang", "typescript", "IBM SPL", "Bash Scripting"]
            },
            {
                title: "Tools",
                skills: ["kafka", "redis", "postgres", "elasticsearch", "React", "Web Server", "jira"]
            },
            {
                title: "Orchestration",
                skills: ["kubernetes", "docker", "jenkins", "helm", "harbor"]
            },
            {
                title: "Monitoring",
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
                company: "TrueMove H",
                location: "Bangkok, Thailand (March 2017 – Present)",
                position: "Software Engineer Lead",
                tasks: [
                    "Create, deploy, monitor, and maintain high performance and scalable Golang microservices in the production",
                    "Identify, design, and implement internal process improvements: automating manual processes, optimizing data delivery, re-designing infrastructure for greater scalability",
                    "Contribute to backend architectural decisions"
                ]
            },
            {
                company: "IBM Thailand",
                client: "DTAC Thailand",
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
                company: "IBM Malaysia",
                client: "Celcom Malaysia",
                location: "Kuala Lumpur, Malaysia (October 2012 – January 2015)",
                position: "Software Engineer - Backend",
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
                company: string, client?: string, location: string, position: string, tasks: string[]
            }[]
        }
}

import {Typography} from "@mui/material";
import TechStack from "../Components/TechStack/TechStack.jsx";

const About = () => {
    return (
        <main>
            <Typography variant={'h4'} mt={'2rem'} >About Me</Typography>

            <Typography mt={'2rem'}>
                Currently in 3rd year of Computer Science & Engineering Degree, with aggregate of <span>9.19 CGPA</span>.
                <br/><br/>
                Highly ambitious and always willing to learn new <span>Technology</span>.
                I have great understanding in Web based technologies, good grasp and knowledge in both <span>Front End</span> and <span>Back End</span> development.
                <br/><br/>
                Worked in both <span>Relational</span> and <span>Non Relational Database</span>, and created project with standard <br/><span>Model-View-Control(MVC)</span>.
                <br/><br/>
                Thorough understanding Redux toolkit, Axios and Routers in <span>React</span> Library, understanding of <span>NodeJs</span> libraries like express and cors.
                <br/><br/>
                Along with that, I have keen interest in problem solving. I regularly practise Data Structure and Algorithms on <span>Leetcode</span> and participate in <span>Codechef</span> contests (currently 2 Star).
            </Typography>

            <TechStack/>

        </main>
    );
};

export default About;

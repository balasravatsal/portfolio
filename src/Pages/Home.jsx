import {Typography} from "@mui/material";

const Home = () => {
    return (<>
            <main>

                <Typography variant={"h4"} mt={'16rem'}>
                    Hello world!
                </Typography>

                <Typography variant="h2" mt="2rem">
                    I'm <span>Vatsal</span> Balasra
                </Typography>

                <Typography variant={"h4"} mt={'1rem'} >
                    Full Stack Developer
                </Typography>

            </main>
        </>
    );
};

export default Home;

// style={{ margin: "0", height: "100%", overflow: "hidden" }}
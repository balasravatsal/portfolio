import Typography from "@mui/material/Typography";
import ExpCard from "../Components/Experience/ExpCard.jsx";
import * as PropTypes from "prop-types";

function Item() {
    return null;
}

Item.propTypes = {children: PropTypes.node};
const Experience = () => {
    return (
        <div className={'experience'}>
            <Typography variant={"h2"} display={"grid"} justifyContent={"center"} mb={"4rem"}>My Experience</Typography>

            <divd className={"expDiv"}>
                <ExpCard/>
                <ExpCard/>
                <ExpCard/>
            </divd>

        </div>
    );
};

export default Experience;
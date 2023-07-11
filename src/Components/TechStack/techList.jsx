import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import DeveloperBoardSharpIcon from '@mui/icons-material/DeveloperBoardSharp';
import DataObjectIcon from '@mui/icons-material/DataObject';

const techList = [
    { id: 1,icon: <DevicesIcon/>, type: "Front End", name: ["React"] },
    { id: 2,icon: <DeveloperBoardSharpIcon/>, type: "Back End", name: ["NodeJs"] },
    { id: 3, icon:  <DataObjectIcon/>, type: "Language", name: ["C++", "Javascript", "Java", "Python"]},
    { id: 4,icon: <StorageIcon/>, type: "Database", name: ["PostgreSQL", "MongoDB", "MySQL" ] },
]


export {techList}

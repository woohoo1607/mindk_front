import createDisplayFilters from "./filterCreators/createDisplayFilters";
import createROMFilters from "./filterCreators/createROMFilters";
import createRAMFilters from "./filterCreators/createRAMFilters";
import createMainCameraFilters from "./filterCreators/createMainCameraFilters";
import createFrontCameraFilters from "./filterCreators/createFrontCameraFilters";

const createFilters = (attributes, values, categoryName) => {
    if (categoryName==='smartphones') {
        let displayFilters = createDisplayFilters("mobile", attributes, values);
        let ROMFilters = createROMFilters("mobile", attributes, values);
        let RAMFilters = createRAMFilters("mobile", attributes, values);
        let MainCamera = createMainCameraFilters("mobile", attributes, values);
        let FrontCamera = createFrontCameraFilters("mobile", attributes, values);
        return [displayFilters,ROMFilters,RAMFilters,MainCamera,FrontCamera];
    }
};

export default createFilters;

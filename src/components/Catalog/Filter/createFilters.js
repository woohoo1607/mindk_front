import createDisplayFilters from "./filterCreators/createDisplayFilters";
import createROMFilters from "./filterCreators/createROMFilters";
import createRAMFilters from "./filterCreators/createRAMFilters";
import createMainCameraFilters from "./filterCreators/createMainCameraFilters";
import createFrontCameraFilters from "./filterCreators/createFrontCameraFilters";
import {categoryNames, deviceTypes} from "./filter-const";
import createOSFilters from "./filterCreators/createOSFilters";
import createNFCFilters from "./filterCreators/createNFCFilters";
import createCaseMaterialFilters from "./filterCreators/createCaseMaterialFilters";
import createCaseColorFilters from "./filterCreators/createCaseColorFilters";
import createStrapColorFilters from "./filterCreators/createStrapColorFilters";
import createStrapMaterialFilters from "./filterCreators/createStrapMaterialFilters";

const createFilters = (attributes, values, categoryName) => {

    if (categoryName===categoryNames.SMARTPHONES) {
        let displayFilters = createDisplayFilters(deviceTypes.MOBILE, attributes, values);
        let ROMFilters = createROMFilters(deviceTypes.MOBILE, attributes, values);
        let RAMFilters = createRAMFilters(deviceTypes.MOBILE, attributes, values);
        let MainCamera = createMainCameraFilters(deviceTypes.MOBILE, attributes, values);
        let FrontCamera = createFrontCameraFilters(deviceTypes.MOBILE, attributes, values);
        return [displayFilters,ROMFilters,RAMFilters,MainCamera,FrontCamera];
    }
    if (categoryName===categoryNames.LAPTOP) {

    }
    if (categoryName===categoryNames.TABLETS) {

    }
    if (categoryName===categoryNames.WATCHES) {
        let OSFilters = createOSFilters(deviceTypes.WATCH, attributes, values);
        let NFCFilters = createNFCFilters(deviceTypes.WATCH, attributes, values);
        let CaseMaterialFilter = createCaseMaterialFilters(deviceTypes.WATCH, attributes, values);
        let CaseColorFilter = createCaseColorFilters(deviceTypes.WATCH, attributes, values);
        let StrapColorFilters = createStrapColorFilters(deviceTypes.WATCH, attributes, values);
        let StrapMaterialFilters = createStrapMaterialFilters(deviceTypes.WATCH, attributes, values);
        return [OSFilters,NFCFilters,CaseMaterialFilter,CaseColorFilter,StrapColorFilters,StrapMaterialFilters]
    }
    if (categoryName===categoryNames.PC) {

    }
};

export default createFilters;

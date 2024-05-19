"use strict";
/* eslint-disable @typescript-eslint/naming-convention */
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
// WTT imports
const WTTInstanceManager_1 = require("./WTTInstanceManager");
// Boss imports
const LittleDrummerBoyItemService_1 = require("./LittleDrummerBoyItemService");
class LittleDrummerBoy {
    Instance = new WTTInstanceManager_1.WTTInstanceManager();
    version;
    modName = "WTT-Little Drummer Boy";
    //#region CustomBosses
    LittleDrummerBoyItemService = new LittleDrummerBoyItemService_1.LittleDrummerBoyItemService();
    debug = false;
    preAkiLoad(container) {
        this.Instance.preAkiLoad(container, this.modName);
        this.Instance.debug = this.debug;
        // Custom Bosses
        this.LittleDrummerBoyItemService.preAkiLoad(this.Instance);
    }
    postDBLoad(container) {
        this.Instance.postDBLoad(container);
        this.LittleDrummerBoyItemService.postDBLoad();
        this.Instance.logger.log(`[${this.modName}] Database: Loading complete.`, LogTextColor_1.LogTextColor.GREEN);
    }
}
module.exports = { mod: new LittleDrummerBoy() };
//# sourceMappingURL=mod.js.map
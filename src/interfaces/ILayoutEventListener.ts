import { DockManager } from "../DockManager.js";
import { DockNode } from "../DockNode.js";
import { Dialog } from "../Dialog.js";
import { TabPage } from "../TabPage.js";
import { IDockContainer } from "./IDockContainer.js";

/**
* The Dock Manager notifies the listeners of layout changes so client containers that have
* costly layout structures can detach and reattach themself to avoid reflow
*/
export interface ILayoutEventListener {
    onDock?(dockManager: DockManager, dockNode: DockNode): void;
    onTabsReorder?(dockManager: DockManager, dockNode: DockNode): void;
    onUndock?(dockManager: DockManager, dockNode: DockNode): void;
    onClosePanel?(dockManager: DockManager, dockNode: DockNode): void;
    onCreateDialog?(dockManager: DockManager, dialog: Dialog): void;
    onHideDialog?(dockManager: DockManager, dialog: Dialog): void;
    onShowDialog?(dockManager: DockManager, dialog: Dialog): void;
    onChangeDialogPosition?(dockManager: DockManager, dialog: Dialog, x: number, y: number): void;
    onTabChanged?(dockManager: DockManager, tabpage: TabPage): void;
    onSuspendLayout?(dockManager: DockManager): void;
    onResumeLayout?(dockManager: DockManager, panel: IDockContainer): void;
}
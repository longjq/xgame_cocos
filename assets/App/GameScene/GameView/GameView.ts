import GameDb, { Poker } from "../GameDb"

import UIPoker from "../../View/UIPoker/UIPoker"

const {ccclass, property} = cc._decorator

@ccclass
export default class GameView extends cc.Component{
    @property(cc.Prefab) pokerPrefab: cc.Prefab = null
    @property(cc.Node) initPokerArea: cc.Node = null
    @property(cc.Node) closeSendArea: cc.Node = null
    @property(cc.Node) openSendArea: cc.Node = null
    @property(cc.Node) receiveAreaList: cc.Node[] = []
    @property(cc.Node) playGroupAnchor: cc.Node = null

    public InitPokers(pokers: Poker[]){
        // 创建所有扑克UI
        pokers.forEach((poker,idx) => {
            let uiPoker = this.CreateUIPoker(poker)
            uiPoker.node.x = 0.5 * idx
            this.initPokerArea.addChild(uiPoker.node)
        });
    }

    public Start() {
        let stack : cc.Node[] = []
        for (let i = this.initPokerArea.children.length - 1; i >= 0; i--) {
            let child = this.initPokerArea.children[i]
            stack.push(child)
            this.initPokerArea.removeChild(child)
            // this.closeSendArea.addChild(child)
        }
    }

    private CreateUIPoker(poker: Poker): UIPoker{
        let uiPokerNode = cc.instantiate(this.pokerPrefab)
        let uiPoker: UIPoker = uiPokerNode.getComponent(UIPoker)
        uiPoker.Init(poker)
        return uiPoker
    }
}
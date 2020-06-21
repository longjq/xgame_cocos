import GameCtrl from "./GameCtrl";
import GameView from "./GameView/GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {
    @property(cc.Prefab) gameViewPrefab: cc.Prefab = null

    private m_GameView: GameView = null
    private m_GameCtrl: GameCtrl = null

    onLoad(){
        console.log('GameScene.onLoad')
    }

    start () {
        this.m_GameView = cc.instantiate(this.gameViewPrefab).getComponent(GameView)
        this.node.addChild(this.m_GameView.node)
        this.m_GameCtrl = new GameCtrl()
        this.m_GameCtrl.Init(this.m_GameView)
        this.m_GameCtrl.Start()

        // this.label.string = '游戏场景'

        // this.gameCtrl = new GameCtrl()
        // this.gameCtrl.Init()
        // this.gameCtrl.Start()
    }
}
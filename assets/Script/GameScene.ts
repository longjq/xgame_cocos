import GameCtrl from "./GameCtrl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Prefab)
    pokerPrefab: cc.Prefab = null

    @property(cc.Node)
    pokerContainer: cc.Node = null

    private gameCtrl: GameCtrl = null

    onLoad(){
        console.log('GameScene.onLoad')
    }

    start () {
        // init logic   
        this.label.string = '游戏场景'

        this.gameCtrl = new GameCtrl()
        this.gameCtrl.Init(this.pokerContainer, this.pokerPrefab)
        this.gameCtrl.Start()
    }
}

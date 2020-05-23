import Poker from './Poker'
import UIPoker from './UIPoker'

export default class GameCtrl{

    public pokerPrefab: cc.Prefab = null
    private pokerContainer: cc.Node = null
    private pokers: Poker[] = []

    /**
     * init
     */
    public Init(pokerContainer: cc.Node, pokerPrefab: cc.Prefab) {
        this.pokerPrefab = pokerPrefab
        this.pokerContainer = pokerContainer
    }

    public Start(){
        // console.log("GameCtrl.start()")
        for (let point = 1; point < 13; point++) {
            for (let suit = 0; suit < 4; suit++) {
                let poker = new Poker(point, suit)
                this.pokers.push(poker)
            }
        }
        console.log(this.pokers)
    
        this.pokers.forEach(poker=>{
            let uiPoker = this.UIPokerCreate(poker)
            this.pokerContainer.addChild(uiPoker.node)
        })
    }

    // 生成UIPoker对象
    private UIPokerCreate(poker: Poker): UIPoker{
        let uiPokerNode = cc.instantiate(this.pokerPrefab)
        let uiPoker: UIPoker = uiPokerNode.getComponent(UIPoker)
        uiPoker.Init(poker)
        uiPoker.node.setPosition((Math.random() * 400) - 200, (Math.random() * 400) - 200)
        return uiPoker
    }
}
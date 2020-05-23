import GameCtrl from "./GameCtrl";
import Poker from "./Poker";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIPoker extends cc.Component {

    @property(cc.Label)
    pointLabel: cc.Label = null;


    @property(cc.Sprite)
    suitSprite: cc.Sprite = null;

    @property(cc.SpriteFrame)
    suitSpriteList: cc.SpriteFrame[] = [];
    /**
     * Init
     */
    public Init(poker: Poker) {
        // this.pointLabel.string = `(${poker.point},${poker.suit})`
        this.pointLabel.string = `${poker.point}`
        this.suitSprite.spriteFrame = this.suitSpriteList[poker.suit]

    }
}

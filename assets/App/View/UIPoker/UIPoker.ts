import { ESuit, EPokerStatus } from "../../ConfigEnum";
import { Poker } from "../../GameScene/GameDb";
const POKER_MAP = {
    1:"1",
    2:"2",
    3:"3",
    4:"4",
    5:"5",
    6:"6",
    7:"7",
    8:"8",
    9:"9",
    10:"10",
    11:"J",
    12:"Q",
    13:"K",
}
const {ccclass, property} = cc._decorator;

@ccclass
export default class UIPoker extends cc.Component {

    @property(cc.Label)
    pointLabel: cc.Label = null;

    @property(cc.Sprite)
    smallSuitSprite: cc.Sprite = null;

    @property(cc.Sprite)
    bigSuitSprite: cc.Sprite = null;

    @property(cc.Sprite)
    bgSprite: cc.Sprite = null;


    @property(cc.SpriteFrame) 
    textBackBG: cc.SpriteFrame = null;

    @property(cc.SpriteFrame) 
    textFronBG: cc.SpriteFrame = null;

    @property([cc.SpriteFrame]) 
    bigSuits: cc.SpriteFrame[] = [];
    
    @property([cc.SpriteFrame]) 
    smallSuits: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame]) 
    textFaces: cc.SpriteFrame[] = [];

    private redTextColor: cc.Color = cc.Color.RED;
    private blackTextColor: cc.Color = cc.Color.BLACK


    /**
     * Init
     */
    public Init(poker: Poker) {
        this.pointLabel.string = `${POKER_MAP[poker.point]}`

        this.pointLabel.node.color = (poker.suit == ESuit.HongXin || poker.suit == ESuit.FangKuai) ? this.redTextColor : this.blackTextColor

        if (poker.point >= 11) {
            this.bigSuitSprite.spriteFrame = this.textFaces[poker.point - 11]
        }else{
            this.bigSuitSprite.spriteFrame = this.bigSuits[poker.suit]
        }
        this.smallSuitSprite.spriteFrame = this.smallSuits[poker.suit]

        this.setStatus(poker.status)
        
        // this.pointLabel.string = `(${poker.point},${poker.suit})`
        // this.pointLabel.string = `${poker.point}`
        // this.suitSprite.spriteFrame = this.suitSpriteList[poker.suit]

    }

    
    public setStatus(status: EPokerStatus) {
        if (status == EPokerStatus.CLOSE){
            this.pointLabel.node.active = false
            this.smallSuitSprite.node.active = false
            this.bigSuitSprite.node.active = false
            this.bgSprite.spriteFrame = this.textBackBG
        }else{
            this.pointLabel.node.active = true
            this.smallSuitSprite.node.active = true
            this.bigSuitSprite.node.active = true
            this.bgSprite.spriteFrame = this.textFronBG
        }
    }
    
}

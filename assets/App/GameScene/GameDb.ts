import { ESuit, EPokerStatus } from "../ConfigEnum"
 
export class Poker{
    public point: number = -1
    public suit: ESuit = ESuit.HeiTiao
    public status: EPokerStatus = EPokerStatus.CLOSE
 
    constructor(point?: number, suit?: ESuit, status?: EPokerStatus){
        this.point = point
        this.suit = suit
        this.status = status
    }
}

export default class GameDb{
    // 所有的扑克数据
    private _pokers: Poker[] = []
    public get pokers() : Poker[] {
        return this._pokers
    }

    // 发牌区盖着的扑克
    private _closeAreaPokers: Poker[] = []
    public get closeAreaPokers() : Poker[] {
        return this._closeAreaPokers
    }
    
    
    // 发牌区打开的扑克
    private _openAreaPokers: Poker[] = []
    public get openAreaPokers() : Poker[] {
        return this._openAreaPokers
    }
    

    // 收牌区组
    private _receiveAreaPokerGroup: PokerGroup[] = []
    public get receiveAreaPokerGroup() : PokerGroup[] {
        return this._receiveAreaPokerGroup
    }
    

    // 玩牌区组
    private _playAreaPokerGroups: PokerGroup[] = []
    public get playAreaPokerGroups() : PokerGroup[] {
        return this._playAreaPokerGroups
    }
    
    // 常量：收牌区长度限制
    public static readonly CONST_RECEIVE_GROUPS: number = 4
    // 常量：玩牌区长度限制
    public static readonly CONST_PLAY_GROUPS: number = 7


    // 创建牌数据库对象
    public static Create(): GameDb{
        let gameDb = new GameDb()

        return gameDb
    }

   

    constructor(){
        // 初始化牌局
        // 收牌区初始化
        for (let i = 0; i < GameDb.CONST_RECEIVE_GROUPS; i++) {
            let pokerGroup = new PokerGroup()
            this._receiveAreaPokerGroup.push(pokerGroup)
        }
        // 玩牌区初始化
        for (let i = 0; i < GameDb.CONST_PLAY_GROUPS; i++) {
            let pokerGroup = new PokerGroup()
            this._playAreaPokerGroups.push(pokerGroup)
        }

        // 初始化原始牌数据
        for (let point = 0; point <= 13; point++) {
            for (let suit = 0; suit < 4; suit++) {
                let poker = new Poker(point, suit)
                this._pokers.push(poker)
            }
        }
    }
}

class PokerGroup {
    /**
     * get Pokers
     */
    public get Pokers(): Poker[] {
        return this._pokers
    }

    private _pokers: Poker[] = []
}
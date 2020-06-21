
import GameDb from "./GameDb"
import GameView from "./GameView/GameView"

export default class GameCtrl{
    private m_GameView: GameView = null
    private m_GameDb: GameDb = null

    public Init(gameView: GameView){
        this.m_GameDb = GameDb.Create()
        this.m_GameView = gameView
        this.m_GameView.InitPokers(this.m_GameDb.pokers)
    }

    public Start(){
    }
}
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    playBtn: cc.Button = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.playBtn.node.on('click', () => {
            this.onPlayBtn()
        })
    }

    onPlayBtn () {
        cc.director.loadScene("GameScene")
    }

    // update (dt) {}
}

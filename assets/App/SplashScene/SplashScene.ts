const {ccclass, property} = cc._decorator;

@ccclass
export default class SplashScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    start () {
        // init logic   
        this.label.string = '这是加载场景111'
        setTimeout(() => {
            cc.director.loadScene("StartScene", () => {
                console.log('SplashScene 的回调')
            })
        }, 10)
    }
}

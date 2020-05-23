

import { ESuit } from './ConfigEnum'

export default class Poker{
    public point: number = -1
    public suit: ESuit = ESuit.HeiTiao

    constructor(point?: number, suit?: ESuit){
        if (point) {
            this.point = point
        }

        if (suit) {
            this.suit = suit
        }
    }
}
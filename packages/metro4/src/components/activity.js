import {Div} from "@htmljs/html"
import {addData} from "../helpers/add-data"
import {addRole} from "../helpers/add-role"

export class Activity extends Div {
    constructor(type = 'ring', options = {}) {
        options = addRole('activity', options)
        options = addData('type', type, options)
        super(options);
    }
}

export const activity = (type, options) => new Activity(type, options)
export const activityRing = (options) => activity('ring', options)
export const activityMetro = (options) => activity('metro', options)
export const activitySquare = (options) => activity('square', options)
export const activityCycle = (options) => activity('cycle', options)
export const activitySimple = (options) => activity('simple', options)
export const activityAtom = (options) => activity('atom', options)
export const activityBars = (options) => activity('bars', options)
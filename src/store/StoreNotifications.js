class NotificationsStore {

    /*** Constructeur du compteur ***/
    constructor () {
        this.state = {
            count: 1
        }
    }

    /*** Fonction d'incrémentation ***/
    increment () {
        this.state.count++
    }

    /*** Fonction de décrémentation ***/
    decrement () {
        this.state.count--
    }
}

export default new NotificationsStore()
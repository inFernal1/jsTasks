/* Условие: Реализовать класс EmailParser по следующим правилам:
		- в объекте существует только одно реальное поле email
		- также присутствует возможность обратиться к полям
			- isCorrect: (boolean) корректный ли адрес
			- name: (string) часть до собаки || null if !isCorrect
            - domain: (string) часть после собаки || null if !isCorrect*/
            
class EmailParser {
    constructor(email) {
        this.email = email
    }
    get isCorrect() {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm.test(this.email)
    }
    get name() {
        if(this.isCorrect) return this.email.substring(0,this.email.indexOf('@')) 
        else return null;
    }
    get domain() {
        if(this.isCorrect) return this.email.substring(this.email.indexOf('@') + 1) 
        else return null;
    }
}

export {EmailParser}
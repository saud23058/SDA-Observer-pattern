"use strict";
class ConcreteSubject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    attach(observer) {
        const isEixst = this.observers.includes(observer);
        if (isEixst) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    detach(observer) {
        const indexOfObserver = this.observers.indexOf(observer);
        if (indexOfObserver === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(indexOfObserver, 1);
        console.log('Subject: Detached an observer.');
    }
    notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    someBusinessLogic() {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}
class ConcreteObserverA {
    update(subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}
class ConcreteObserverB {
    update(subject) {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserverA();
subject.attach(observer1);
const observer2 = new ConcreteObserverB();
subject.attach(observer2);
subject.someBusinessLogic();
subject.someBusinessLogic();
subject.detach(observer2);
subject.someBusinessLogic();

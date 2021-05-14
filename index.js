const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }

    start() {
        const startTime = this.targetDate;
        
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const time = this.getTime(deltaTime);
            updateMarkup(time);
        }, 1000);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTime(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }
}

function updateMarkup({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 23, 2021'),
})




class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = document.querySelector(durationInput);
        this.startButton = document.querySelector(startButton);
        this.pauseButton = document.querySelector(pauseButton);

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (!this.interval) {
            this.interval = setInterval(this.tick, 1000);
        }
    }
    pause = () => {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    tick = () => {
        this.durationInput.value = this.durationInput.value - 1;
    }
}
class BasePrimes {
  constructor(length, performanceReport) {
    this.length = length;
    this.performanceReport = performanceReport;

    this.timeMeasurements = [];
  }

  initialize() {}

  enableButton() {
    this.onButtonClicked();
  }

  onButtonClicked() {
    for (let i = 0; i < 30; i++) {
      const t0 = performance.now();
      this.findPrimes();
      const t1 = performance.now();
      this.reportTime(t1 - t0);
    }

    this.reportPerformance();
  }

  reportTime(time) {
    this.timeMeasurements.push(time);
  }

  reportPerformance() {
    const count = this.timeMeasurements.length;
    const mean = this.timeMeasurements.reduce((x, y) => x + y) / count;
    this.performanceReport(parseFloat(mean.toFixed(4)));
  }
}

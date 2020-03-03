function setup() {
  return {
    open: false,
    threshold: 150,
    onTop: true,
    toggleOpen() {
      this.open = !this.open;
    },
    handleScroll(e) {
      if (window.pageYOffset > this.threshold) {
        this.onTop = false;
        return;
      }
      this.onTop = true
    }
  };
}

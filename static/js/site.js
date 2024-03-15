function setup() {
  return {
    open: false,
    threshold: 80,
    toggleOpen() {
      this.open = !this.open;
    }
  };
}

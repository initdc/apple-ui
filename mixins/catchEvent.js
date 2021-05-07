export const catchEsc = {
  created() {
    const escapeKeydown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this.escapeHandler();
        // window.removeEventListener('keydown', escapeKeydown);
      }
    }

    window.addEventListener('keydown', escapeKeydown);
  }
}

export const catchWheel = {
  created() {
    const wheelScroll = () => {
      this.wheelHandler();
      // window.removeEventListener("wheel", wheelScroll);
    }

    window.addEventListener("wheel", wheelScroll);
  }
}

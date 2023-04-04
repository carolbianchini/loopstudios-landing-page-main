class MobileNavbar {
    constructor(logo, navList, navLinks) {
      this.logo = document.querySelector(logo);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.logo.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.logo.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.logo) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".logo",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
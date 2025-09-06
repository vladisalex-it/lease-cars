
  const tabsBtn = document.querySelectorAll('.tabs__btn-item');
  const tabsContent = document.querySelectorAll('.tabs__content-item');

  const openSelectedContent = (event) => {
    const tabTarget = event.currentTarget
    const button = tabTarget.dataset.button

    tabsBtn.forEach(tabItem => {
      tabItem.classList.remove('tabs__btn-item--active')
    })

    tabTarget.classList.add('tabs__btn-item--active')

    tabsContent.forEach(contentItem => {
      contentItem.classList.remove('tabs__content-item--active')
    })

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
  }

  tabsBtn.forEach(tab => {
    tab.addEventListener('click', openSelectedContent)
  })


  const menuButton = document.querySelector('.menu__button')
  const menuList = document.querySelector('.menu__list')

  menuButton.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active')
  })


  const swiper = new Swiper(".swiper", {
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

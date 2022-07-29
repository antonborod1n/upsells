window.addEventListener('DOMContentLoaded', () => {

  function accordeon(triggersSelector) {
    const btns = document.querySelectorAll(triggersSelector);
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        this.classList.toggle('active-style');
        this.nextElementSibling.classList.toggle('active-content');

        if (this.classList.contains('active-style')) {
          this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
        } else {
          this.nextElementSibling.style.maxHeight = '0px';
        }
      });
    });
  };


  accordeon('.faq-item-title');
  accordeon('.documents-item-title');
  accordeon('.publish__item-box');


  function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector),
      tabsParent = document.querySelector(tabsParentSelector);
    if (tabsParent) {
      function hideTabContent() {
        tabsContent.forEach(item => {
          item.classList.add('hide');
          item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
          item.classList.remove(activeClass);
        });
      }

      function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
      }
      hideTabContent();
      showTabContent();

      tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && !target.classList.contains(activeClass)) {
          tabs.forEach((item, i) => {
            if (target == item) {
              hideTabContent();
              showTabContent(i);
            }
          });
        }
      });
    }
  }
  tabs('.pricing-head', '.pricing-tab', '.pricing-heading', 'active');
  function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('fadeOut', 'hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('fadeOut', 'hide');
    document.body.style.overflow = '';
  }

  function modal(triggerSelector, modalSelector) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);

    modalTrigger.forEach(item => {
      item.addEventListener('click', () => openModal(modalSelector));
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') == '' || e.target.classList.contains('data-close')) {
        closeModal(modalSelector);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal(modalSelector);
      }
    });

  }

  modal('.header-burger', '.sidebar');
  $('.reviews-slider').slick({
    infinite: false,
    dots: true,
    arrows: false,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        slidesToShow: 1,
        variableWidth: false,
      }
    ]
  });
  $('.keys-slider').slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
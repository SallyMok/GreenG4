 // SIDEBAR JAVASCRIPT CODES

    import '../styles/style.css';

    const banner = document.querySelector('header');
    const bannerCo2 = document.querySelector('.co2');
    const co2 = 30;

    if (co2 > 20) {
      banner.style.background = '#F5B400';
      bannerCo2.textContent = '20.78kg C02';
    }

    const opButton = document.querySelector('.blue');

    const sideBar = document.querySelector('form');

    function sidebarOpen() {
      sideBar.classList.add('formOpen');
    }
    opButton.addEventListener('click', sidebarOpen);

    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const obj = document.getElementById('value');

    //INTERSECT OBSERVER//
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('card-animation');
          animateValue(obj, 0, 20, 5000);
        }
      });
    });

    observer.observe(document.querySelector('form section:nth-of-type(2)'));

    
  //Validate
  function validate() {
    if (remember.checked == 1) {
      document.getElementById('bin').src = 'images/fullbin.png';
      document.getElementById('b1').classList.add('checked');
      document.getElementById('co2').classList.add('co2animation');
    } else {
      document.getElementById('bin').src = 'images/emptybin.png';
      document.getElementById('b1').classList.remove('checked');
      document.getElementById('co2').classList.remove('co2animation');
    }
  }
  const bin = document.getElementById('bin');

  function popupdel() {
    document.getElementById('popUp').classList.add('popvis');
  }
  bin.addEventListener('click', popupdel);


  const closebut = document.getElementById('closebut');function navclose() {  sideBar.classList.remove('formOpen');}closebut.addEventListener('click', navclose);


  
  


    // SUNBURST JAVASCRIPT CODES
    import * as d3 from 'd3';

let colorpalet = [
  "#4285F4",
  "#34A853",
  "#FBBC05",
  "#EA4335"
]

const color = d3.scaleOrdinal(colorpalet);


    fetch('inbox.json').then(res => res.json()).then(data => {
      Sunburst()
        .width('500')
        .height('500')
        .data(data)
        .label('name')
        .size('size')
        .labelOrientation('angular')
        .color("#4285F4","#34A853","#FBBC05")
        .color((d, parent) => color(parent ? parent.data.name : null))
        .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
        (document.getElementById('chart'));
    });

        fetch('inbox.json').then(res => res.json()).then(data => {
      Sunburst()
        .width('500')
        .height('500')
        .data(data)
        .label('name')
        .size('size')
        .labelOrientation('angular')
        .color("#4285F4","#34A853","#FBBC05")
        .color((d, parent) => color(parent ? parent.data.name : null))
        .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
        (document.getElementById('chart1'));
    });
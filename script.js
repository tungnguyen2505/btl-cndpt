const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();const msg=e.currentTarget.querySelector('.form-message');msg.textContent='Cảm ơn quý khách. Zencadia sẽ liên hệ trong thời gian sớm nhất.';e.currentTarget.reset()});
document.querySelectorAll('.map-dot').forEach(dot=>dot.addEventListener('click',()=>{document.querySelector('.map-caption').innerHTML=`PHÂN KHU ${dot.textContent}<br><small>ZENCADIA · PHAN THIẾT</small>`}));

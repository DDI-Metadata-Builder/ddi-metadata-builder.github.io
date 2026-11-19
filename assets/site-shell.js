/*
  Shared header and footer for root-level pages.
  New pages need only: body[data-page], [data-site-header], [data-site-footer],
  the site-shell.css link, and this script before </body>.
*/
(()=>{
  const page=document.body?.dataset.page||'';
  const headerHost=document.querySelector('[data-site-header]');
  const footerHost=document.querySelector('[data-site-footer]');
  const actionTemplate=document.querySelector('#site-header-actions');
  const actions=actionTemplate?actionTemplate.innerHTML.trim():'';
  const brandContent='<span class="site-mark-frame"><img class="site-mark" src="assets/logo-preview.png" alt="DDI Codebook Studio"></span><span><h1>DDI Codebook Studio</h1><p>Interactive metadata builder · DDI-Codebook 2.6</p></span>';
  const brand=page==='home'?'<div class="site-brand">'+brandContent+'</div>':'<a class="site-brand" href="index.html" aria-label="DDI Codebook Studio home">'+brandContent+'</a>';
  if(headerHost)headerHost.innerHTML='<header class="site-header">'+brand+actions+'</header>';
  if(actionTemplate)actionTemplate.remove();
  const links=[
    ['about','about.html','About'],
    ['', 'https://ddialliance.org/','DDI reference'],
    ['', 'https://github.com/DDI-Metadata-Builder/ddi-metadata-builder.github.io','GitHub'],
    ['license','license.html','License'],
    ['feedback','feedback.html','Feedback']
  ];
  const navigation=links.map(([key,href,label])=>'<a href="'+href+'"'+(key===page?' aria-current="page"':'')+(key?'':' target="_blank" rel="noopener noreferrer"')+'>'+label+'</a>').join('');
  if(footerHost)footerHost.innerHTML='<footer class="site-footer"><div class="footer-inner"><div class="footer-top"><nav class="footer-links" aria-label="Project information">'+navigation+'</nav></div><div class="footer-bottom">© 2026 Xiaoyao Han · DDI-Codebook schema materials are licensed separately under CC BY 4.0.</div></div></footer>';
})();

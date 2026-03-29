/* ═══════════════════════════════════════
   VISUALIK — main.js
   Conectado desde: index.html
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────
     CURSOR PERSONALIZADO
  ───────────────────────────────────── */
  const cur  = document.getElementById('cur');
  const cur2 = document.getElementById('cur2');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  // Cursor ring sigue con lerp (suavizado)
  (function lerpRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    cur2.style.left = rx + 'px';
    cur2.style.top  = ry + 'px';
    requestAnimationFrame(lerpRing);
  })();

  // Efecto hover en links y botones
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.width      = '16px';
      cur.style.height     = '16px';
      cur.style.background = '#f0ede8';
      cur2.style.width     = '50px';
      cur2.style.height    = '50px';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.width      = '10px';
      cur.style.height     = '10px';
      cur.style.background = 'var(--orange)';
      cur2.style.width     = '36px';
      cur2.style.height    = '36px';
    });
  });


  /* ─────────────────────────────────────
     NAVBAR — efecto scroll
  ───────────────────────────────────── */
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('on', window.scrollY > 50);
  }, { passive: true });


  /* ─────────────────────────────────────
     SCROLL REVEAL
  ───────────────────────────────────── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('v');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.r').forEach(el => revealObserver.observe(el));

});

document.addEventListener('DOMContentLoaded', () => {
  const services = [
    {
      id: 'web',
      index: '01',
      kicker: 'Diseno web',
      name: 'Sitios y landings que convierten',
      summary: 'Disenamos webs claras, veloces y alineadas con tu marca para transformar visitas en consultas o ventas.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      icon: '<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 20h8\"/><path d=\"M12 18v2\"/></svg>',
      tags: ['Landing pages', 'UX', 'SEO base'],
      includes: [
        'Arquitectura de contenidos y enfoque de conversion.',
        'Diseno visual responsive para desktop y mobile.',
        'Secciones comerciales, formularios, llamados a la accion y navegacion clara.',
        'Base tecnica lista para crecer con analytics y performance cuidada.'
      ],
      audience: [
        'Negocios de servicios que venden por Instagram, WhatsApp o reuniones.',
        'Marcas que ya tienen presencia pero no una web a la altura.',
        'Empresas que necesitan una landing para campanas o lanzamientos.'
      ],
      benefits: [
        'Mejor percepcion de marca desde el primer contacto.',
        'Mas claridad para explicar que haces y por que elegirte.',
        'Mas posibilidades de convertir visitas en consultas calificadas.'
      ],
      deliverables: [
        'Home o landing principal disenada y maquetada.',
        'Secciones comerciales, formulario y estructura de CTA.',
        'Guia visual base para seguir comunicando con coherencia.'
      ],
      ctaLabel: 'Quiero una web que venda',
      emailSubject: 'Quiero mejorar mi web con Visualik'
    },
    {
      id: 'social',
      index: '02',
      kicker: 'Gestion de redes sociales',
      name: 'Contenido que ordena tu presencia y mueve la marca',
      summary: 'Planificamos y producimos contenido con intencion para que tus redes dejen de ser un canal improvisado.',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1200&q=80',
      icon: '<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 4h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\"1\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/></svg>',
      tags: ['Calendario', 'Community', 'Reels'],
      includes: [
        'Calendario editorial mensual segun objetivos y temporada.',
        'Ideas, copies, diseno de piezas y lineamientos de publicacion.',
        'Adaptacion de formatos para feed, historias, reels y piezas clave.',
        'Revision de resultados para afinar lo que mejor responde.'
      ],
      audience: [
        'Negocios locales que necesitan presencia profesional y constante.',
        'Marcas personales que quieren construir autoridad.',
        'Pymes que publican sin estrategia y no sienten avance.'
      ],
      benefits: [
        'Mas consistencia visual y verbal en todos tus posteos.',
        'Mejor recordacion de marca y posicionamiento.',
        'Un canal activo que acompana el proceso comercial.'
      ],
      deliverables: [
        'Plan mensual con contenidos priorizados.',
        'Pack de piezas, copies y lineamientos por formato.',
        'Reporte simple con aprendizajes y ajustes recomendados.'
      ],
      ctaLabel: 'Quiero ordenar mis redes',
      emailSubject: 'Quiero gestionar mejor mis redes con Visualik'
    },
    {
      id: 'branding',
      index: '03',
      kicker: 'Branding e identidad visual',
      name: 'Una identidad visual con personalidad y direccion',
      summary: 'Construimos marcas memorables, consistentes y preparadas para verse bien en digital y en piezas comerciales.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      icon: '<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 3l7 4v10l-7 4l-7-4V7l7-4z\"/><path d=\"M9 10l3-2l3 2v4l-3 2l-3-2v-4z\"/></svg>',
      tags: ['Logo', 'Sistema visual', 'Manual base'],
      includes: [
        'Exploracion visual y definicion de personalidad de marca.',
        'Logo, paleta, tipografias y criterios de aplicacion.',
        'Sistema grafico adaptable a redes, web, presentaciones y ventas.',
        'Recursos base para que todo se vea unificado.'
      ],
      audience: [
        'Emprendimientos que arrancan y quieren salir con imagen fuerte.',
        'Negocios que crecieron pero su identidad quedo vieja o desordenada.',
        'Marcas que necesitan verse premium sin perder cercania.'
      ],
      benefits: [
        'Mayor coherencia en toda la experiencia de marca.',
        'Percepcion mas profesional y diferenciada.',
        'Base visual clara para disenar mas rapido y mejor.'
      ],
      deliverables: [
        'Logo principal y versiones complementarias.',
        'Paleta, tipografias, recursos y ejemplos de aplicacion.',
        'Mini manual o sistema visual editable.'
      ],
      ctaLabel: 'Quiero una identidad mas fuerte',
      emailSubject: 'Quiero renovar mi branding con Visualik'
    },
    {
      id: 'ads',
      index: '04',
      kicker: 'Publicidad digital y anuncios',
      name: 'Campanas pensadas para atraer demanda con criterio',
      summary: 'Armamos anuncios con estrategia, creatividades claras y seguimiento para invertir mejor y escalar con mas control.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      icon: '<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 11l18-7v16l-18-7v-2z\"/><path d=\"M11 14l1.5 5\"/></svg>',
      tags: ['Meta Ads', 'Embudo', 'Optimizacion'],
      includes: [
        'Definicion de objetivo, propuesta, audiencias y estructura de campana.',
        'Creatividades, copies y piezas para testear mensajes.',
        'Configuracion de anuncios, eventos y lectura base de rendimiento.',
        'Seguimiento con ajustes segun respuesta real.'
      ],
      audience: [
        'Marcas que quieren acelerar captacion de consultas o ventas.',
        'Negocios que ya invierten en ads pero sin una estructura clara.',
        'Lanzamientos o promociones que necesitan soporte de pauta.'
      ],
      benefits: [
        'Mas control sobre que se invierte y que responde mejor.',
        'Mejor alineacion entre creatividad, oferta y conversion.',
        'Capacidad de escalar con una base mas prolija.'
      ],
      deliverables: [
        'Arquitectura inicial de campana y objetivos.',
        'Set de anuncios y creatividades para testeo.',
        'Reporte de aprendizajes con recomendaciones de optimizacion.'
      ],
      ctaLabel: 'Quiero mejorar mis anuncios',
      emailSubject: 'Quiero mejorar mis anuncios con Visualik'
    },
    {
      id: 'automation',
      index: '05',
      kicker: 'Automatizacion y estrategia digital',
      name: 'Procesos que ahorran tiempo y ordenan la experiencia',
      summary: 'Conectamos herramientas, mensajes y automatizaciones para que tu operacion digital sea mas agil y menos manual.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
      icon: '<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M8 6h8\"/><path d=\"M8 12h8\"/><path d=\"M8 18h8\"/><path d=\"M4 6h.01\"/><path d=\"M4 12h.01\"/><path d=\"M4 18h.01\"/><path d=\"M15 3l3 3-3 3\"/><path d=\"M9 21l-3-3 3-3\"/></svg>',
      tags: ['Funnels', 'CRM', 'Automatizaciones'],
      includes: [
        'Mapeo de procesos comerciales y puntos repetitivos.',
        'Automatizaciones basicas para captacion, seguimiento y respuesta.',
        'Integracion entre formularios, CRM, email o WhatsApp segun el caso.',
        'Diseno de flujo para no perder oportunidades en el camino.'
      ],
      audience: [
        'Equipos pequenos que pierden tiempo en tareas manuales.',
        'Negocios que reciben consultas pero no tienen seguimiento consistente.',
        'Marcas que necesitan ordenar su operacion antes de escalar.'
      ],
      benefits: [
        'Menos friccion operativa y mas tiempo para vender.',
        'Mejor experiencia para la persona que consulta.',
        'Mas control sobre el avance de cada oportunidad.'
      ],
      deliverables: [
        'Mapa del flujo definido y documentado.',
        'Automatizaciones configuradas segun alcance.',
        'Guia breve para uso interno y continuidad.'
      ],
      ctaLabel: 'Quiero automatizar mejor',
      emailSubject: 'Quiero automatizar mejor mi negocio con Visualik'
    },
    {
      id: 'creative',
      index: '06',
      kicker: 'Contenido creativo y audiovisual',
      name: 'Piezas visuales para comunicar con mas impacto',
      summary: 'Creamos contenido audiovisual y grafico que eleva la percepcion de tu marca sin perder claridad comercial.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      icon: '<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"14\" height=\"14\" rx=\"2\"/><path d=\"M17 10l4-2v8l-4-2\"/><circle cx=\"8.5\" cy=\"10\" r=\"1.2\"/></svg>',
      tags: ['Reels', 'Edicion', 'Campanas'],
      includes: [
        'Concepto visual y guion simple segun campana o objetivo.',
        'Edicion de piezas cortas, recursos graficos y ritmo visual de marca.',
        'Adaptacion del contenido para anuncios, lanzamientos o redes.',
        'Criterio estetico alineado con la identidad de tu negocio.'
      ],
      audience: [
        'Marcas que necesitan verse mejor en pantalla y destacar.',
        'Negocios que quieren lanzar productos o comunicar promociones.',
        'Equipos que tienen material pero no una presentacion profesional.'
      ],
      benefits: [
        'Mayor impacto visual y mejor atencion en segundos.',
        'Mas recursos para campanas, redes y ventas.',
        'Contenido alineado con una identidad profesional y actual.'
      ],
      deliverables: [
        'Piezas audiovisuales o graficas segun alcance definido.',
        'Formatos adaptados para canales clave.',
        'Recursos listos para publicar y reutilizar.'
      ],
      ctaLabel: 'Quiero contenido mas potente',
      emailSubject: 'Quiero contenido creativo con Visualik'
    }
  ];

  const projects = [
    {
      name: 'Casa Brava',
      sector: 'Gastronomia local',
      summary: 'Rediseno de identidad, contenido para redes y pauta geolocalizada para ordenar la propuesta y aumentar reservas.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      services: ['Branding', 'Contenido', 'Ads locales'],
      result: 'Una presencia mucho mas premium y una comunicacion coherente entre redes, promos y experiencia de reserva.'
    },
    {
      name: 'Orbita Estudio',
      sector: 'Servicios profesionales',
      summary: 'Landing comercial, automatizacion de consultas y piezas de autoridad para transformar trafico frio en reuniones.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      services: ['Landing page', 'Automatizacion', 'Estrategia'],
      result: 'Mejor filtro de leads, mensaje mas claro y un recorrido de conversion mucho mas ordenado.'
    },
    {
      name: 'Nativa Beauty',
      sector: 'Marca de producto',
      summary: 'Sistema visual para lanzamiento, anuncios con creatividades nuevas y contenido de producto para e-commerce.',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      services: ['Visual identity', 'Anuncios', 'Contenido'],
      result: 'Mas coherencia entre campana, producto y tienda para sostener una comunicacion mucho mas vendible.'
    }
  ];

  const servicesGrid = document.getElementById('services-grid');
  const portfolioGrid = document.getElementById('portfolio-grid');
  const modal = document.getElementById('service-modal');
  const modalClose = document.getElementById('service-modal-close');
  const modalMedia = document.getElementById('service-modal-media');
  const modalKicker = document.getElementById('service-modal-kicker');
  const modalIcon = document.getElementById('service-modal-icon');
  const modalTitle = document.getElementById('service-modal-title');
  const modalSummary = document.getElementById('service-modal-summary');
  const modalTags = document.getElementById('service-modal-tags');
  const modalIncludes = document.getElementById('service-modal-includes');
  const modalAudience = document.getElementById('service-modal-audience');
  const modalBenefits = document.getElementById('service-modal-benefits');
  const modalDeliverables = document.getElementById('service-modal-deliverables');
  const modalCta = document.getElementById('service-modal-cta');
  const nav = document.getElementById('nav');
  const navToggle = document.querySelector('.nav-toggle');
  const year = document.getElementById('year');

  if (!servicesGrid || !portfolioGrid || !modal || !modalClose) {
    return;
  }

  const bindCursorTargets = () => {
    const cur = document.getElementById('cur');
    const cur2 = document.getElementById('cur2');

    if (!cur || !cur2) {
      return;
    }

    document.querySelectorAll('[data-cursor-bound!=true]').forEach((element) => {
      if (!element.matches('a, button')) {
        return;
      }

      element.setAttribute('data-cursor-bound', 'true');

      element.addEventListener('mouseenter', () => {
        cur.style.width = '16px';
        cur.style.height = '16px';
        cur.style.background = '#f7f1e8';
        cur2.style.width = '52px';
        cur2.style.height = '52px';
      });

      element.addEventListener('mouseleave', () => {
        cur.style.width = '10px';
        cur.style.height = '10px';
        cur.style.background = 'var(--orange)';
        cur2.style.width = '36px';
        cur2.style.height = '36px';
      });
    });
  };

  const observeReveals = () => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('v');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    document.querySelectorAll('.r:not(.v)').forEach((element) => revealObserver.observe(element));
  };

  const renderServices = () => {
    servicesGrid.innerHTML = services.map((service, index) => `
      <button
        class=\"srv-card v2 r d${(index % 4) + 1}\"
        type=\"button\"
        data-service=\"${service.id}\"
        aria-haspopup=\"dialog\"
        aria-controls=\"service-dialog\"
        aria-label=\"Ver detalle del servicio ${service.kicker}\"
      >
        <span class=\"srv-media-v2\">
          <img src=\"${service.image}\" alt=\"${service.kicker}\" loading=\"lazy\">
          <span class=\"srv-overlay-v2\"></span>
        </span>
        <span class=\"srv-arrow-v2\" aria-hidden=\"true\">
          <svg viewBox=\"0 0 24 24\"><path d=\"M7 17L17 7\"/><path d=\"M8 7h9v9\"/></svg>
        </span>
        <span class=\"srv-content-v2\">
          <span class=\"srv-topline-v2\">
            <span class=\"srv-num-v2\">${service.index}</span>
            <span class=\"srv-mini-v2\">${service.kicker}</span>
          </span>
          <span class=\"srv-ico-v2\" aria-hidden=\"true\">${service.icon}</span>
          <span class=\"srv-name-v2\">${service.name}</span>
          <span class=\"srv-desc-v2\">${service.summary}</span>
          <span class=\"srv-tags-v2\">${service.tags.map((tag) => `<span>${tag}</span>`).join('')}</span>
          <span class=\"srv-link-v2\">Ver alcance completo</span>
        </span>
      </button>
    `).join('');
  };

  const renderPortfolio = () => {
    portfolioGrid.innerHTML = projects.map((project, index) => `
      <article class=\"project-card r d${(index % 4) + 1}\">
        <div class=\"project-media\">
          <img src=\"${project.image}\" alt=\"${project.name}\" loading=\"lazy\">
          <div class=\"project-overlay\"></div>
        </div>
        <div class=\"project-content\">
          <div class=\"project-topline\">
            <span class=\"project-sector\">${project.sector}</span>
          </div>
          <h3>${project.name}</h3>
          <p>${project.summary}</p>
          <div class=\"project-services\">${project.services.map((service) => `<span>${service}</span>`).join('')}</div>
          <div class=\"project-result\">
            <span>Resultado buscado</span>
            <strong>${project.result}</strong>
          </div>
          <a class=\"project-link\" href=\"mailto:hola@visualik.agency?subject=Quiero%20un%20proyecto%20como%20este\">Quiero un proyecto asi</a>
        </div>
      </article>
    `).join('');
  };

  const renderList = (target, items) => {
    target.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
  };

  const openServiceModal = (serviceId) => {
    const service = services.find((entry) => entry.id === serviceId);

    if (!service) {
      return;
    }

    modalMedia.style.backgroundImage = `url('${service.image}')`;
    modalKicker.textContent = service.kicker;
    modalIcon.innerHTML = service.icon;
    modalTitle.textContent = service.name;
    modalSummary.textContent = service.summary;
    modalTags.innerHTML = service.tags.map((tag) => `<span>${tag}</span>`).join('');
    renderList(modalIncludes, service.includes);
    renderList(modalAudience, service.audience);
    renderList(modalBenefits, service.benefits);
    renderList(modalDeliverables, service.deliverables);
    modalCta.textContent = service.ctaLabel;
    modalCta.href = `mailto:hola@visualik.agency?subject=${encodeURIComponent(service.emailSubject)}`;

    modal.hidden = false;
    document.body.classList.add('modal-open');
  };

  const closeServiceModal = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  };

  renderServices();
  renderPortfolio();
  observeReveals();
  bindCursorTargets();

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('menu-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-panel a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  servicesGrid.addEventListener('click', (event) => {
    const card = event.target.closest('[data-service]');

    if (card) {
      openServiceModal(card.dataset.service);
    }
  });

  modalClose.addEventListener('click', closeServiceModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeServiceModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeServiceModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const serviceData = {
    web: {
      kicker: 'Diseno web',
      title: 'Sitios y landings que convierten',
      summary: 'Disenamos webs claras, veloces y pensadas para que tu marca se vea profesional y transforme visitas en consultas o ventas.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      includes: [
        'Arquitectura de contenidos y enfoque de conversion.',
        'Diseno responsive para desktop y mobile.',
        'Secciones comerciales, CTA y formularios claros.',
        'Base lista para seguir creciendo sin perder coherencia.'
      ],
      audience: [
        'Negocios de servicios que venden por redes o reuniones.',
        'Marcas que necesitan una web a la altura de lo que ofrecen.',
        'Lanzamientos o campanas que requieren una landing dedicada.'
      ],
      benefits: [
        'Mejor percepcion de marca.',
        'Mas claridad comercial en tu oferta.',
        'Mas chances de convertir trafico en consultas.'
      ],
      deliverables: [
        'Home o landing principal.',
        'Secciones clave de venta y contacto.',
        'Base visual lista para futuras mejoras.'
      ],
      cta: 'Quiero una web que venda',
      subject: 'Quiero mejorar mi web con Visualik'
    },
    social: {
      kicker: 'Gestion de redes',
      title: 'Contenido que ordena tu presencia',
      summary: 'Planificamos y producimos contenido con criterio para que tus redes comuniquen mejor y sostengan el proceso comercial.',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1200&q=80',
      includes: [
        'Calendario editorial segun objetivos y etapa del negocio.',
        'Ideas, copies, piezas y direccion visual.',
        'Adaptacion para feed, historias y reels.',
        'Revision de rendimiento para ajustar lo que funciona.'
      ],
      audience: [
        'Negocios locales que necesitan constancia y mejor imagen.',
        'Marcas personales que quieren construir autoridad.',
        'Pymes que publican sin estrategia clara.'
      ],
      benefits: [
        'Mas consistencia visual y verbal.',
        'Mejor posicionamiento de marca.',
        'Un canal activo que acompana ventas y confianza.'
      ],
      deliverables: [
        'Plan mensual de contenidos.',
        'Pack de piezas y copies.',
        'Lineamientos para publicacion y seguimiento.'
      ],
      cta: 'Quiero ordenar mis redes',
      subject: 'Quiero ordenar mis redes con Visualik'
    },
    branding: {
      kicker: 'Branding e identidad',
      title: 'Una identidad visual con direccion',
      summary: 'Construimos una marca mas coherente, reconocible y adaptable a redes, web, piezas comerciales y campanas.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      includes: [
        'Definicion visual de marca y personalidad.',
        'Logo, paleta, tipografias y recursos base.',
        'Sistema grafico adaptable a distintos canales.',
        'Ejemplos de aplicacion para comunicar con coherencia.'
      ],
      audience: [
        'Emprendimientos que quieren salir bien desde el inicio.',
        'Marcas que crecieron con una imagen desordenada.',
        'Negocios que necesitan verse mas premium y profesionales.'
      ],
      benefits: [
        'Mayor coherencia en toda la experiencia visual.',
        'Mas reconocimiento y mejor percepcion.',
        'Una base clara para disenar mas rapido y mejor.'
      ],
      deliverables: [
        'Sistema de identidad visual.',
        'Recursos y criterios de aplicacion.',
        'Archivos base listos para usar.'
      ],
      cta: 'Quiero una identidad mas fuerte',
      subject: 'Quiero renovar mi branding con Visualik'
    },
    ads: {
      kicker: 'Publicidad digital',
      title: 'Campanas con foco comercial',
      summary: 'Armamos anuncios con estrategia, creatividades claras y lectura de resultados para invertir mejor y escalar con mas control.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      includes: [
        'Definicion de objetivos, audiencias y estructura.',
        'Creatividades y mensajes para testeo.',
        'Configuracion base de campanas y seguimiento.',
        'Ajustes segun respuesta real.'
      ],
      audience: [
        'Marcas que necesitan generar mas demanda.',
        'Negocios que ya invierten pero sin criterio claro.',
        'Promociones o lanzamientos que requieren soporte de pauta.'
      ],
      benefits: [
        'Mas control sobre inversion y rendimiento.',
        'Mejor alineacion entre oferta y mensaje.',
        'Mas capacidad de escalar lo que funciona.'
      ],
      deliverables: [
        'Arquitectura inicial de campana.',
        'Piezas y anuncios para testeo.',
        'Recomendaciones de optimizacion.'
      ],
      cta: 'Quiero mejorar mis anuncios',
      subject: 'Quiero mejorar mis anuncios con Visualik'
    },
    automation: {
      kicker: 'Automatizacion y estrategia',
      title: 'Procesos que ordenan tu operacion',
      summary: 'Conectamos herramientas y flujos para que tu negocio ahorre tiempo, responda mejor y no pierda oportunidades.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
      includes: [
        'Mapeo de procesos y puntos manuales repetitivos.',
        'Flujos basicos para captacion y seguimiento.',
        'Integraciones segun el canal comercial.',
        'Documentacion simple para sostener el sistema.'
      ],
      audience: [
        'Equipos pequenos con tareas comerciales repetitivas.',
        'Negocios que reciben consultas y pierden seguimiento.',
        'Marcas que necesitan ordenar antes de escalar.'
      ],
      benefits: [
        'Menos friccion operativa.',
        'Mejor experiencia para quien consulta.',
        'Mas control del proceso comercial.'
      ],
      deliverables: [
        'Flujo definido y organizado.',
        'Automatizaciones configuradas segun alcance.',
        'Guia de uso y continuidad.'
      ],
      cta: 'Quiero automatizar mejor',
      subject: 'Quiero automatizar mejor mi negocio con Visualik'
    },
    creative: {
      kicker: 'Contenido creativo',
      title: 'Piezas visuales con mas impacto',
      summary: 'Creamos contenido audiovisual y grafico para elevar la percepcion de tu marca y darle mas fuerza a cada campana.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      includes: [
        'Concepto visual y direccion creativa.',
        'Edicion de piezas cortas y recursos graficos.',
        'Adaptacion a redes, anuncios o lanzamientos.',
        'Criterio visual alineado con tu identidad.'
      ],
      audience: [
        'Marcas que necesitan verse mejor en pantalla.',
        'Negocios que lanzan promos o productos.',
        'Equipos con material, pero sin presentacion profesional.'
      ],
      benefits: [
        'Mas impacto visual y atencion.',
        'Mas recursos para comunicar y vender.',
        'Contenido alineado con una imagen profesional.'
      ],
      deliverables: [
        'Piezas audiovisuales o graficas segun alcance.',
        'Formatos listos para publicar.',
        'Recursos reutilizables para futuras campanas.'
      ],
      cta: 'Quiero contenido mas potente',
      subject: 'Quiero contenido creativo con Visualik'
    }
  };

  const modal = document.getElementById('service-modal');
  const modalClose = document.getElementById('service-modal-close');
  const modalMedia = document.getElementById('service-modal-media');
  const modalKicker = document.getElementById('service-modal-kicker');
  const modalTitle = document.getElementById('service-modal-title');
  const modalSummary = document.getElementById('service-modal-summary');
  const modalIncludes = document.getElementById('service-modal-includes');
  const modalAudience = document.getElementById('service-modal-audience');
  const modalBenefits = document.getElementById('service-modal-benefits');
  const modalDeliverables = document.getElementById('service-modal-deliverables');
  const modalCta = document.getElementById('service-modal-cta');
  const serviceCards = document.querySelectorAll('.srv-card[data-service]');
  const year = document.getElementById('year');

  if (!modal || !modalClose || !serviceCards.length) {
    return;
  }

  const renderList = (target, items) => {
    target.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
  };

  const openServiceModal = (key) => {
    const service = serviceData[key];

    if (!service) {
      return;
    }

    modalMedia.style.backgroundImage = `url('${service.image}')`;
    modalKicker.textContent = service.kicker;
    modalTitle.textContent = service.title;
    modalSummary.textContent = service.summary;
    renderList(modalIncludes, service.includes);
    renderList(modalAudience, service.audience);
    renderList(modalBenefits, service.benefits);
    renderList(modalDeliverables, service.deliverables);
    modalCta.textContent = service.cta;
    modalCta.href = `mailto:hola@visualik.agency?subject=${encodeURIComponent(service.subject)}`;
    modal.hidden = false;
    document.body.classList.add('modal-open');
  };

  const closeServiceModal = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  };

  serviceCards.forEach((card) => {
    card.addEventListener('click', () => openServiceModal(card.dataset.service));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openServiceModal(card.dataset.service);
      }
    });
  });

  modalClose.addEventListener('click', closeServiceModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeServiceModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeServiceModal();
    }
  });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
});

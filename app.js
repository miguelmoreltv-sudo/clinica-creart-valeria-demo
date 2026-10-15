/**
 * CLÍNICA CREART BY GABRIELA ARELLANO — DEMO APPLICATION & CONCIERGE LOGIC
 * Includes interactive treatments filter, booking wizard, and Valeria AI concierge.
 */

// Treatments Data
const TREATMENTS_DATA = [
  {
    id: 'laser-diodo',
    category: 'depilacion',
    name: 'Depilación Láser de Diodo de Alta Potencia',
    duration: 'Según zona, 15 - 45 min',
    price: 'Desde 25€',
    plate: 'assets/plates/depilacion.jpg',
    tag: 'Depilación',
    desc: 'Tecnología de última generación apta para todo tipo de fototipos. Sesiones rápidas, confort térmico y máxima eficacia desde la primera cita.'
  },
  {
    id: 'power-hyaluronic',
    category: 'facial',
    name: 'Tratamiento Power Hyaluronic Skeyndor',
    duration: '60 min',
    price: '60€',
    plate: 'assets/plates/facial.jpg',
    tag: 'Facial',
    desc: 'Hidratación hidrodinámica 100% que equilibra la piel deshidratada y atenúa arrugas de expresión provocadas por la pérdida de agua.'
  },
  {
    id: 'vitamina-c',
    category: 'facial',
    name: 'Power C+ Antioxidante e Iluminador',
    duration: '60 min',
    price: '65€',
    plate: 'assets/plates/facial.jpg',
    tag: 'Facial',
    desc: 'Potente concentrado de Vitamina C y extracto de granada. Revitaliza la piel apagada, unifica el tono y combate el daño solar y ambiental.'
  },
  {
    id: 'anticelulitico',
    category: 'corporal',
    name: 'Tratamiento Anticelulítico & Maderoterapia',
    duration: '60 min',
    price: '60€',
    plate: 'assets/plates/corporal.jpg',
    tag: 'Corporal',
    desc: 'Combinación drenante y remodeladora para reducir volumen localizado, reactivar la circulación y reafirmar el tejido cutáneo.'
  },
  {
    id: 'presoterapia',
    category: 'corporal',
    name: 'Presoterapia Médica Ballancer',
    duration: '45 min',
    price: '35€',
    plate: 'assets/plates/corporal.jpg',
    tag: 'Corporal',
    desc: 'Drenaje linfático secuencial ideal para aliviar piernas cansadas, retención de líquidos y como complemento tras sesiones reductoras.'
  },
  {
    id: 'masaje-relajante',
    category: 'masajes',
    name: 'Masaje Relajante & Descontracturante',
    duration: '50 min',
    price: '60€',
    plate: 'assets/plates/masajes.jpg',
    tag: 'Masajes',
    desc: 'Técnica personalizada que alivia tensiones musculares en espalda y cervicales con aceites botánicos esenciales en cabina climatizada.'
  }
];

// Available Time Slots
const TIME_SLOTS = [
  '11:00', '12:00', '13:00', '16:00', '17:00', '18:00', '19:00'
];

// App State
const state = {
  activeTab: 'todos',
  wizard: {
    step: 1,
    bookingType: 'valoracion', // 'valoracion' (0€) or 'tratamiento' (25€ señal)
    selectedTreatment: 'valoracion-gratis',
    treatmentName: 'Valoración Previa de Diagnóstico (20 min)',
    priceLabel: 'Gratuita (0€)',
    date: '2026-10-20',
    time: '12:00',
    name: '',
    phone: '',
    email: '',
    notes: ''
  },
  chat: {
    isOpen: false,
    history: []
  }
};

// DOM Init
document.addEventListener('DOMContentLoaded', () => {
  renderTreatmentsGrid();
  setupTabFilters();
  setupWizardListeners();
  setupValeriaDrawer();
});

// Render Bento Treatments
function renderTreatmentsGrid() {
  const grid = document.getElementById('treatmentsGrid');
  if (!grid) return;

  const filtered = state.activeTab === 'todos' 
    ? TREATMENTS_DATA 
    : TREATMENTS_DATA.filter(t => t.category === state.activeTab);

  grid.innerHTML = filtered.map(t => `
    <article class="treatment-card" data-id="${t.id}">
      <div class="card-image-wrap">
        <img src="${t.plate}" alt="${t.name}" loading="lazy">
        <span class="card-category-tag">${t.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-duration">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${t.duration}
          </span>
          <span class="card-price">${t.price}</span>
        </div>
        <h3 class="card-title">${t.name}</h3>
        <p class="card-desc">${t.desc}</p>
        <div class="card-action">
          <button class="btn-card" onclick="openBookingForTreatment('${t.id}')">
            Reservar con señal 25€
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Setup Treatment Filter Tabs
function setupTabFilters() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.getAttribute('data-tab');
      renderTreatmentsGrid();
    });
  });
}

// ==============================================================================
// BOOKING WIZARD LOGIC
// ==============================================================================

function openBookingModal(type = 'valoracion') {
  state.wizard.step = 1;
  state.wizard.bookingType = type;
  
  if (type === 'valoracion') {
    state.wizard.selectedTreatment = 'valoracion-gratis';
    state.wizard.treatmentName = 'Valoración de Diagnóstico Personalizado (20 min)';
    state.wizard.priceLabel = 'Gratuita (0€)';
  } else {
    state.wizard.selectedTreatment = 'power-hyaluronic';
    state.wizard.treatmentName = 'Tratamiento Power Hyaluronic Skeyndor (60 min)';
    state.wizard.priceLabel = '60€ (Señal de 25€ para confirmar)';
  }

  updateWizardUI();
  document.getElementById('bookingModalOverlay').classList.add('open');
}

function openBookingForTreatment(treatmentId) {
  const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId);
  if (!treatment) {
    openBookingModal('tratamiento');
    return;
  }
  state.wizard.step = 2; // Jump directly to time/date if treatment pre-selected
  state.wizard.bookingType = 'tratamiento';
  state.wizard.selectedTreatment = treatment.id;
  state.wizard.treatmentName = treatment.name;
  state.wizard.priceLabel = `${treatment.price} (Señal de 25€ requerida)`;

  updateWizardUI();
  document.getElementById('bookingModalOverlay').classList.add('open');
}

function closeBookingModal() {
  document.getElementById('bookingModalOverlay').classList.remove('open');
}

function setupWizardListeners() {
  const overlay = document.getElementById('bookingModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeBookingModal();
    });
  }
}

function updateWizardUI() {
  const body = document.getElementById('wizardStepContent');
  const footer = document.getElementById('wizardFooter');
  const stepIndicators = document.querySelectorAll('.wizard-step');

  // Step Indicators
  stepIndicators.forEach((ind, i) => {
    const stepNum = i + 1;
    ind.classList.remove('active', 'completed');
    if (stepNum === state.wizard.step) {
      ind.classList.add('active');
    } else if (stepNum < state.wizard.step) {
      ind.classList.add('completed');
    }
  });

  // Step 1: Modalidad
  if (state.wizard.step === 1) {
    body.innerHTML = `
      <p style="margin-bottom: 18px; font-size: 0.9375rem; color: var(--color-ink-soft);">
        Selecciona la modalidad de tu cita en Clínica CreArT:
      </p>
      <div class="booking-option-card ${state.wizard.bookingType === 'valoracion' ? 'selected' : ''}" onclick="selectBookingType('valoracion')">
        <div>
          <div class="opt-title">1. Diagnóstico Clínico + Plan Personalizado (20 min)</div>
          <div class="opt-sub">Diagnóstico presencial con Gabriela Arellano. Tu señal de 25€ se descuenta al 100% de tu primer tratamiento o producto.</div>
        </div>
        <div class="opt-price-tag">Señal 25€ (Bonificada)</div>
      </div>
      <div class="booking-option-card ${state.wizard.bookingType === 'tratamiento' ? 'selected' : ''}" onclick="selectBookingType('tratamiento')">
        <div>
          <div class="opt-title">2. Reserva Directa de Tratamiento en Cabina</div>
          <div class="opt-sub">Si ya sabes qué tratamiento deseas (Facial Skeyndor, Corporal o Láser). La señal de 25€ se descuenta del total.</div>
        </div>
        <div class="opt-price-tag">Señal 25€ (Deducible)</div>
      </div>
      <div style="background: var(--color-surface-subtle); border-left: 3px solid var(--color-olive); padding: 12px 14px; font-size: 0.8125rem; color: var(--color-ink-soft); margin-top: 14px; border-radius: 4px;">
        ⚖️ <strong>Política de Compromiso y Cancelación:</strong> Tu señal asegura la reserva exclusiva de cabina y desinfección médica. Puedes cambiar de fecha sin coste avisando con 24h de antelación. En caso de incomparecencia sin aviso (no-show), la señal no es reembolsable.
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.875rem;" onclick="closeBookingModal()">Cancelar</button>
      <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.875rem;" onclick="wizardNext()">Continuar →</button>
    `;
  }
  // Step 2: Tratamiento (si eligió tratamiento) o pasar a Fecha
  else if (state.wizard.step === 2) {
    if (state.wizard.bookingType === 'valoracion') {
      // Valoración doesn't need catalog selection, go directly to Date & Time
      wizardNext();
      return;
    }
    body.innerHTML = `
      <p style="margin-bottom: 18px; font-size: 0.9375rem; color: var(--color-ink-soft);">
        Selecciona el tratamiento que deseas reservar:
      </p>
      ${TREATMENTS_DATA.map(t => `
        <div class="booking-option-card ${state.wizard.selectedTreatment === t.id ? 'selected' : ''}" onclick="selectTreatmentOption('${t.id}', '${t.name}', '${t.price}')">
          <div>
            <div class="opt-title">${t.name}</div>
            <div class="opt-sub">${t.duration} · ${t.tag}</div>
          </div>
          <div class="opt-price-tag">${t.price}</div>
        </div>
      `).join('')}
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.875rem;" onclick="wizardPrev()">← Atrás</button>
      <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.875rem;" onclick="wizardNext()">Elegir Horario →</button>
    `;
  }
  // Step 3: Fecha y Hora
  else if (state.wizard.step === 3) {
    body.innerHTML = `
      <p style="margin-bottom: 16px; font-size: 0.9375rem; color: var(--color-ink-soft);">
        Selecciona tu fecha y hora preferida en Calle de Alcalá 102 (Metro Goya):
      </p>
      <div class="form-group">
        <label class="form-label" for="bookingDate">Fecha deseada:</label>
        <input type="date" id="bookingDate" class="form-control" value="${state.wizard.date}" min="2026-10-16" onchange="state.wizard.date = this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Horarios disponibles (estimación):</label>
        <div class="slots-grid">
          ${TIME_SLOTS.map(s => `
            <button class="slot-btn ${state.wizard.time === s ? 'selected' : ''}" type="button" onclick="selectSlot('${s}')">${s}</button>
          `).join('')}
        </div>
      </div>
      <div style="background: var(--color-sand); border-radius: var(--radius-sm); padding: 12px 16px; font-size: 0.8125rem; color: var(--color-muted); margin-top: 16px;">
        ℹ️ Horario de atención: Lunes a Viernes de 10:00 a 20:00 (L-M desde 11:00). Sábados de 10:00 a 14:00.
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.875rem;" onclick="wizardPrev()">← Atrás</button>
      <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.875rem;" onclick="wizardNext()">Tus Datos →</button>
    `;
  }
  // Step 4: Datos de Contacto
  else if (state.wizard.step === 4) {
    body.innerHTML = `
      <p style="margin-bottom: 16px; font-size: 0.9375rem; color: var(--color-ink-soft);">
        Introduce tus datos para registrar la solicitud:
      </p>
      <div class="form-group">
        <label class="form-label" for="clientName">Nombre y apellidos *</label>
        <input type="text" id="clientName" class="form-control" placeholder="Ej. Carmen García" value="${state.wizard.name}" oninput="state.wizard.name = this.value" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="clientPhone">Teléfono / WhatsApp *</label>
        <input type="tel" id="clientPhone" class="form-control" placeholder="Ej. 612 345 678" value="${state.wizard.phone}" oninput="state.wizard.phone = this.value" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="clientEmail">Correo electrónico</label>
        <input type="email" id="clientEmail" class="form-control" placeholder="carmen@ejemplo.es" value="${state.wizard.email}" oninput="state.wizard.email = this.value">
      </div>
      <div class="form-group">
        <label class="form-label" for="clientNotes">¿Tienes alguna duda o condición médica/alergia previa?</label>
        <textarea id="clientNotes" class="form-control" rows="2" placeholder="Opcional: motivo de consulta o tipo de piel..." oninput="state.wizard.notes = this.value">${state.wizard.notes}</textarea>
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.875rem;" onclick="wizardPrev()">← Atrás</button>
      <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.875rem;" onclick="submitBooking()">Confirmar Solicitud ✓</button>
    `;
  }
  // Step 5: Confirmación
  else if (state.wizard.step === 5) {
    const code = 'CRT-' + Math.floor(1000 + Math.random() * 9000);
    body.innerHTML = `
      <div style="text-align: center; padding: 20px 0;">
        <div style="width: 60px; height: 60px; border-radius: 50%; background: #E6F4EA; color: #137333; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 1.75rem;">
          ✓
        </div>
        <h4 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-ink); margin-bottom: 8px;">
          ¡Solicitud Registrada con Éxito!
        </h4>
        <p style="font-size: 0.875rem; color: var(--color-muted); max-width: 440px; margin: 0 auto 24px;">
          Hemos recibido tu solicitud. Nuestro equipo y Valeria revisarán la disponibilidad y te enviarán la confirmación a tu teléfono.
        </p>
        <div style="background: var(--color-sand); border-radius: var(--radius-md); padding: 20px; text-align: left; max-width: 460px; margin: 0 auto; border: 1px solid var(--color-border);">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 8px; margin-bottom: 12px;">
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-muted); font-weight: 700;">Código de Reserva</span>
            <span style="font-weight: 700; color: var(--color-olive);">${code}</span>
          </div>
          <p style="font-size: 0.875rem; margin-bottom: 6px;"><strong>Tipo:</strong> ${state.wizard.treatmentName}</p>
          <p style="font-size: 0.875rem; margin-bottom: 6px;"><strong>Fecha y hora:</strong> ${state.wizard.date} a las ${state.wizard.time}</p>
          <p style="font-size: 0.875rem; margin-bottom: 6px;"><strong>Paciente:</strong> ${state.wizard.name || 'Cliente CreArT'}</p>
          <p style="font-size: 0.875rem; color: var(--color-olive); font-weight: 600;"><strong>Condición económica:</strong> ${state.wizard.priceLabel}</p>
        </div>
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-primary" style="margin: 0 auto; padding: 10px 32px;" onclick="closeBookingModal()">Cerrar y volver a la web</button>
    `;
  }
}

function selectBookingType(type) {
  state.wizard.bookingType = type;
  if (type === 'valoracion') {
    state.wizard.selectedTreatment = 'valoracion-gratis';
    state.wizard.treatmentName = 'Valoración de Diagnóstico (20 min)';
    state.wizard.priceLabel = 'Gratuita (0€)';
  } else {
    state.wizard.selectedTreatment = 'power-hyaluronic';
    state.wizard.treatmentName = 'Power Hyaluronic Skeyndor';
    state.wizard.priceLabel = '60€ (Señal de 25€ requerida)';
  }
  updateWizardUI();
}

function selectTreatmentOption(id, name, price) {
  state.wizard.selectedTreatment = id;
  state.wizard.treatmentName = name;
  state.wizard.priceLabel = `${price} (Señal 25€)`;
  updateWizardUI();
}

function selectSlot(time) {
  state.wizard.time = time;
  updateWizardUI();
}

function wizardNext() {
  state.wizard.step++;
  updateWizardUI();
}

function wizardPrev() {
  if (state.wizard.step > 1) {
    state.wizard.step--;
    // If going back from Step 3 when bookingType was valoracion, go straight to Step 1
    if (state.wizard.step === 2 && state.wizard.bookingType === 'valoracion') {
      state.wizard.step = 1;
    }
    updateWizardUI();
  }
}

function submitBooking() {
  const nameInput = document.getElementById('clientName');
  const phoneInput = document.getElementById('clientPhone');
  if (nameInput && !nameInput.value.trim()) {
    alert('Por favor, indica tu nombre.');
    nameInput.focus();
    return;
  }
  if (phoneInput && !phoneInput.value.trim()) {
    alert('Por favor, indica tu teléfono o WhatsApp.');
    phoneInput.focus();
    return;
  }

  state.wizard.step = 5;
  updateWizardUI();
}

// ==============================================================================
// VALERIA AI CONCIERGE LOGIC
// ==============================================================================

const VALERIA_KNOWLEDGE = {
  greetings: '¡Hola! Soy Valeria, la asistente digital de Clínica CreArT by Gabriela Arellano. ¿En qué puedo orientarte hoy? Puedes preguntarme por tratamientos, nuestro diagnóstico bonificado de 20 min, política de señal y cancelación, o cómo llegar a Alcalá 102.',
  valoracion: 'En CreArT el Diagnóstico Clínico de 20 minutos con Gabriela Arellano está 100% BONIFICADO. Al reservar solicitamos una señal de compromiso de 25€ que se descuenta íntegramente de tu primer tratamiento o producto en clínica. Si decides cuidarte, ¡la valoración es completamente gratis!',
  senal: 'Para asegurar tu turno y garantizar que la cabina esté esterilizada y lista exclusivamente para ti, solicitamos una señal de 25€. Esta señal se descuenta íntegramente del coste de tu sesión o producto el día de tu cita.',
  noshow: 'Nuestra política de asistencia protege la puntualidad del centro: puedes modificar o cambiar de fecha sin ningún coste con al menos 24 horas de antelación. En caso de incomparecencia sin aviso (no-show), la señal de 25€ no es reembolsable para compensar el bloqueo de sala y el tiempo de la especialista.',
  ubicacion: 'Estamos en pleno Barrio de Salamanca: Calle de Alcalá 102, 1º A, Madrid (28009). A solo 50 metros del Metro Goya (Líneas 2 y 4) y muy cerca del WiZink Center y El Corte Inglés de Goya.',
  horarios: 'Nuestros horarios de atención son:\n• Lunes y Martes: 11:00 a 19:00\n• Miércoles: 10:00 a 19:00\n• Jueves y Viernes: 10:00 a 20:00\n• Sábados: 10:00 a 14:00\n• Domingos: Cerrado.',
  faciales: 'Nuestros tratamientos faciales estrella utilizan cosmética médica Skeyndor:\n1. Power Hyaluronic (60€, 60 min): Hidratación profunda y atenuación de líneas.\n2. Power C+ Iluminador (65€, 60 min): Vitamina C antioxidante para pieles apagadas o con manchas.\n¿Te gustaría reservar tu diagnóstico para que analicemos tu piel?',
  laser: 'Nuestra depilación láser de diodo de alta potencia es apta para todo tipo de pieles y vello. Contamos con cabezal refrigerado para que la sesión sea cómoda e indolora. Los precios van desde 25€ por zona.',
  equipo: 'Nuestra clínica está dirigida por Gabriela Arellano, oficial de estética con más de 10 años de experiencia en Madrid, acompañada por Daniela y por mí en la atención a nuestros pacientes. Contamos con más de 1.470 opiniones con un 4.9/5 en Treatwell.'
};

function setupValeriaDrawer() {
  const trigger = document.getElementById('valeriaTrigger');
  const headerBtn = document.getElementById('valeriaHeaderBtn');
  const drawer = document.getElementById('valeriaDrawer');
  const overlay = document.getElementById('valeriaOverlay');
  const closeBtn = document.getElementById('valeriaClose');
  const sendBtn = document.getElementById('chatSendBtn');
  const input = document.getElementById('chatInput');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    if (state.chat.history.length === 0) {
      addBotMessage(VALERIA_KNOWLEDGE.greetings);
    }
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }

  if (trigger) trigger.addEventListener('click', openDrawer);
  if (headerBtn) headerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => {
      handleUserChat(input.value);
      input.value = '';
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleUserChat(input.value);
        input.value = '';
      }
    });
  }
}

function handleUserChat(text) {
  if (!text || !text.trim()) return;
  const userText = text.trim();
  addUserMessage(userText);

  setTimeout(() => {
    const lower = userText.toLowerCase();
    let reply = '';

    if (lower.includes('valoracion') || lower.includes('gratis') || lower.includes('gratuita') || lower.includes('diagnostico')) {
      reply = VALERIA_KNOWLEDGE.valoracion + '<br><br><button class="btn btn-primary" style="padding: 6px 14px; font-size: 0.8125rem; margin-top: 6px;" onclick="openBookingModal(\'valoracion\')">Reservar diagnóstico bonificado (Señal 25€)</button>';
    } else if (lower.includes('no-show') || lower.includes('incomparecencia') || lower.includes('no vengo') || lower.includes('cancelar') || lower.includes('cancelacion') || lower.includes('anular')) {
      reply = VALERIA_KNOWLEDGE.noshow;
    } else if (lower.includes('señal') || lower.includes('acconto') || lower.includes('25') || lower.includes('deposito') || lower.includes('pago')) {
      reply = VALERIA_KNOWLEDGE.senal;
    } else if (lower.includes('donde') || lower.includes('ubicacion') || lower.includes('metro') || lower.includes('goya') || lower.includes('alcala') || lower.includes('direccion') || lower.includes('llegar') || lower.includes('mapa')) {
      reply = VALERIA_KNOWLEDGE.ubicacion;
    } else if (lower.includes('horario') || lower.includes('sabado') || lower.includes('abierto') || lower.includes('cuando')) {
      reply = VALERIA_KNOWLEDGE.horarios.replace(/\n/g, '<br>');
    } else if (lower.includes('facial') || lower.includes('skeyndor') || lower.includes('limpieza') || lower.includes('vitamina') || lower.includes('arruga')) {
      reply = VALERIA_KNOWLEDGE.faciales;
    } else if (lower.includes('laser') || lower.includes('depilacion') || lower.includes('diodo') || lower.includes('vello')) {
      reply = VALERIA_KNOWLEDGE.laser;
    } else if (lower.includes('gabriela') || lower.includes('equipo') || lower.includes('quienes') || lower.includes('daniela')) {
      reply = VALERIA_KNOWLEDGE.equipo;
    } else if (lower.includes('cita') || lower.includes('reservar') || lower.includes('pedir') || lower.includes('turno')) {
      reply = '¡Estupendo! Puedes reservar tu cita aquí mismo en la web con nuestro asistente paso a paso:<br><br><button class="btn btn-primary" style="padding: 6px 14px; font-size: 0.8125rem;" onclick="openBookingModal(\'valoracion\')">Abrir selector de citas</button>';
    } else {
      reply = 'Gracias por tu consulta. En CreArT cuidamos cada detalle. ¿Deseas saber más sobre nuestro diagnóstico bonificado de 20 min, nuestros tratamientos Skeyndor, o prefieres reservar tu cita para que Gabriela analice tu caso?';
    }

    addBotMessage(reply);
  }, 450);
}

function addUserMessage(msg) {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble user';
  bubble.textContent = msg;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function addBotMessage(html) {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble assistant';
  bubble.innerHTML = html;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function askValeria(topic) {
  if (topic === 'valoracion') {
    handleUserChat('¿Qué incluye la valoración gratuita?');
  } else if (topic === 'ubicacion') {
    handleUserChat('¿Dónde estáis y cómo llegar?');
  } else if (topic === 'senal') {
    handleUserChat('¿Cómo funciona la señal de 25€?');
  } else if (topic === 'facial') {
    handleUserChat('Recomiéndame un tratamiento facial');
  } else if (topic === 'cita') {
    handleUserChat('Quiero pedir una cita ahora');
  }
}

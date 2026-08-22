// ====================================================================
// NÚCLEO DE AUTENTICACIÓN Y SEGURIDAD: PORTAL ACADÉMICO UCSAR
// Incluye este script en todas tus páginas protegidas.
// ====================================================================

const SUPABASE_URL = "https://orurkfacxrvxlrkdrqer.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_xRwAgFEbR1ryIePectj_FA_0ZQEs8Vw";

const ADMIN_EMAILS = [
    "profesorfclementeunipap@gmail.com",
    "fclem@gmail.com"
];

let supabaseClient = null;

// Inicialización segura esperando al CDN
function initSupabaseAuth() {
    if (typeof window.supabase === "undefined") {
        // Reintentar en 50ms si el CDN no ha cargado
        setTimeout(initSupabaseAuth, 50);
        return;
    }
    
    // Crear el cliente usando sessionStorage para que la sesión muera al cerrar el navegador
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
            storage: window.sessionStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    });
    
    // Proteger la ruta inmediatamente
    protegerRuta();
}

function esRutaRestringida(path) {
    // Todos los módulos HABILITADOS para el Cierre del Diplomado
    return false;
}

function actualizarVistaModulosIndex(isAdmin) {
    const runUpdate = () => {
        const path = window.location.pathname;
        if (!path.includes("index.html") && !path.endsWith("/") && !path.endsWith("index.html")) return;

        // Módulo VIII: SIEMPRE habilitado para todos los usuarios
        const modulo8container = document.getElementById("modulo8");
        if (modulo8container) {
            const badge8 = modulo8container.querySelector(".flex.justify-between.items-start.mb-4");
            const btn8 = modulo8container.querySelector(".flex.flex-col.mt-auto");
            if (badge8) {
                badge8.innerHTML = `
                    <div>
                        <span class="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider"><i class="fas fa-check-circle mr-1 text-emerald-600"></i> DISPONIBLE</span>
                        <span class="text-slate-600 text-xs font-semibold ml-2">MÓDULO VIII</span>
                    </div>
                    <span class="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">Nuevo</span>
                `;
            }
            if (btn8) {
                btn8.innerHTML = `
                    <a href="MODULO VIII/MODULO_VIII.html" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-bold flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        <i class="fas fa-book-open mr-2"></i> Acceder al Módulo VIII
                    </a>
                    <a href="MODULO VIII/Ley_Impuesto_al_Valor_Agregado_Venezuela_Gaceta_6507.html" class="w-full bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 py-2.5 rounded-lg font-semibold flex items-center justify-center transition-all text-sm mt-2">
                        <i class="fas fa-file-alt mr-2 text-indigo-500"></i> Ley del IVA (Gaceta N° 6.507)
                    </a>
                `;
            }
        }

        // Módulo IX: SIEMPRE habilitado para todos los usuarios
        const modulo9container = document.getElementById("modulo9");
        if (modulo9container) {
            const badge9 = modulo9container.querySelector(".flex.justify-between.items-start.mb-4");
            const btn9 = modulo9container.querySelector(".flex.flex-col.mt-auto");
            if (badge9) {
                badge9.innerHTML = `
                    <div>
                        <span class="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider"><i class="fas fa-check-circle mr-1 text-emerald-600"></i> DISPONIBLE</span>
                        <span class="text-slate-600 text-xs font-semibold ml-2">MÓDULO IX</span>
                    </div>
                    <span class="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full">Nuevo</span>
                `;
            }
            if (btn9) {
                btn9.innerHTML = `
                    <a href="MODULO IX/MODULO_IX.html" class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg font-bold flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        <i class="fas fa-book-open mr-2"></i> Acceder al Módulo IX
                    </a>
                    <a href="MODULO IX/Trabajo_Academico_Modulo_IX_Documentacion_Comercial.pdf" target="_blank" class="w-full bg-white border border-purple-200 text-purple-700 hover:bg-purple-50 py-2.5 rounded-lg font-semibold flex items-center justify-center transition-all text-sm mt-2">
                        <i class="fas fa-file-pdf mr-2 text-red-500"></i> Tratado Académico (PDF)
                    </a>
                `;
            }
        }

        // Módulo X: SIEMPRE habilitado para todos los usuarios
        const modulo10container = document.getElementById("modulo10");
        if (modulo10container) {
            const badge10 = modulo10container.querySelector(".flex.justify-between.items-start.mb-4");
            const btn10 = modulo10container.querySelector(".flex.flex-col.mt-auto");
            if (badge10) {
                badge10.innerHTML = `
                    <div>
                        <span class="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider"><i class="fas fa-check-circle mr-1 text-emerald-600"></i> DISPONIBLE</span>
                        <span class="text-slate-600 text-xs font-semibold ml-2">MÓDULO X</span>
                    </div>
                    <span class="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Nuevo</span>
                `;
            }
            if (btn10) {
                btn10.innerHTML = `
                    <a href="MODULO X/MODULO_X.html" class="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 rounded-lg font-bold flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        <i class="fas fa-book-open mr-2"></i> Acceder al Módulo X
                    </a>
                    <a href="MODULO X/Trabajo_Academico_Modulo_X_Analisis_de_la_Contabilidad.pdf" target="_blank" class="w-full bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 py-2.5 rounded-lg font-semibold flex items-center justify-center transition-all text-sm mt-2">
                        <i class="fas fa-file-pdf mr-2 text-red-500"></i> Tratado Académico (PDF)
                    </a>
                `;
            }
        }

        // Módulo XI: SIEMPRE habilitado para el Cierre del Diplomado
        const modulo11container = document.getElementById("modulo11");
        if (modulo11container) {
            const badge11 = modulo11container.querySelector(".flex.justify-between.items-start.mb-4");
            const btn11 = modulo11container.querySelector(".flex.flex-col.mt-auto");
            if (badge11) {
                badge11.innerHTML = `
                    <div>
                        <span class="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider"><i class="fas fa-check-circle mr-1 text-emerald-600"></i> DISPONIBLE</span>
                        <span class="text-slate-600 text-xs font-semibold ml-2">MÓDULO XI</span>
                    </div>
                    <span class="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">Final</span>
                `;
            }
            if (btn11) {
                btn11.innerHTML = `
                    <a href="MODULO XI/MODULO_XI.html" class="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-3 rounded-lg font-bold flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        <i class="fas fa-book-open mr-2"></i> Acceder al Módulo XI
                    </a>
                    <a href="MODULO XI/Trabajo_Academico_Modulo_XI_Aplicaciones_Informaticas.pdf" target="_blank" class="w-full bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 py-2.5 rounded-lg font-semibold flex items-center justify-center transition-all text-sm mt-2">
                        <i class="fas fa-file-pdf mr-2 text-red-500"></i> Tratado Académico (PDF)
                    </a>
                `;
            }
        }

        // Módulo XII: SIEMPRE habilitado para el Cierre del Diplomado
        const modulo12container = document.getElementById("modulo12");
        if (modulo12container) {
            const badge12 = modulo12container.querySelector(".flex.justify-between.items-start.mb-4");
            const btn12 = modulo12container.querySelector(".flex.flex-col.mt-auto");
            if (badge12) {
                badge12.innerHTML = `
                    <div>
                        <span class="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider"><i class="fas fa-check-circle mr-1 text-emerald-600"></i> DISPONIBLE</span>
                        <span class="text-slate-600 text-xs font-semibold ml-2">MÓDULO XII</span>
                    </div>
                    <span class="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded-full">Final</span>
                `;
            }
            if (btn12) {
                btn12.innerHTML = `
                    <a href="MODULO XII/MODULO_XII.html" class="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 rounded-lg font-bold flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        <i class="fas fa-book-open mr-2"></i> Acceder al Módulo XII
                    </a>
                    <a href="MODULO XII/Trabajo_Academico_Modulo_XII_Registro_Contable_Informatico.pdf" target="_blank" class="w-full bg-white border border-cyan-200 text-cyan-700 hover:bg-cyan-50 py-2.5 rounded-lg font-semibold flex items-center justify-center transition-all text-sm mt-2">
                        <i class="fas fa-file-pdf mr-2 text-red-500"></i> Tratado Académico (PDF)
                    </a>
                `;
            }
        }
                if (btnContainer) {
                    btnContainer.innerHTML = `
                        <a href="${mod.url}" class="bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition flex items-center justify-center shadow-md">
                            <i class="fas fa-unlock mr-2"></i> Ingresar (Admin) <i class="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                    `;
                }
            } else {
                if (badgeContainer) {
                    badgeContainer.innerHTML = `
                        <div>
                            <span class="bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider"><i class="fas fa-lock mr-1 text-amber-600"></i> DESHABILITADO</span>
                            <span class="text-slate-400 text-xs font-semibold ml-2">MÓDULO ${mod.num}</span>
                        </div>
                    `;
                }
                if (btnContainer) {
                    btnContainer.innerHTML = `
                        <button onclick="alert('🔒 El Módulo ${mod.num} se encuentra deshabilitado para estudiantes y reservado exclusivamente para el Administrador.');" class="w-full bg-slate-100 border border-slate-300 text-slate-400 py-3 rounded-lg font-bold cursor-not-allowed flex items-center justify-center transition-all">
                            <i class="fas fa-lock mr-2 text-amber-500"></i> Reservado Administrador
                        </button>
                    `;
                }
            }
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runUpdate);
    } else {
        runUpdate();
    }
}

async function protegerRuta() {
    if (window.location.pathname.includes("admin.html")) return;

    const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession();
    const pathActual = window.location.pathname;

    // A) Si no hay sesión, ir a login
    if (!session) {
        if (!pathActual.includes("login.html")) {
            window.location.href = "login.html";
        }
        return;
    }

    const userEmail = (session.user.email || "").toLowerCase().trim();
    const esAdmin = ADMIN_EMAILS.some(e => e.toLowerCase().trim() === userEmail);

    // B) Si es Admin
    if (esAdmin) {
        if (pathActual.includes("login.html")) {
            window.location.href = "index.html";
            return;
        }
        actualizarVistaModulosIndex(true);
        return;
    }

    // C) Si es estudiante y la ruta actual es un módulo restringido (VII, VIII, X, XI, XII)
    if (esRutaRestringida(pathActual)) {
        alert("🔒 Acceso Restringido: Este módulo está deshabilitado para estudiantes y reservado exclusivamente para el Administrador.");
        window.location.href = "index.html?blocked=true";
        return;
    }

    // D) Estudiante regular
    const { data: profile, error } = await supabaseClient
        .from('profiles')
        .select('is_authorized, email, phone')
        .eq('id', session.user.id)
        .single();

    if (error || !profile) {
        if (!pathActual.includes("login.html")) {
            await supabaseClient.auth.signOut();
            window.location.href = "login.html?pending=true";
        }
        return;
    }

    if (!profile.is_authorized) {
        if (!pathActual.includes("login.html")) {
            window.location.href = "login.html?pending=true";
        } else {
            mostrarMensajeEspera(profile.email);
        }
    } else {
        if (pathActual.includes("login.html")) {
            window.location.href = "index.html";
            return;
        }
        
        actualizarVistaModulosIndex(false);

        // Si el usuario está autorizado y ya en una página protegida, verificamos el teléfono
        if (!profile.phone) {
            mostrarModalTelefono(session.user.id);
        }
    }
}

async function logout() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
        window.location.href = "login.html";
    }
}

function mostrarMensajeEspera(email) {
    const container = document.getElementById("auth-container");
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <div style="font-size: 4rem; color: #f59e0b; margin-bottom: 20px;">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.8rem; color: #0f172a; margin-bottom: 15px;">
                    Acceso en Revisión
                </h2>
                <p style="color: #64748b; font-size: 1.05rem; line-height: 1.6; margin-bottom: 30px; max-width: 400px; margin-left: auto; margin-right: auto;">
                    Hola, <strong>${email}</strong>. Tu cuenta ha sido creada exitosamente, pero requiere la autorización manual del <strong>Prof. Frank Clemente</strong> para poder ingresar.
                </p>
                <div style="background: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 15px; font-size: 0.9rem; color: #b45309; margin-bottom: 30px; max-width: 400px; margin-left: auto; margin-right: auto; text-align: left;">
                    <i class="fa-solid fa-circle-info"></i> El facilitador revisará las solicitudes de registro y activará los accesos en el transcurso del día.
                </div>
                <button onclick="logout()" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 0.95rem; transition: all 0.2s;" onmouseover="this.style.background='#cbd5e1';" onmouseout="this.style.background='#e2e8f0';">
                    <i class="fa-solid fa-right-from-bracket"></i> Volver a Iniciar Sesión
                </button>
            </div>
        `;
    }
}

// ====================================================================
// MODAL PARA RECOPILAR NÚMERO DE TELÉFONO
// ====================================================================
function mostrarModalTelefono(userId) {
    // Evitar duplicados
    if (document.getElementById("modal-telefono")) return;

    const modal = document.createElement("div");
    modal.id = "modal-telefono";
    modal.className = "fixed inset-0 z-[10000] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm";
    
    // Solo mostramos un diseño minimalista si Tailwind no carga, pero usamos clases de Tailwind que ya existen en el proyecto
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-[90%] shadow-2xl relative animate-fadeIn" style="border-top: 4px solid #10b981;">
            <div class="text-center mb-6">
                <i class="fa-solid fa-mobile-screen-button text-4xl text-emerald-500 mb-3"></i>
                <h2 class="text-2xl font-bold text-slate-800" style="font-family: 'Outfit', sans-serif;">Actualiza tus datos</h2>
                <p class="text-sm text-slate-500 mt-2">Para continuar accediendo al contenido del diplomado, necesitamos un número telefónico de contacto.</p>
            </div>
            
            <div class="mb-4">
                <label class="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">Número de WhatsApp / Teléfono</label>
                <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <i class="fa-solid fa-phone"></i>
                    </span>
                    <input type="tel" id="input-telefono" class="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-slate-700" placeholder="+58 414 1234567" required>
                </div>
                <p id="error-telefono" class="text-red-500 text-xs mt-2 hidden">Por favor, ingresa un número válido.</p>
            </div>
            
            <button onclick="guardarTelefono('${userId}')" id="btn-guardar-telefono" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg transition-all flex justify-center items-center gap-2">
                <i class="fa-solid fa-floppy-disk"></i> Guardar y Continuar
            </button>
        </div>
    `;

    document.body.appendChild(modal);
}

async function guardarTelefono(userId) {
    const input = document.getElementById("input-telefono");
    const errorMsg = document.getElementById("error-telefono");
    const btn = document.getElementById("btn-guardar-telefono");
    const phone = input.value.trim();

    if (phone.length < 10) {
        errorMsg.classList.remove("hidden");
        return;
    }
    errorMsg.classList.add("hidden");

    // UX: Estado de carga
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Guardando...';
    btn.disabled = true;
    btn.classList.add("opacity-70");

    try {
        const { error } = await supabaseClient
            .from('profiles')
            .update({ phone: phone })
            .eq('id', userId);

        if (error) throw error;

        // Éxito: Cerrar modal y continuar
        const modal = document.getElementById("modal-telefono");
        if (modal) modal.remove();
        
    } catch (err) {
        console.error("Error al guardar teléfono:", err);
        errorMsg.innerText = "Error al guardar. Inténtelo de nuevo.";
        errorMsg.classList.remove("hidden");
        
        btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Guardar y Continuar';
        btn.disabled = false;
        btn.classList.remove("opacity-70");
    }
}

// Iniciar el proceso
initSupabaseAuth();

// ====================================================================
// BOTÓN GLOBAL DE CERRAR SESIÓN (Flotante para páginas secundarias)
// ====================================================================
function inyectarBotonCerrarSesion() {
    const pathActual = window.location.pathname;
    
    // No inyectar en login, admin, ni en el index (ya tiene su propio botón en el navbar)
    if (pathActual.includes("login.html") || pathActual.includes("admin.html") || pathActual.includes("index.html") || pathActual.endsWith("/")) {
        return;
    }
    
    // Crear el botón flotante
    const btn = document.createElement("button");
    btn.onclick = logout;
    btn.title = "Cerrar Sesión";
    // Clases de Tailwind CSS para un diseño hermoso, responsivo y fijo en la esquina inferior derecha
    btn.className = "fixed bottom-6 right-6 z-[9999] text-sm font-semibold bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 px-4 py-3 rounded-full transition-all flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer";
    btn.innerHTML = '<i class="fas fa-sign-out-alt sm:mr-2"></i> <span class="hidden sm:inline">Cerrar Sesión</span>';
    
    // Insertar en el body
    document.body.appendChild(btn);
}

// Ejecutar inyección al cargar el DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inyectarBotonCerrarSesion);
} else {
    inyectarBotonCerrarSesion();
}

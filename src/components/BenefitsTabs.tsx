import { useId, useRef, useState, type KeyboardEvent } from 'react';
import {
  Check,
  Headset,
  MapPinned,
  MousePointerClick,
  ReceiptText,
  Route,
  ShieldCheck,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react';

type Benefit = { icon: LucideIcon; title: string; text: string };
type Tab = { id: 'comercios' | 'repartidores'; label: string; title: string; benefits: Benefit[] };

const TABS: Tab[] = [
  {
    id: 'comercios',
    label: 'Para comercios',
    title: 'Despachá sin armar tu propia flota',
    benefits: [
      { icon: MousePointerClick, title: 'Pedidos en 2 clics', text: 'Cargás la dirección, confirmás y listo. Sin llamadas ni grupos de WhatsApp.' },
      { icon: ShieldCheck, title: 'Flota verificada', text: 'Repartidores con identidad, vehículo y documentación revisados antes de su primera entrega.' },
      { icon: ReceiptText, title: 'Costos transparentes por kilómetro', text: 'Ves el precio antes de confirmar. Sin comisiones sobre el valor de tu venta.' },
      { icon: MapPinned, title: 'Panel de seguimiento', text: 'Sabés en qué parada está cada pedido y te queda la prueba de entrega.' },
    ],
  },
  {
    id: 'repartidores',
    label: 'Para repartidores (repa PRO)',
    title: 'Tu día ordenado en una sola app',
    benefits: [
      { icon: Route, title: 'Hojas de ruta optimizadas', text: 'Las paradas del día en orden, con distancia y hora estimada de cada una.' },
      { icon: Wallet, title: 'Ganancias claras al instante', text: 'Cada entrega suma en el momento. Historial por día y por semana.' },
      { icon: Zap, title: 'Pagos rápidos', text: 'Tus ganancias se acreditan [FRECUENCIA DE PAGO], sin trámites ni planillas.' },
      { icon: Headset, title: 'Soporte directo en ruta', text: 'Si algo sale mal en una entrega, lo reportás desde la app y te respondemos.' },
    ],
  },
];

/** Vista previa del mismo pedido (#10236) desde cada lado. Datos de ejemplo. */
function Preview({ tab }: { tab: Tab['id'] }) {
  if (tab === 'comercios') {
    const steps = [
      { label: 'Retirado', time: '09:40', state: 'done' },
      { label: 'En camino', time: '09:48', state: 'live' },
      { label: 'Entregado', time: '—', state: 'todo' },
    ] as const;
    return (
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900">Pedido #10236</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
            <span className="size-1.5 rounded-full bg-brand-600" />
            En camino
          </span>
        </div>
        <p className="mt-1 text-[0.8125rem] text-slate-500">Guido Spano 1966 · Familia López</p>
        <ol className="mt-5 grid grid-cols-3 gap-2">
          {steps.map((s, i) => (
            <li key={s.label} className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <span
                  className={
                    'flex size-6 shrink-0 items-center justify-center rounded-full ' +
                    (s.state === 'done'
                      ? 'bg-success text-white'
                      : s.state === 'live'
                        ? 'bg-brand-600 ring-4 ring-brand-100'
                        : 'border-[1.5px] border-slate-300')
                  }
                >
                  {s.state === 'done' && <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />}
                </span>
                {i < steps.length - 1 && (
                  <span className={'h-0.5 flex-1 rounded-full ' + (s.state === 'done' ? 'bg-success' : 'bg-slate-200')} />
                )}
              </span>
              <span className="text-xs font-semibold text-slate-900">{s.label}</span>
              <span className="-mt-1.5 text-xs text-slate-500 tabular-nums">{s.time}</span>
            </li>
          ))}
        </ol>
        <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-3 text-sm">
          <span className="text-slate-500">Costo del envío</span>
          <span className="font-bold tracking-tight text-slate-900 tabular-nums">2,1 km · [PRECIO]</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-white shadow-card">
      <p className="text-xs font-medium text-slate-300">Girá a la derecha en Av. Libertad</p>
      <p className="mt-1 text-4xl font-bold tracking-[-0.04em] tabular-nums">0,4 km</p>
      <div className="mt-3 flex gap-[3px]" aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => (
          <span key={i} className={'h-2.5 flex-1 rounded-[1px] ' + (i < 17 ? 'bg-brand-600' : 'bg-slate-700')} />
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-slate-800 p-3.5">
        <p className="text-[0.6875rem] font-semibold tracking-wide text-slate-300">PARADA 2 DE 3</p>
        <p className="mt-0.5 text-base font-bold">Guido Spano 1966</p>
        <p className="text-xs text-slate-300">Timbre 2B · Frágil</p>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-slate-300">Ganancias de hoy</span>
        <span className="font-bold tracking-tight tabular-nums">ARS $2.650</span>
      </div>
    </div>
  );
}

export default function BenefitsTabs() {
  const [active, setActive] = useState<Tab['id']>('comercios');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();

  // Patrón WAI-ARIA de pestañas: flechas, Inicio y Fin mueven el foco y activan.
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = TABS.length - 1;
    const next =
      e.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : e.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(TABS[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Elegí para quién son los beneficios"
        className="inline-flex max-w-full gap-1 rounded-full border border-slate-200/80 bg-slate-100/80 p-1"
      >
        {TABS.map((tab, i) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              aria-label={`Ver beneficios ${tab.label.charAt(0).toLowerCase()}${tab.label.slice(1)}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={
                'min-h-11 rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-[background-color,color,box-shadow] duration-200 sm:px-5 ' +
                (selected ? 'bg-white text-slate-900 shadow-card' : 'text-slate-600 hover:text-slate-900')
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {TABS.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== active}
          tabIndex={0}
          className="panel-in mt-10 grid gap-10 rounded-3xl focus-visible:outline-offset-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16"
        >
          <div>
            <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-900 sm:text-3xl">{tab.title}</h3>
            <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {tab.benefits.map(({ icon: Icon, title, text }) => (
                <li key={title} className="group flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-slate-500">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <figure className="self-center">
            <Preview tab={tab.id} />
            <figcaption className="mt-3 text-xs text-slate-500">
              {tab.id === 'comercios'
                ? 'El pedido #10236 visto desde el panel del comercio. Datos de ejemplo.'
                : 'El mismo pedido visto desde la app repa PRO. Datos de ejemplo.'}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

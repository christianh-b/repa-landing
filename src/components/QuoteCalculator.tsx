import { useId, useState } from 'react';
import { Clock, Info } from 'lucide-react';
import { pricing, site } from '../data/site';

type Size = keyof typeof pricing.sizeFactor;

const SIZES: { id: Size; label: string; hint: string }[] = [
  { id: 'chico', label: 'Chico', hint: 'Sobre o bolsa' },
  { id: 'mediano', label: 'Mediano', hint: 'Caja de pizza' },
  { id: 'grande', label: 'Grande', hint: 'Bultos o cajones' },
];

const ars = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
const kmFmt = new Intl.NumberFormat('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function estimate(km: number, size: Size) {
  const price = (pricing.baseFare + pricing.perKm * km) * pricing.sizeFactor[size];
  // Redondeo a $50 para que el número se lea como una tarifa, no como un cálculo.
  return {
    price: Math.round(price / 50) * 50,
    minutes: Math.round(pricing.minutesBase + pricing.minutesPerKm * km),
  };
}

export default function QuoteCalculator() {
  const [km, setKm] = useState(3);
  const [size, setSize] = useState<Size>('mediano');
  const id = useId();
  const { price, minutes } = estimate(km, size);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:gap-8">
      <form className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-8" onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor={`${id}-km`} className="font-semibold text-slate-900">
              Distancia del envío
            </label>
            <output htmlFor={`${id}-km`} className="text-lg font-bold tracking-tight text-slate-900 tabular-nums">
              {kmFmt.format(km)} km
            </output>
          </div>
          <input
            id={`${id}-km`}
            type="range"
            min={0.5}
            max={15}
            step={0.5}
            value={km}
            onChange={(e) => setKm(Number(e.target.value))}
            aria-label="Distancia del envío en kilómetros"
            aria-valuetext={`${kmFmt.format(km)} kilómetros`}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600"
            style={{
              background: `linear-gradient(to right, var(--color-brand-600) ${((km - 0.5) / 14.5) * 100}%, var(--color-slate-200) 0)`,
            }}
          />
          <div className="mt-2 flex justify-between text-xs text-slate-500 tabular-nums" aria-hidden="true">
            <span>0,5 km</span>
            <span>15 km</span>
          </div>
        </div>

        <fieldset className="mt-8">
          <legend className="font-semibold text-slate-900">Tamaño del paquete</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {SIZES.map((s) => (
              <label
                key={s.id}
                className="flex cursor-pointer flex-col rounded-xl border border-slate-200 px-3 py-3 transition-colors has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-600 hover:border-slate-300"
              >
                <input
                  type="radio"
                  name={`${id}-size`}
                  value={s.id}
                  checked={size === s.id}
                  onChange={() => setSize(s.id)}
                  aria-label={`Paquete ${s.label.toLowerCase()}: ${s.hint.toLowerCase()}`}
                  className="sr-only"
                />
                <span className="text-sm font-semibold text-slate-900">{s.label}</span>
                <span className="text-xs text-slate-600">{s.hint}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <div className="flex flex-col justify-between rounded-2xl bg-slate-900 p-6 text-white sm:p-8" aria-live="polite">
        <div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-300">Precio estimado</p>
            {pricing.isExample && (
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-slate-200">Valores de ejemplo</span>
            )}
          </div>
          <p className="mt-2 text-5xl font-bold tracking-[-0.04em] tabular-nums">{ars.format(price)}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">
            <Clock className="size-4" aria-hidden="true" />
            Entrega en unos <span className="font-semibold text-white tabular-nums">{minutes} min</span>
          </p>
        </div>

        <div className="mt-8">
          {pricing.isExample && (
            <p className="mb-5 flex gap-2 text-xs leading-relaxed text-slate-300">
              <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              Todavía no son tarifas reales. El precio final se calcula con [TARIFA MÍNIMA] más [PRECIO POR KM].
            </p>
          )}
          <a
            href={site.links.merchantSignup}
            aria-label="Sumar mi comercio a repa"
            className="flex h-12 items-center justify-center rounded-full bg-brand-600 font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Sumar mi comercio
          </a>
        </div>
      </div>
    </div>
  );
}

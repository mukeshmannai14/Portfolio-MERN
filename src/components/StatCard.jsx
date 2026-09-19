function StatCard({ value, label }) {
  return (
    <div className="group rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-blue-500/50">
      <p className="text-2xl font-black text-blue-600 dark:text-blue-400">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

export default StatCard;
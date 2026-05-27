import TimelineItem from "./TimelineItem";

// ─── Subcomponente: columna de timeline ───────────────────────────────────────
export default function TimelineColumn({ title, items }) {
    return (
        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-6">
            <p className="font-mono text-[15px] text-[#B14EFF]/70 mb-6">{title}</p>
            <div className="flex flex-col">
                {items.map((item, i) => (
                    <TimelineItem
                        key={item.title}
                        item={item}
                        index={i}
                        isLast={i === items.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}

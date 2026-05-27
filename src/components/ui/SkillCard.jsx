import { skills } from "../../data/portfolioData"
import LevelHeader from "./LevelHeader"
import SkillRow from "./SkillRow"

// ─── Subcomponente: card de categoría ────────────────────────────────────────
export default function SkillCard({ category }) {
    const categorySkills = skills.filter((s) => s.category === category.key)
    return (
        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-5">
            <p className="font-mono text-[15px] text-[#B14EFF]/70 mb-4">{category.label}</p>
            <LevelHeader />
                {categorySkills.map((skill, i) => (
                    <SkillRow
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={i}
                    />
                ))}
        </div>
    )
}

import reactImage from '../assets/about/react.png'
import nodeImage from '../assets/about/node.png'
import mongoImage from '../assets/about/mongodb.png'

const skillsData = [
  { name: 'React', img: reactImage, level: 'Advanced', years: '4+', category: 'Frontend' },
  { name: 'Node.js', img: nodeImage, level: 'Advanced', years: '4+', category: 'Backend' },
  { name: 'MongoDB', img: mongoImage, level: 'Intermediate', years: '3+', category: 'Database' },
  { name: 'Tailwind CSS', level: 'Advanced', years: '3+', category: 'Frontend' },
  { name: 'JavaScript', level: 'Advanced', years: '5+', category: 'Language' },
  { name: 'TypeScript', level: 'Intermediate', years: '2+', category: 'Language' },
  { name: 'Express.js', level: 'Advanced', years: '4+', category: 'Backend' },
  { name: 'Git', level: 'Intermediate', years: '3+', category: 'Tools' },
  { name: 'PostgreSQL', level: 'Intermediate', years: '2+', category: 'Database' },
  { name: 'Docker', level: 'Intermediate', years: '2+', category: 'DevOps' },
  { name: 'Next.js', level: 'Intermediate', years: '2+', category: 'Frontend' },
  { name: 'Figma', level: 'Intermediate', years: '2+', category: 'Design' },
]

const categories = [...new Set(skillsData.map((s) => s.category))]

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <span className="text-[#ff2a2a] font-bold text-sm tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4">Skills & Technologies</h2>
          <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
            Technologies I work with daily to build modern, scalable web applications. 
            Constantly learning and expanding my toolkit.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-gray-400 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, i) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:border-[#ff2a2a]/50 transition-all duration-300 group"
            >
              {skill.img ? (
                <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <div className="w-14 h-14 rounded-xl bg-[#ff2a2a]/20 flex items-center justify-center text-xl font-bold text-[#ff2a2a] group-hover:bg-[#ff2a2a]/30 transition-colors">
                  {skill.name[0]}
                </div>
              )}
              <h3 className="text-white font-bold text-base">{skill.name}</h3>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-[#ff2a2a] font-semibold">{skill.level}</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-500">{skill.years}</span>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-20 bg-gradient-to-r from-[#ff2a2a]/10 to-transparent border border-[#ff2a2a]/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '30+', label: 'Projects Completed' },
              { number: '15+', label: 'Happy Clients' },
              { number: '10+', label: 'Technologies' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-white">{stat.number}</div>
                <div className="text-gray-500 text-sm mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

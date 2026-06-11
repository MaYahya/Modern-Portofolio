import reactImage from '../assets/about/react.png'
import nodeImage from '../assets/about/node.png'
import mongoImage from '../assets/about/mongodb.png'

const SkillIcon = ({ name }) => {
  const icons = {
    'Tailwind CSS': (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-10 h-10">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
    'JavaScript': (
      <svg viewBox="0 0 24 24" fill="#F7DF1E" className="w-10 h-10">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
        <path d="M15.5 18.5c.5.8 1.1 1.4 2.2 1.4.9 0 1.5-.5 1.5-1.1 0-.8-.6-1.1-1.6-1.5l-.6-.3c-1.6-.7-2.7-1.5-2.7-3.3 0-1.6 1.3-2.9 3.2-2.9 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.7-.8-1-1.4-1-.7 0-1.1.5-1.1 1 0 .7.4 1 1.4 1.4l.6.3c1.8.8 2.8 1.6 2.8 3.4 0 2-1.5 3.1-3.6 3.1-2 0-3.3-.9-4-2.2l1.8-1.1zM8.7 18.9c.4.7.7 1.3 1.5 1.3.8 0 1.3-.3 1.3-1.5v-5.8h2.5v5.8c0 2.5-1.5 3.6-3.7 3.6-2 0-3.1-.9-3.7-2.2l1.9-1.2z" fill="#000"/>
      </svg>
    ),
    'Git': (
      <svg viewBox="0 0 24 24" fill="#F05032" className="w-10 h-10">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.32 8.412v5.48c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.409c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.165.452 10.349c-.603.604-.603 1.582 0 2.186l10.481 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.598-.603.598-1.582-.003-2.184z"/>
      </svg>
    ),
    'PostgreSQL': (
      <svg viewBox="0 0 24 24" fill="#4169E1" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z"/>
        <path d="M11.5 5.5C11.5 5.5 15 7 15 10C15 13 11 14 11 16H13C13 14 17 13 17 10C17 7 12.5 5 11.5 5.5ZM11.5 5.5C11.5 5.5 9 5 8 7C7 8.5 7.5 10 9 11C10 11.5 10.5 12 10.5 12.5" stroke="#4169E1" strokeWidth="0.5" fill="none"/>
      </svg>
    ),
    'Docker': (
      <svg viewBox="0 0 24 24" fill="#2496ED" className="w-10 h-10">
        <path d="M13.983 11.078h-2.25v-2.1h2.25v2.1zm0-3.225h-2.25v-2.1h2.25v2.1zm3.075 3.225h-2.25v-2.1h2.25v2.1zm0-3.225h-2.25v-2.1h2.25v2.1zm-6.15 0h-2.25v-2.1h2.25v2.1zm-3.075 0H5.583v-2.1h2.25v2.1zm0 3.225H5.583v-2.1h2.25v2.1zM4.3 13.7c.55 2.675 2.4 4.5 5.7 4.5 4.5 0 6.975-3.675 8.025-6.225.975.6 2.175.75 3.225.375.3-1.125-.075-2.325-.9-3s-2.475-.75-3.6-.3c-.375-.675-.9-1.275-1.5-1.65l-.525-.3-.3.525c-.45.825-.6 1.8-.45 2.775.075.525.225 1.05.525 1.5-.525.3-1.125.525-1.8.675l-.025.003c.03-.229.047-.461.047-.699C13.033 6.982 10.048 4 6.333 4c.05 1.275.525 2.475 1.35 3.45-.3.15-.675.225-1.125.225H4.296v3.45c0 .825.075 1.65.225 2.475l-.221.1z"/>
      </svg>
    ),
    'Next.js': (
      <svg viewBox="0 0 24 24" fill="#fff" className="w-10 h-10">
        <rect width="24" height="24" rx="4" fill="#000"/>
        <path d="M13.2 7.5h1.6v6.5l-1.6-2V7.5zm-3.6 2.5h1.6v4L8 18.5h-1.6l2.8-3.5-.8-1v-3.5zm4.2 7.5L18 10.5v4.5h-1.2v-3L13 17.5h.8zm-1.2-10h1.6L12 13V7.5h.8z" fill="#fff"/>
      </svg>
    ),
    'Figma': (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M8.5 2a3.5 3.5 0 0 0 0 7h3V2h-3zM12 9V2h3.5a3.5 3.5 0 0 1 0 7H12z" fill="#F24E1E"/>
        <path d="M8.5 9a3.5 3.5 0 1 0 0 7h3V9h-3z" fill="#FF7262"/>
        <path d="M8.5 16a3.5 3.5 0 1 0 3.5 3.5V16h-3.5z" fill="#0ACF83"/>
        <path d="M12 9h3.5a3.5 3.5 0 0 1 0 7H12V9z" fill="#A259FF"/>
        <path d="M15.5 16a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" fill="#F24E1E"/>
      </svg>
    ),
    'Laravel': (
      <svg viewBox="0 0 24 24" fill="#FF2D20" className="w-10 h-10">
        <path d="M5.5 3.5L12 0l6.5 3.5v4l-2.5 1.5V7L12 5 8 7v2L5.5 7.5v-4zm6.5 5l6.5-3.5v4L12 12.5 5.5 9v-4L12 8.5zm0 4l6.5-3.5v4L12 16.5l-6.5-3.5v-4L12 12.5zm0 4l6.5-3.5v4L12 20.5l-6.5-3.5v-4L12 16.5z"/>
      </svg>
    ),
    'Stripe': (
      <svg viewBox="0 0 24 24" fill="#635BFF" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5c-2.5 0-3.5-1.5-3.5-3.5h2c0 1 .5 2 1.5 2 1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5H9v-2h1.5c.5 0 1-.5 1-1s-.5-1-1-1c-1 0-1.5.5-1.5 1H7c0-1.5 1-3 3.5-3s3.5 1.5 3.5 3c0 1.5-1 2.5-2 3 1 .5 2 1.5 2 3 0 2-1.5 3.5-3.5 3.5z"/>
        <path d="M15.5 9.5c-2 0-2.5 1-2.5 2h2c0-.5.5-1 1.5-1s1.5.5 1.5 1-.5 1-1.5 1H15v2h1.5c2 0 2.5 1 2.5 2s-.5 2-2.5 2-2.5-1-2.5-2h-2c0 2.5 1.5 4 4.5 4s4.5-1.5 4.5-4c0-2.5-1.5-4-4.5-4z" fill="#fff"/>
      </svg>
    ),
    'PayPal': (
      <svg viewBox="0 0 24 24" fill="#003087" className="w-10 h-10">
        <rect width="24" height="24" rx="4" fill="#003087"/>
        <path d="M9.5 6.5h4c1.5 0 2.5.5 3 1.5s.5 2 0 3c-.5 1.5-1.5 2.5-3.5 2.5h-1l-.5 3H9l.5-10z" fill="#fff"/>
        <path d="M10 9.5h2.5c.5 0 1 .5 1 1s-.5 1-1 1H10.5l.5-2z" fill="#003087"/>
        <path d="M16.5 8c.5 1.5.5 3 0 4.5s-2 2.5-3.5 2.5H12l-.5 3h-2l1.5-9h3c1 0 2 .5 2.5 1z" fill="#009CDE"/>
      </svg>
    ),
  }

  return icons[name] || (
    <div className="w-14 h-14 rounded-xl bg-[#ff2a2a]/20 flex items-center justify-center text-xl font-bold text-[#ff2a2a]">
      {name[0]}
    </div>
  )
}

const skillsData = [
  { name: 'React', img: reactImage, level: 'Advanced', years: '4+', category: 'Frontend' },
  { name: 'Node.js', img: nodeImage, level: 'Advanced', years: '4+', category: 'Backend' },
  { name: 'Laravel', level: 'Advanced', years: '3+', category: 'Backend' },
  { name: 'MongoDB', img: mongoImage, level: 'Intermediate', years: '3+', category: 'Database' },
  { name: 'PostgreSQL', level: 'Intermediate', years: '2+', category: 'Database' },
  { name: 'JavaScript', level: 'Advanced', years: '5+', category: 'Language' },
  { name: 'Tailwind CSS', level: 'Advanced', years: '3+', category: 'Frontend' },
  { name: 'Next.js', level: 'Intermediate', years: '2+', category: 'Frontend' },
  { name: 'Stripe', level: 'Intermediate', years: '2+', category: 'Payments' },
  { name: 'Docker', level: 'Intermediate', years: '2+', category: 'DevOps' },
  { name: 'Git', level: 'Intermediate', years: '3+', category: 'Tools' },
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
                <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SkillIcon name={skill.name} />
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

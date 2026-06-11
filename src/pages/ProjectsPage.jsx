import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment gateway integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, user management, and automated reporting.',
    tech: ['React', 'TypeScript', 'D3.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative project management tool with kanban boards, real-time updates, and team chat.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    color: 'from-green-500 to-teal-600',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'AI-powered platform that generates marketing copy, blog posts, and social media content using GPT models.',
    tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracker with workout plans, progress charts, and social challenges.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 6,
    title: 'Real Estate Portal',
    description: 'Property listing platform with virtual tours, mortgage calculator, and AI-powered recommendations.',
    tech: ['React', 'Next.js', 'Prisma', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    color: 'from-rose-500 to-red-600',
  },
]

const ProjectsPage = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <span className="text-[#ff2a2a] font-bold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4">Featured Projects</h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            A selection of projects I've built — from e-commerce platforms to AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff2a2a]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,42,42,0.15)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#ff2a2a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 text-xs font-bold bg-[#ff2a2a] text-white rounded-full">
                  Live
                </span>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300"
          >
            Have a project in mind? Let's talk
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage

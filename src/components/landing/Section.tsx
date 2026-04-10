import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface SectionProps {
  id: string
  title: string
  custom?: string
  isActive: boolean
}

const glassStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  boxShadow: '0 8px 32px 0 rgba(10, 25, 47, 0.37)',
}

function HeroSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <motion.div
        style={glassStyle}
        className="rounded-2xl p-10 md:p-14 max-w-md w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}
        >
          <span className="text-3xl font-bold text-white">СО</span>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2"
          style={{ fontFamily: 'Inter, SF Pro Display, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Сухроб Орзуев
        </motion.h1>
        <motion.p
          className="text-base font-medium tracking-widest uppercase mb-2"
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.18em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          CEO / Руководитель
        </motion.p>
        <motion.div
          className="my-6 h-px w-16 mx-auto"
          style={{ background: 'rgba(255,255,255,0.25)' }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.p
          className="text-sm"
          style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Здравоохранение · Цифровые технологии · Разработка ПО
        </motion.p>
      </motion.div>
    </div>
  )
}

const companies = [
  {
    icon: 'Stethoscope',
    name: 'ЦСМР',
    desc: 'Аккредитация медицинских и фармацевтических сотрудников',
    color: 'rgba(100, 200, 255, 0.15)',
  },
  {
    icon: 'Settings',
    name: '7ДЖИ',
    desc: 'Услуги ЕГИСЗ, реестры ФМРО/ФРМР',
    color: 'rgba(100, 255, 180, 0.1)',
  },
  {
    icon: 'Code2',
    name: 'АФИОР',
    desc: 'Разработка ПО, ГИС МТ, МДЛП',
    color: 'rgba(180, 100, 255, 0.1)',
  },
]

function CompaniesSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <div className="max-w-md w-full">
        <motion.h2
          className="text-center text-xl font-semibold text-white mb-8 tracking-wide"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Направления деятельности
        </motion.h2>
        <div className="space-y-4">
          {companies.map((c, i) => (
            <motion.div
              key={c.name}
              style={{ ...glassStyle, background: c.color }}
              className="rounded-xl px-6 py-5 flex items-center gap-5"
              initial={{ opacity: 0, x: -30 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
              >
                <Icon name={c.icon} size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base mb-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {c.name}
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {c.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContactsSection({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <motion.div
        style={glassStyle}
        className="rounded-2xl p-10 md:p-12 max-w-md w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-2xl font-bold text-white mb-2"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Связаться
        </motion.h2>
        <motion.p
          className="text-sm mb-8"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Открыт для партнёрства и новых проектов
        </motion.p>
        <div className="space-y-4">
          <motion.a
            href="tel:+79373222399"
            className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all hover:scale-[1.02]"
            style={{ ...glassStyle, textDecoration: 'none' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(100,200,255,0.15)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <Icon name="Phone" size={18} className="text-white" />
            </div>
            <span className="text-white font-medium text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              +7 937 322-23-99
            </span>
          </motion.a>
          <motion.a
            href="mailto:ash.side@yandex.ru"
            className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all hover:scale-[1.02]"
            style={{ ...glassStyle, textDecoration: 'none' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(180,100,255,0.15)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <Icon name="Mail" size={18} className="text-white" />
            </div>
            <span className="text-white font-medium text-base" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              ash.side@yandex.ru
            </span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default function Section({ id, custom, isActive }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start">
      {custom === 'hero' && <HeroSection isActive={isActive} />}
      {custom === 'companies' && <CompaniesSection isActive={isActive} />}
      {custom === 'contacts' && <ContactsSection isActive={isActive} />}
    </section>
  )
}

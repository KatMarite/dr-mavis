import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Scorecard Data ---
const QUESTIONS = [
  {
    id: 1,
    text: "I am able to disconnect from work and be fully present in my personal life without feeling guilty or anxious.",
  },
  {
    id: 2,
    text: "When faced with unexpected challenges or crises, I maintain my composure and guide my team with a calm authority.",
  },
  {
    id: 3,
    text: "I delegate tasks effectively and trust my team to deliver, rather than micromanaging or taking on the work myself.",
  },
  {
    id: 4,
    text: "I consistently allocate time for strategic thinking and long-term planning, rather than constantly fighting immediate fires.",
  },
  {
    id: 5,
    text: "I have clear boundaries and can say 'no' to requests that do not align with my core objectives or capacity.",
  },
  {
    id: 6,
    text: "I regularly engage in practices that renew my energy (e.g., exercise, hobbies, quiet time) and protect this time fiercely.",
  }
];

const OPTIONS = [
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often" },
  { value: 4, label: "Almost Always" }
];

export default function Scorecard() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'leadCapture' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handlers
  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [QUESTIONS[currentQuestionIndex].id]: value }));
    
    // Auto-advance
    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setStep('leadCapture');
      }
    }, 300);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to email marketing platform
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('results');
    }, 1500);
  };

  // Calculations
  const calculateScore = () => {
    const totalPoints = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    const maxPoints = QUESTIONS.length * 4;
    return Math.round((totalPoints / maxPoints) * 100);
  };

  const getResultArchetype = (score: number) => {
    if (score >= 80) return {
      title: "The Aligned Visionary",
      description: "You possess a strong foundation of sustainable leadership. You navigate complexity with grace, maintain clear boundaries, and empower your team effectively. Your focus should be on scaling your impact and mentoring others.",
      color: "text-sage"
    };
    if (score >= 60) return {
      title: "The Resilient Driver",
      description: "You are highly capable and driven, but your system may be fragile. You occasionally sacrifice your own wellbeing for operational demands. It's time to shift from managing the day-to-day to truly leading the system.",
      color: "text-terracotta"
    };
    return {
      title: "The Overextended Achiever",
      description: "Your success has come at a high personal cost. You are likely carrying too much operational weight and experiencing signs of burnout. Rebuilding your internal authority and leadership boundaries is critical for your sustainable success.",
      color: "text-red-500"
    };
  };

  const progressPercentage = ((currentQuestionIndex) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-alabaster flex flex-col items-center py-24 px-6 font-sans relative overflow-hidden">
      {/* Background Aesthetics */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none -mt-40 -mr-40 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[100px] pointer-events-none -mb-40 -ml-40 z-0"></div>

      <div className="w-full max-w-3xl relative z-10 pt-16">
        
        {/* Progress Bar (Show during quiz and lead capture) */}
        {(step === 'quiz' || step === 'leadCapture') && (
          <div className="mb-8">
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              <span>{step === 'quiz' ? `Question ${currentQuestionIndex + 1} of ${QUESTIONS.length}` : 'Final Step'}</span>
              <span>{step === 'quiz' ? Math.round(progressPercentage) : 100}% Completed</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-terracotta"
                initial={{ width: 0 }}
                animate={{ width: `${step === 'quiz' ? progressPercentage : 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: INTRO */}
          {step === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-10 md:p-14 rounded-3xl shadow-xl text-center border border-slate-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage/10 text-sage rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-navy mb-4">
                Sustainable Leadership & Resilience Scorecard
              </h1>
              <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
                Take this 2-minute assessment to discover your leadership archetype. Uncover hidden blind spots and learn how to shift from operational burnout to aligned, sustainable performance.
              </p>
              <button 
                onClick={handleStart}
                className="bg-navy text-white px-10 py-4 rounded font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start the Assessment
              </button>
              <p className="text-xs text-slate-400 mt-6 uppercase tracking-wider font-semibold">Takes less than 2 minutes • 6 Questions</p>
            </motion.div>
          )}

          {/* STEP 2: QUIZ */}
          {step === 'quiz' && (
            <motion.div 
              key={`question-${currentQuestionIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 min-h-[400px] flex flex-col justify-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-navy mb-8 text-center leading-relaxed">
                {QUESTIONS[currentQuestionIndex].text}
              </h2>
              
              <div className="flex flex-col gap-3">
                {OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all font-medium text-lg
                      ${answers[QUESTIONS[currentQuestionIndex].id] === option.value 
                        ? 'border-terracotta bg-terracotta/5 text-navy' 
                        : 'border-slate-200 text-slate-600 hover:border-terracotta/50 hover:bg-slate-50'
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4
                        ${answers[QUESTIONS[currentQuestionIndex].id] === option.value ? 'border-terracotta' : 'border-slate-300'}
                      `}>
                        {answers[QUESTIONS[currentQuestionIndex].id] === option.value && (
                          <div className="w-2.5 h-2.5 bg-terracotta rounded-full"></div>
                        )}
                      </div>
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: LEAD CAPTURE */}
          {step === 'leadCapture' && (
            <motion.div 
              key="leadCapture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-slate-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta/10 text-terracotta rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">Your results are ready!</h2>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Enter your details below to reveal your Leadership Archetype and receive a detailed breakdown of your performance score.
              </p>

              <form onSubmit={handleLeadSubmit} className="max-w-sm mx-auto space-y-4">
                <div>
                  <input 
                    type="text" 
                    required 
                    placeholder="First Name" 
                    value={leadData.name}
                    onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    required 
                    placeholder="Work Email Address" 
                    value={leadData.email}
                    onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-terracotta text-white font-bold py-4 rounded shadow-lg hover:bg-[#c96c51] transition-colors disabled:opacity-70 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Reveal My Score"}
                </button>
                <p className="text-xs text-slate-400 mt-4">By submitting, you agree to receive leadership insights from Dr. Mavis Mazhura. You can unsubscribe at any time.</p>
              </form>
            </motion.div>
          )}

          {/* STEP 4: RESULTS */}
          {step === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              <div className="bg-navy p-10 text-center text-white relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
                 <div className="relative z-10">
                    <p className="text-sage font-bold tracking-widest uppercase text-sm mb-2">Assessment Complete</p>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">{leadData.name ? `${leadData.name}'s` : 'Your'} Score</h2>
                    <div className="inline-block bg-white text-navy text-6xl font-serif font-bold py-6 px-10 rounded-2xl shadow-xl">
                      {calculateScore()}%
                    </div>
                 </div>
              </div>

              <div className="p-10 md:p-14 text-center">
                <h3 className={`text-3xl font-serif mb-4 ${getResultArchetype(calculateScore()).color}`}>
                  Archetype: {getResultArchetype(calculateScore()).title}
                </h3>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  {getResultArchetype(calculateScore()).description}
                </p>

                <div className="bg-alabaster p-8 rounded-2xl border border-slate-200 mb-10">
                  <h4 className="font-bold text-navy mb-2">Next Step: Sustainable Leadership Process</h4>
                  <p className="text-sm text-slate-500 mb-6">Discover how to transition into a state of high-performance without the burnout.</p>
                  <a href="mailto:mavism@tb2b.co.za" className="inline-block bg-navy text-white px-8 py-3 rounded font-bold hover:bg-slate-800 transition-colors">
                    Book a Discovery Call with Dr. Mavis
                  </a>
                </div>
                
                <button 
                  onClick={handleStart}
                  className="text-slate-400 text-sm font-semibold hover:text-terracotta transition-colors"
                >
                  Retake Assessment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

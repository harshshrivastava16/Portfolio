import { Download, Award, BookOpen, Briefcase } from 'lucide-react';

const Resume = () => {
  
 const achievements = [
  {
    icon: Award,
    title: 'AWS Certified Developer',
    description: 'Earned Amazon Web Services certification in cloud development',
    date: '2023',
  },
  {
    icon: Award,
    title: 'Hackathon Finalist',
    description: 'Secured a Top 10 position in a national-level hackathon',
    date: '2023',
  },
 
  {
    icon: Award,
    title: 'LeetCode 200 Days Streak Medal',
    description: 'Achieved 200+ days coding streak on LeetCode',
    date: '2025',
  },
];




  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'KIIT UNIVERSITY',
      period: '2022 - 2026', 
      description: 'Specialized in Software Engineering with focus on web technologies',
    },
  ];

  const experience = [
    {
      position: 'Frontend Developer',
      company: 'DevLogs Pvt Ltd',
      period: '2023 - 2024',
      description: 'Leading development of scalable web applications and mentoring junior developers',
    },
   {
  position: 'Tech Lead',
  company: 'ChillSip Pvt Ltd',
  period: '2025-present',
  description: 'Leading technology initiatives and overseeing digital solutions for a water-based company',
}
,
   {
  position: 'Developer',
  company: 'CPC KIIT',
  period: '2023 - present',
  description: 'Contributing to society projects and developing web solutions as part of the tech team',
}
,
  ];

  const handleDownload = () => {
    // Replace with actual file path in production
    alert('Resume download would be triggered here.');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-900 to-black text-gray-100 relative">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Resume & Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and notable accomplishments
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Download Resume */}
          <div className="lg:col-span-3 mb-12">
            <div className="text-center">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold 
                  bg-gradient-to-r from-purple-600 to-blue-600 text-white 
                  hover:from-purple-500 hover:to-blue-500 transition-all duration-300 
                  transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                <Download size={20} />
                Download Resume (PDF)
              </button>
            </div>
          </div>
          
          {/* Education */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-white">{edu.degree}</h4>
                <p className="text-purple-400 font-medium">{edu.school}</p>
                <p className="text-sm text-gray-400">{edu.period}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.description}</p>
              </div>
            ))}
          </div>
          
          {/* Experience */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-bold">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-white">{exp.position}</h4>
                <p className="text-blue-400 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <p className="text-sm text-gray-400 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
          
          {/* Achievements */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl font-bold">Achievements</h3>
            </div>
            {achievements.map((achievement, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start">
                  <achievement.icon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{achievement.title}</h4>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                    <p className="text-sm text-green-400 font-medium">{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

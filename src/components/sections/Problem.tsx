'use client';

import { useState } from 'react';

export function Problem() {
  const [activeTab, setActiveTab] = useState('visibility');

  const problems = [
    {
      id: 'visibility',
      title: 'Invisible to Customers',
      description: 'Your business exists, but customers can\'t find you online. No website means no digital footprint.',
      icon: '👀',
    },
    {
      id: 'conversion',
      title: 'No Lead Conversion',
      description: 'You get visitors, but they don\'t become leads. Your website isn\'t optimized for conversions.',
      icon: '🎯',
    },
    {
      id: 'automation',
      title: 'Manual Processes',
      description: 'Spending hours on repetitive tasks that could be automated. Time is money, and you\'re wasting both.',
      icon: '⚙️',
    },
    {
      id: 'retention',
      title: 'Client Retention',
      description: 'Getting clients is hard, keeping them is harder. No system to nurture relationships and encourage repeat business.',
      icon: '🤝',
    },
  ];

  const activeProblem = problems.find(p => p.id === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary-orange text-white text-sm font-semibold rounded-full mb-4">
            THE PROBLEM
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            The Hidden Costs of {' '}
            <span className="text-primary-orange">Not Having a System</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Problem Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setActiveTab(problem.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === problem.id
                    ? 'bg-primary-orange text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{problem.icon}</span>
                {problem.title}
              </button>
            ))}
          </div>

          {/* Active Problem Display */}
          {activeProblem && (
            <div className="bg-gradient-to-r from-primary-navy to-primary-orange p-1 rounded-2xl shadow-xl">
              <div className="bg-white p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{activeProblem.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {activeProblem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {activeProblem.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-primary-teal/10 text-primary-teal text-sm font-medium rounded-full">
                        AI Can Solve This
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              These problems compound over time, costing you {' '}
              <span className="font-bold text-primary-navy">thousands in lost revenue</span>. 
              The solution? A system that works for you 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

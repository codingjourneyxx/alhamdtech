import React from 'react';

const businessHours = [
  { day: "Monday", hours: "8 am–10 pm" },
  { day: "Tuesday", hours: "8 am–10 pm" },
  { day: "Wednesday", hours: "8 am–10 pm" },
  { day: "Thursday", hours: "8 am–10 pm" },
  { day: "Friday", hours: "8 am–10 pm" },
  { day: "Saturday", hours: "8 am–10 pm" },
  { day: "Sunday", hours: "8 am–10 pm" },
];

export default function BusinessHours() {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 p-5 rounded-xl shadow-lg border border-slate-100 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-3">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-slate-600 rounded-lg shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 ml-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-800">Business Hours</h3>
      </div>
      
      <div className="space-y-2">
        {businessHours.map((schedule, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center py-1.5 px-2 rounded-lg transition-all duration-200 hover:bg-slate-100/50 text-sm"
          >
            <span className="font-medium text-gray-700">{schedule.day}</span>
            <span className="text-slate-700 bg-slate-100 px-3 py-1 rounded-full font-medium">{schedule.hours}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-100">
        <p className="text-center text-xs text-slate-600 font-medium">We're available to serve you every day!</p>
      </div>
    </div>
  );
} 
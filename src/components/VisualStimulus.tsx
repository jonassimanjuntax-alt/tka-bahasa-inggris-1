import React from 'react';
import { VisualStimulusData } from '../types';
import { 
  FileText, 
  BarChart3, 
  AlertTriangle, 
  Compass, 
  Clock, 
  Calendar, 
  Info, 
  CheckCircle2, 
  ShieldCheck, 
  Activity,
  Layers
} from 'lucide-react';

interface VisualStimulusProps {
  data: VisualStimulusData;
}

export const VisualStimulus: React.FC<VisualStimulusProps> = ({ data }) => {
  const getThemeColors = () => {
    switch (data.visualTheme) {
      case 'crimson':
        return {
          bg: 'bg-red-50/60',
          border: 'border-red-200',
          accent: 'text-red-700',
          badgeBg: 'bg-red-700 text-white',
          headerBg: 'bg-red-900 text-white',
          cardBg: 'bg-white border-red-100',
          tagBg: 'bg-red-100 text-red-800'
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50/60',
          border: 'border-emerald-200',
          accent: 'text-emerald-700',
          badgeBg: 'bg-emerald-700 text-white',
          headerBg: 'bg-emerald-900 text-white',
          cardBg: 'bg-white border-emerald-100',
          tagBg: 'bg-emerald-100 text-emerald-800'
        };
      case 'amber':
        return {
          bg: 'bg-amber-50/60',
          border: 'border-amber-200',
          accent: 'text-amber-800',
          badgeBg: 'bg-amber-700 text-white',
          headerBg: 'bg-amber-900 text-white',
          cardBg: 'bg-white border-amber-100',
          tagBg: 'bg-amber-100 text-amber-900'
        };
      case 'slate':
        return {
          bg: 'bg-slate-50',
          border: 'border-slate-300',
          accent: 'text-slate-800',
          badgeBg: 'bg-slate-700 text-white',
          headerBg: 'bg-slate-900 text-white',
          cardBg: 'bg-white border-slate-200',
          tagBg: 'bg-slate-200 text-slate-800'
        };
      case 'navy':
      default:
        return {
          bg: 'bg-blue-50/60',
          border: 'border-blue-200',
          accent: 'text-blue-900',
          badgeBg: 'bg-blue-900 text-white',
          headerBg: 'bg-slate-900 text-white',
          cardBg: 'bg-white border-blue-100',
          tagBg: 'bg-blue-100 text-blue-900'
        };
    }
  };

  const theme = getThemeColors();

  const getIcon = () => {
    switch (data.type) {
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'notice':
        return <AlertTriangle className="w-5 h-5 text-amber-300" />;
      case 'schedule':
        return <Clock className="w-5 h-5 text-sky-300" />;
      case 'brochure':
        return <Layers className="w-5 h-5 text-indigo-300" />;
      case 'log':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'diagram':
        return <Compass className="w-5 h-5 text-sky-400" />;
      case 'report_card':
      default:
        return <FileText className="w-5 h-5 text-blue-300" />;
    }
  };

  return (
    <div className={`rounded-xl border ${theme.border} overflow-hidden shadow-sm my-4`}>
      {/* Visual Header */}
      <div className={`${theme.headerBg} p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-2 border-b`}>
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-xs">
            {getIcon()}
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-200 block">
              Visual Stimulus Context • {data.type.replace('_', ' ').toUpperCase()}
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {data.title}
            </h4>
          </div>
        </div>
        {data.badge && (
          <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-white/20 text-white border border-white/25">
            {data.badge}
          </span>
        )}
      </div>

      {/* Main Body */}
      <div className={`${theme.bg} p-4 sm:p-5 space-y-4`}>
        {/* Meta Info Pill Row */}
        {data.metaInfo && data.metaInfo.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {data.metaInfo.map((meta, idx) => (
              <div 
                key={idx} 
                className="bg-white/90 backdrop-blur-xs rounded-lg px-3 py-2 border border-slate-200/80 shadow-2xs flex flex-col justify-center"
              >
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  {meta.label}
                </span>
                <span className="text-[13px] sm:text-sm font-bold text-slate-900 truncate">
                  {meta.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Data Cards / Observations */}
        {data.dataPoints && data.dataPoints.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {data.dataPoints.map((item, idx) => (
              <div 
                key={idx} 
                className={`rounded-lg p-3.5 ${theme.cardBg} border shadow-2xs transition-all hover:shadow-xs`}
              >
                <div className="flex items-center space-x-1.5 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-xs font-semibold text-slate-700">
                    {item.label}
                  </span>
                </div>
                <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  {item.value}
                </div>
                {item.detail && (
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                    {item.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Table Data if available */}
        {data.tableData && (
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  {data.tableData.headers.map((h, i) => (
                    <th key={i} className="px-3.5 py-2.5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {data.tableData.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-3.5 py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Informative Footer Note */}
        {data.footerNote && (
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200/60">
            <span className="flex items-center space-x-1 font-medium">
              <Info className="w-3.5 h-3.5 text-slate-400 mr-1" />
              {data.footerNote}
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Authenticated Document
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

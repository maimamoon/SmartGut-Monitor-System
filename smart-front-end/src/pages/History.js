import React from 'react';
import Navbar from "./Navbar.js";
 
const HistoryPage = () => {
    const stats = [
        {
            label: 'Total Recordings',
            value: '142',
            icon: 'bi-file-earmark-bar-graph',
            bgColor: '#EAF2FF',
            iconColor: '#3B82F6'
        },
        {
            label: 'Detected Events',
            value: '1,247',
            icon: 'bi-activity',
            bgColor: '#E8F5E9',
            iconColor: '#22C55E'
        },
        {
            label: 'Avg Confidence',
            value: '87.3%',
            icon: 'bi-percent',
            bgColor: '#F3E8FF',
            iconColor: '#A855F7'
        },
        {
            label: 'Weekly Trend',
            value: '+12%',
            trend: '↑',
            icon: 'bi-exclamation-circle',
            bgColor: '#FFF7ED',
            iconColor: '#F97316'
        }
    ];

    const tableData = [
        { date: 'Dec 5, 2024 14:30', duration: '5m 23s', events: 12, f1: '0.89', status: 'Normal', statusColor: '#004990' },
        { date: 'Dec 4, 2024 09:15', duration: '3m 47s', events: 8, f1: '0.92', status: 'Active', statusColor: '#7C4DFF' },
        { date: 'Dec 3, 2024 18:42', duration: '4m 12s', events: 15, f1: '0.85', status: 'Normal', statusColor: '#004990' },
        { date: 'Dec 2, 2024 11:28', duration: '6m 01s', events: 9, f1: '0.91', status: 'Normal', statusColor: '#004990' },
        { date: 'Dec 1, 2024 13:55', duration: '2m 38s', events: 6, f1: '0.88', status: 'Active', statusColor: '#7C4DFF' },
    ];

    return (
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
              <Navbar />
        <div style={{ backgroundColor: '#F0F5F9', minHeight: '100vh', padding: '50px 0', fontFamily: 'Inter, sans-serif' }}>
            <div className="container">

                {/* Header Section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 bg-white p-4 rounded-4 shadow-sm border" style={{ borderColor: '#E5E7EB !important' }}>
                    <div>
                        <h2 className="fw-bold mb-1" style={{ color: '#004990', letterSpacing: '-0.5px' }}>Recording History</h2>
                        <p className=" mb-0 small fw-medium" style={{ color: '#6366F1', opacity: 0.8 }}>Track your digestive health trends and analyze bowel sound patterns over time</p>
                    </div>
                    <div className="d-flex gap-3 align-items-center mt-3 mt-md-0">
                        <select className="form-select border-0 bg-light rounded-pill px-4 py-2 small fw-semibold" style={{ width: 'auto', color: '#6366F1', boxShadow: 'none' }}>
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                        </select>
                        <button className="btn rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2 text-white shadow-sm"
                            style={{
                                backgroundColor: '#004990',
                                border: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            <i className="bi bi-plus-lg"></i>
                            New Recording
                        </button>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="row g-4 mb-5">
                    {stats.map((stat, idx) => (
                        <div className="col-md-3 col-sm-6" key={idx}>
                            <div className="bg-white p-4 rounded-4 shadow-sm border h-100 transition-hover" style={{ transition: 'all 0.3s ease', borderColor: '#F1F5F9' }}>
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <div
                                        className="rounded-3 d-flex align-items-center justify-content-center"
                                        style={{ width: '48px', height: '48px', backgroundColor: stat.bgColor }}
                                    >
                                        <i className={`bi ${stat.icon}`} style={{ color: stat.iconColor, fontSize: '1.4rem' }}></i>
                                    </div>
                                    <div className="text-end">
                                        <h3 className="fw-bold mb-0" style={{ color: '#1E293B', fontSize: '1.8rem' }}>{stat.value}</h3>
                                        {stat.trend && <span className="text-success small fw-bold" style={{ fontSize: '0.9rem' }}>{stat.trend}</span>}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted mb-0 small fw-semibold" style={{ opacity: 0.7 }}>{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chart Section */}
                <div className="bg-white rounded-4 shadow-sm p-4 mb-5 border" style={{ borderColor: '#F1F5F9' }}>
                    <div className="d-flex gap-4 mb-4">
                        <button className="btn btn-link text-decoration-none px-0 pb-2 border-bottom border-primary border-4 rounded-0 fw-bold small" style={{ color: '#6366F1', fontSize: '0.85rem' }}>Event Trends</button>
                        <button className="btn btn-link text-decoration-none px-0 pb-2 text-muted fw-semibold small" style={{ fontSize: '0.85rem' }}>Time Distribution</button>
                    </div>

                    <div className="position-relative mt-4" style={{ height: '350px' }}>
                        {/* SVG Chart */}
                        <svg width="100%" height="300" viewBox="0 0 1000 300" preserveAspectRatio="none">
                            {/* Horizontal Grid */}
                            {[0, 1, 2, 3, 4, 5].map(i => (
                                <line key={i} x1="0" y1={i * 60} x2="1000" y2={i * 60} stroke="#F1F5F9" strokeWidth="1" />
                            ))}

                            {/* Vertical Grid */}
                            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                                <line key={i} x1={i * 142.8} y1="0" x2={i * 142.8} y2="300" stroke="#F1F5F9" strokeWidth="1" />
                            ))}

                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15" />
                                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Area */}
                            <path
                                d="M 50,220 L 192.8,160 L 335.6,140 L 478.4,200 L 621.2,160 L 764.0,140 L 906.8,220 L 1000,180 L 1000,300 L 50,300 Z"
                                fill="url(#chartGradient)"
                            />

                            {/* Line */}
                            <path
                                d="M 50,220 L 192.8,160 L 335.6,140 L 478.4,200 L 621.2,160 L 764.0,140 L 906.8,220 L 1000,180"
                                fill="none"
                                stroke="#6366F1"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Points */}
                            <circle cx="50" cy="220" r="6" fill="#6366F1" stroke="#fff" strokeWidth="2" />
                            <circle cx="192.8" cy="160" r="6" fill="#6366F1" stroke="#fff" strokeWidth="2" />
                            <circle cx="335.6" cy="140" r="6" fill="#6366F1" stroke="#fff" strokeWidth="2" />
                            <circle cx="478.4" cy="200" r="6" fill="#6366F1" stroke="#fff" strokeWidth="2" />
                            <circle cx="621.2" cy="160" r="6" fill="#6366F1" stroke="#fff" strokeWidth="2" />
                            <circle cx="764.0" cy="140" r="6" fill="#6366F1" stroke="#fff" strokeWidth="2" />
                            <circle cx="906.8" cy="220" r="6" fill="#6366F1" stroke="#fff" strokeWidth="2" />
                            <circle cx="1000" cy="180" r="6" fill="#6366F1" stroke="#fff" strokeWidth="2" />
                        </svg>

                        {/* Labels */}
                        <div className="d-flex justify-content-between mt-3 px-2 text-muted fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                            <span>18 NOV</span>
                            <span>19 NOV</span>
                            <span>20 NOV</span>
                            <span>21 NOV</span>
                            <span>22 NOV</span>
                            <span>23 NOV</span>
                            <span>24 NOV</span>
                            <span>25 NOV</span>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-4 shadow-sm overflow-hidden border" style={{ borderColor: '#F1F5F9' }}>
                    <div className="p-4 border-bottom bg-white">
                        <h5 className="fw-bold mb-0" style={{ color: '#1E293B' }}>Recent Recordings</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 align-middle">
                            <thead style={{ backgroundColor: '#F8FAFC' }}>
                                <tr>
                                    <th className="ps-4 py-3 text-secondary small fw-bold">DATE & TIME</th>
                                    <th className="py-3 text-secondary small fw-bold">DURATION</th>
                                    <th className="py-3 text-secondary small fw-bold">EVENTS</th>
                                    <th className="py-3 text-secondary small fw-bold">F1-SCORE</th>
                                    <th className="py-3 text-secondary small fw-bold">CLASSIFICATION</th>
                                    <th className="pe-4 py-3 text-secondary small fw-bold text-end">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                        <td className="ps-4 py-3 small fw-semibold text-dark">{row.date}</td>
                                        <td className="py-3 small text-muted font-monospace">{row.duration}</td>
                                        <td className="py-3 small text-muted">{row.events}</td>
                                        <td className="py-3 small text-muted">{row.f1}</td>
                                        <td className="py-3 small">
                                            <span
                                                className="badge rounded-pill px-3 py-2 fw-bold"
                                                style={{ backgroundColor: row.statusColor, color: '#fff', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                                            >
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="pe-4 py-3 text-end">
                                            <button className="btn btn-link text-decoration-none small fw-bold p-0 transition-hover" style={{ color: '#6366F1', fontSize: '0.75rem' }}>View Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
                 {/* FOOTER */}
<footer style={{ background: "#2d4bb8", padding: "40px" }}>
  <hr className="border-white opacity-25 my-5" />

  <div className="row text-white small">
    <div className="col-lg-4">
      <p className="mb-4 fw-bold fs-5">Smart Gut Monitor</p>
      AI-Driven Bowel Sound Analysis<br />
      for Advanced Medical<br />
      Diagnostics
    </div>

    <div className="col-lg-4">
      <p className="mb-4 fw-bold fs-5">Quick Links</p>
      <p className="mb-1">Home</p>
      <p className="mb-1">About Model</p>
      <p className="mb-1">Team</p>
      <p className="mb-1">Live Recording</p>
    </div>

    <div className="col-lg-4 text-lg-end">
      <p className="mb-4 fw-bold fs-5">Contact Us</p>
      <p className="mb-1">contact@smartgutmonitor.com</p>
      <p className="mb-1">+1 (555) 123-4567</p>
      <p className="mb-1">Medical Innovation Center, USA</p>

      <div className="d-flex gap-3 justify-content-lg-end justify-content-center mt-3">
        <a href="#" className="text-white fs-4">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="text-white fs-4">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="text-white fs-4">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="#" className="text-white fs-4">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </div>
  </div>
</footer> 
     </div>
     

    );
};

export default HistoryPage;

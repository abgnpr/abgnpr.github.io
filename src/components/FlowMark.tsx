export default function FlowMark() {
  return (
    <svg
      aria-hidden="true"
      className="flow-mark"
      viewBox="0 0 560 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flow-gradient" x1="32" y1="0" x2="520" y2="360">
          <stop stopColor="#68e0b4" />
          <stop offset="1" stopColor="#f4bb66" />
        </linearGradient>
      </defs>
      <path
        d="M24 93H168L220 145H340L392 197H536"
        stroke="url(#flow-gradient)"
        strokeWidth="2"
        strokeDasharray="7 9"
      />
      <path
        d="M24 280H140L196 224H322L382 165H536"
        stroke="#69d5e7"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <circle cx="24" cy="93" r="9" fill="#0B1716" stroke="#68E0B4" strokeWidth="2" />
      <circle
        cx="220"
        cy="145"
        r="12"
        fill="#0B1716"
        stroke="#F4BB66"
        strokeWidth="2"
      />
      <circle cx="392" cy="197" r="9" fill="#0B1716" stroke="#69D5E7" strokeWidth="2" />
      <circle cx="536" cy="197" r="9" fill="#0B1716" stroke="#68E0B4" strokeWidth="2" />
      <rect
        x="134"
        y="252"
        width="60"
        height="60"
        rx="14"
        fill="#16312D"
        stroke="#31554F"
      />
      <path d="M149 281H179M164 266V296" stroke="#68E0B4" strokeWidth="2" />
      <rect
        x="315"
        y="113"
        width="60"
        height="60"
        rx="14"
        fill="#16312D"
        stroke="#31554F"
      />
      <path d="M330 143H360M345 128V158" stroke="#F4BB66" strokeWidth="2" />
    </svg>
  );
}

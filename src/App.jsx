import React, { useState, useEffect } from 'react';

// ============= MOCK DATA =============
const MOCK_TECHS = [
  {
    id: 1,
    name: "Maya Naidoo",
    location: "Sandton, JHB",
    rating: 4.9,
    bookings: 47,
    avatar: "https://i.pravatar.cc/150?img=1",
    goal: { target: 15000, current: 12500, label: "Finishing payment for school" },
    pricing: "R250 - R450",
    reviews: [
      { client: "Thandi M.", rating: 5, comment: "Best nails ever!" },
      { client: "Lerato K.", rating: 5, comment: "Amazing work" },
      { client: "Zama N.", rating: 4, comment: "Good service" },
      { client: "Sipho D.", rating: 5, comment: "My girlfriend loved it!" },
      { client: "Nomsa P.", rating: 5, comment: "Very professional" },
    ]
  },
  {
    id: 2,
    name: "Thandi Mokoena",
    location: "Rosebank, JHB",
    rating: 4.8,
    bookings: 52,
    avatar: "https://i.pravatar.cc/150?img=5",
    goal: { target: 8000, current: 6400, label: "Concert tickets fund" },
    pricing: "R300 - R500",
    reviews: [
      { client: "Bongi T.", rating: 5, comment: "Creative designs!" },
      { client: "Mbali S.", rating: 5, comment: "Love her vibe" },
      { client: "Precious M.", rating: 4, comment: "Great" },
      { client: "Khanyi L.", rating: 5, comment: "The best!" },
      { client: "Thandie N.", rating: 5, comment: "Consistent" },
    ]
  },
  {
    id: 3,
    name: "Zanele Dlamini",
    location: "Braamfontein, JHB",
    rating: 4.7,
    bookings: 38,
    avatar: "https://i.pravatar.cc/150?img=9",
    goal: { target: 20000, current: 15800, label: "Saving for a car" },
    pricing: "R280 - R420",
    reviews: [
      { client: "Nandi B.", rating: 5, comment: "So talented!" },
      { client: "Palesa H.", rating: 5, comment: "Always on time" },
      { client: "Ayanda K.", rating: 4, comment: "Beautiful work" },
      { client: "Zola M.", rating: 5, comment: "Highly recommend" },
      { client: "Lindiwe S.", rating: 5, comment: "Perfect every time" },
    ]
  },
  {
    id: 4,
    name: "Nokuthula Sithole",
    location: "Melville, JHB",
    rating: 4.6,
    bookings: 29,
    avatar: "https://i.pravatar.cc/150?img=10",
    goal: { target: 12000, current: 8500, label: "Moving to a new apartment" },
    pricing: "R220 - R380",
    reviews: [
      { client: "Tumi P.", rating: 5, comment: "Great attention to detail" },
      { client: "Sihle N.", rating: 4, comment: "Nice person" },
      { client: "Mpho D.", rating: 5, comment: "Love her style" },
      { client: "Buhle T.", rating: 5, comment: "Amazing results" },
      { client: "Ntombi K.", rating: 4, comment: "Good value" },
    ]
  },
  {
    id: 5,
    name: "Precious Mahlangu",
    location: "Fourways, JHB",
    rating: 4.5,
    bookings: 31,
    avatar: "https://i.pravatar.cc/150?img=16",
    goal: { target: 10000, current: 7200, label: "Starting my own salon" },
    pricing: "R200 - R350",
    reviews: [
      { client: "Rethabile M.", rating: 5, comment: "Very creative!" },
      { client: "Dineo L.", rating: 4, comment: "Friendly service" },
      { client: "Kagiso B.", rating: 5, comment: "Best nail art" },
      { client: "Thato W.", rating: 4, comment: "Reliable" },
      { client: "Refilwe S.", rating: 5, comment: "Absolutely love it" },
    ]
  },
  {
    id: 6,
    name: "Sibongile Khumalo",
    location: "Midrand, JHB",
    rating: 4.4,
    bookings: 24,
    avatar: "https://i.pravatar.cc/150?img=20",
    goal: { target: 6000, current: 4100, label: "Buying new equipment" },
    pricing: "R180 - R320",
    reviews: [
      { client: "Lungile N.", rating: 5, comment: "Super professional" },
      { client: "Khanyisile P.", rating: 4, comment: "Good service" },
      { client: "Neo V.", rating: 4, comment: "Happy with results" },
      { client: "Boitumelo J.", rating: 5, comment: "Great experience" },
      { client: "Mapule R.", rating: 4, comment: "Nice vibe" },
    ]
  }
];

const MOCK_CLIENTS = [
  { id: 1, name: "Thandi Malope" },
  { id: 2, name: "Lerato Khumalo" },
  { id: 3, name: "Zinhle Dube" },
];

const COMPARISONS = [
  {
    id: 1,
    client: "Lerato K.",
    tech: "Maya Naidoo",
    price: "R350",
    image: "https://i.ytimg.com/vi/AK0fyPC68jI/hq720.jpg",
    clientComment: "She nailed it! Exactly what I wanted",
    techComment: "Client was so sweet",
    rating: 5
  },
  {
    id: 2,
    client: "Thandi M.",
    tech: "Thandi Mokoena",
    price: "R400",
    image: "https://static.boredpanda.com/blog/wp-content/uploads/2021/04/what-people-wanted-vs-what-they-got-tiktok-1.jpg",
    clientComment: "Happy with the result",
    techComment: "Great inspo pics",
    rating: 4
  },
  {
    id: 3,
    client: "Zanele D.",
    tech: "Zanele Dlamini",
    price: "R380",
    image: "https://i.ytimg.com/vi/OcAkNRaeIck/maxresdefault.jpg",
    clientComment: "Absolutely stunning! Love the colors",
    techComment: "Fun design to work on",
    rating: 5
  }
];

const FEED_POSTS = [
  {
    id: 1,
    tech: "Maya Naidoo",
    client: "Bongi T.",
    image: "https://i0.wp.com/farahfsalem.com/wp-content/uploads/2024/07/fall-nails.jpg?fit=1241%2C1235&ssl=1",
    techComment: "Fall vibes with these warm tones! 🍂✨",
    clientComment: "Obsessed with how they turned out!",
    likes: 124,
    timestamp: "2h ago"
  },
  {
    id: 2,
    tech: "Thandi Mokoena",
    client: "Mbali S.",
    image: "https://cdn.prod.website-files.com/630f3c750051ac8f612287b7/679c0dac5440595d5cd80d24_63d09faa181a3fa602226449_34%2520Nail%2520Art%2520Design%2520Ideas%2520%2526%2520Nails%2520Inspo%25202023%2520-%252010.jpeg",
    techComment: "French tip with a twist 🌸",
    clientComment: "So elegant! Perfect for my event",
    likes: 89,
    timestamp: "5h ago"
  },
  {
    id: 3,
    tech: "Zanele Dlamini",
    client: "Palesa H.",
    image: "https://www.plapro.com/cdn/shop/articles/Delanie_Flowers_2.jpg?v=1695840995",
    techComment: "Floral elegance 🌺💅",
    clientComment: "Can't stop staring at them!",
    likes: 156,
    timestamp: "1d ago"
  },
  {
    id: 4,
    tech: "Nokuthula Sithole",
    client: "Tumi P.",
    image: "https://i.pinimg.com/736x/ce/ae/88/ceae88aac8fe824df7b6f4d3be4793a3.jpg",
    techComment: "Bold and beautiful! 💖✨",
    clientComment: "Exactly what I wanted! So chic",
    likes: 201,
    timestamp: "1d ago"
  },
  {
    id: 5,
    tech: "Precious Mahlangu",
    client: "Dineo L.",
    image: "https://assets.teenvogue.com/photos/66d9d2e25ca4a443749d333f/master/w_1600%2Cc_limit/optical%2520illusion%2520nails.png",
    techComment: "Optical illusion magic! 👁️✨",
    clientComment: "These make me so happy!",
    likes: 142,
    timestamp: "2d ago"
  },
  {
    id: 6,
    tech: "Sibongile Khumalo",
    client: "Neo V.",
    image: "https://cdn.shopify.com/s/files/1/2657/6552/files/Dazzle_Dry_Swirls_480x480.jpg?v=1685738486",
    techComment: "Swirls and dreams 🌀💅",
    clientComment: "Timeless and beautiful!",
    likes: 95,
    timestamp: "3d ago"
  }
];

// ============= STYLES =============
const styles = {
  app: {
    fontFamily: "'Inter', sans-serif",
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  toggle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
  },
  toggleSwitch: {
    position: 'relative',
    width: '45px',
    height: '24px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    cursor: 'pointer',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  toggleSlider: {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '18px',
    height: '18px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'transform 0.3s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  header: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  logo: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'white',
  },
  nav: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  btn: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  giftBtn: {
    background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
    border: 'none',
    color: '#764ba2',
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '1.5rem',
    boxSizing: 'border-box',
  },
  containerNarrow: {
    maxWidth: '600px',
    width: '100%',
    margin: '0 auto',
    padding: '1.5rem',
    boxSizing: 'border-box',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '1.5rem',
    marginBottom: '1rem',
    color: 'white',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    zIndex: 1000,
  },
  modalContent: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '2rem',
    maxWidth: '450px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    color: 'white',
    fontSize: '0.9rem',
    boxSizing: 'border-box',
    marginTop: '0.5rem',
  },
  progressBar: {
    width: '100%',
    height: '12px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '1rem',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #ffd700, #ffed4e)',
    transition: 'width 1s ease-out',
  },
  comparisonImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '0.5rem',
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    width: '100%',
  },
  feedImage: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  feedPost: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '0',
    marginBottom: '1.5rem',
    overflow: 'hidden',
  },
  feedContent: {
    padding: '1.5rem',
  },
  '@media (max-width: 768px)': {
    techGrid: {
      gridTemplateColumns: '1fr',
    },
  },
};

// ============= COMPONENTS =============

function NewUserModal({ topTechs, onClose, onBook }) {
  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>Hey, are you new here?</h2>
          <p style={{ fontSize: '1rem', opacity: 0.9 }}>
            Nervous on which nail tech is best for you?
          </p>
          <p style={{ fontSize: '0.95rem', opacity: 0.8, marginTop: '0.5rem' }}>
            Here are our top 3 highest-rated techs:
          </p>
        </div>

        {topTechs.map((tech, index) => (
          <div key={tech.id} style={{ ...styles.card, padding: '1.2rem', marginBottom: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}</span>
                  <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{tech.name}</h3>
                </div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: '0.3rem 0 0 2rem' }}>
                  {tech.location}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.8rem', fontSize: '0.75rem', marginLeft: '2rem', marginBottom: '0.8rem' }}>
              <span>⭐ {tech.rating}</span>
              <span>📅 {tech.bookings} bookings</span>
              <span>💰 {tech.pricing}</span>
            </div>
            <button
              style={{ ...styles.btn, ...styles.giftBtn, width: '100%', fontSize: '0.9rem' }}
              onClick={() => {
                onBook(tech);
                onClose();
              }}
            >
              Book {tech.name}
            </button>
          </div>
        ))}

        <button
          style={{ ...styles.btn, width: '100%', marginTop: '0.5rem', opacity: 0.8 }}
          onClick={onClose}
        >
          Browse All Techs
        </button>
      </div>
    </div>
  );
}

function WelcomeGift({ onClose }) {
  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎁</div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Welcome Gift!</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            You just got gifted <strong>2 free sessions</strong> from <strong>Anonymous</strong>
          </p>
          <button style={{ ...styles.btn, ...styles.giftBtn, width: '100%' }} onClick={onClose}>
            Claim Gift
          </button>
        </div>
      </div>
    </div>
  );
}

function FirstTimeModal({ tech, onClose }) {
  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          First time with {tech.name}?
        </h3>
        
        <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>⭐ Top Reviews</h4>
        {tech.reviews.slice(0, 3).map((review, idx) => (
          <div key={idx} style={{ ...styles.card, padding: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '600' }}>{review.client}</span>
              <span>{'⭐'.repeat(review.rating)}</span>
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0.3rem 0 0 0' }}>{review.comment}</p>
          </div>
        ))}

        <button style={{ ...styles.btn, width: '100%', marginTop: '1rem' }} onClick={onClose}>
          Continue Booking
        </button>
      </div>
    </div>
  );
}

function TipModal({ tech, onTip, onSkip }) {
  const [tipAmount, setTipAmount] = useState(50);
  const percentage = ((tech.goal.current / tech.goal.target) * 100).toFixed(0);
  
  return (
    <div style={styles.modal} onClick={onSkip}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          Support {tech.name}'s Goal
        </h3>
        
        <div style={{ ...styles.card, padding: '1.5rem', marginBottom: '1rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>Working towards:</p>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#ffd700', marginBottom: '1rem' }}>
            {tech.goal.label}
          </p>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${percentage}%` }} />
          </div>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center', opacity: 0.8 }}>
            {percentage}% complete (R{tech.goal.current.toLocaleString()} / R{tech.goal.target.toLocaleString()})
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          {[20, 50, 100, 200].map(amount => (
            <button
              key={amount}
              style={{
                ...styles.btn,
                flex: 1,
                background: tipAmount === amount ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)',
              }}
              onClick={() => setTipAmount(amount)}
            >
              R{amount}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{ ...styles.btn, flex: 1 }} onClick={onSkip}>Skip</button>
          <button style={{ ...styles.btn, ...styles.giftBtn, flex: 1 }} onClick={() => onTip(tipAmount)}>
            Tip R{tipAmount}
          </button>
        </div>
      </div>
    </div>
  );
}

function GiftingModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [selectedClient, setSelectedClient] = useState(null);
  const [sessions, setSessions] = useState(1);
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [senderName, setSenderName] = useState('');

  const handleGift = () => {
    const sender = isAnonymous ? 'Anonymous' : (senderName || 'A friend');
    let giftMessage = `Gift sent to ${selectedClient.name}! 🎁\n${sessions} session(s)`;
    giftMessage += `\nFrom: ${sender}`;
    if (message) {
      giftMessage += `\nMessage: "${message}"`;
    }
    alert(giftMessage);
    onClose();
  };

  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Gift Nails 🎁</h3>

        {step === 1 && (
          <>
            <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Select recipient:</p>
            {MOCK_CLIENTS.map((client) => (
              <div
                key={client.id}
                style={{
                  ...styles.card,
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setSelectedClient(client);
                  setStep(2);
                }}
              >
                <p style={{ margin: 0, fontWeight: '500' }}>{client.name}</p>
              </div>
            ))}
          </>
        )}

        {step === 2 && selectedClient && (
          <>
            <div style={{ ...styles.card, padding: '1rem', marginBottom: '1rem' }}>
              <p style={{ fontWeight: '600', margin: 0 }}>{selectedClient.name}</p>
            </div>

            <p style={{ marginBottom: '0.5rem' }}>Number of Sessions:</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {[1, 2, 3, 5].map(num => (
                <button
                  key={num}
                  style={{
                    ...styles.btn,
                    flex: 1,
                    background: sessions === num ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  }}
                  onClick={() => setSessions(num)}
                >
                  {num}
                </button>
              ))}
            </div>

            <p style={{ marginBottom: '0.5rem' }}>Gift Message (Optional):</p>
            <textarea
              style={{ ...styles.input, minHeight: '80px', resize: 'vertical', fontFamily: 'inherit' }}
              placeholder="Add a personal message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div style={{ margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                />
                <label htmlFor="anonymous" style={{ fontSize: '0.9rem', cursor: 'pointer' }}>
                  Send anonymously
                </label>
              </div>

              {!isAnonymous && (
                <>
                  <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>Your Name:</p>
                  <input
                    type="text"
                    style={styles.input}
                    placeholder="Enter your name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                </>
              )}
            </div>

            <div style={{ ...styles.card, padding: '1rem', marginBottom: '1rem', background: 'rgba(255, 215, 0, 0.1)' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0, color: '#ffd700' }}>
                Total: R{(sessions * 350).toLocaleString()}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ ...styles.btn, flex: 1 }} onClick={() => setStep(1)}>Back</button>
              <button style={{ ...styles.btn, ...styles.giftBtn, flex: 1 }} onClick={handleGift}>
                Send Gift
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Header({ page, setPage, showGift, onGiftClick, viewMode, setViewMode }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Salon Goals</div>
      <nav style={styles.nav}>
        {viewMode === 'client' ? (
          <>
            <button style={styles.btn} onClick={() => setPage('home')}>Home</button>
            <button style={styles.btn} onClick={() => setPage('discover')}>Discover</button>
            <button style={styles.btn} onClick={() => setPage('compare')}>Compare</button>
            {showGift && (
              <button style={styles.giftBtn} onClick={onGiftClick}>🎁 Gift</button>
            )}
          </>
        ) : (
          <>
            <button style={styles.btn} onClick={() => setPage('tech-appointments')}>Appointments</button>
            <button style={styles.btn} onClick={() => setPage('tech-earnings')}>Earnings</button>
            <button style={styles.btn} onClick={() => setPage('tech-goals')}>Goals</button>
          </>
        )}
        <div style={styles.toggle}>
          <span style={{ color: 'white', fontWeight: viewMode === 'client' ? '600' : '400' }}>
            CLIENT
          </span>
          <div style={styles.toggleSwitch} onClick={() => setViewMode(viewMode === 'client' ? 'tech' : 'client')}>
            <div style={{
              ...styles.toggleSlider,
              transform: viewMode === 'tech' ? 'translateX(21px)' : 'translateX(0)',
            }} />
          </div>
          <span style={{ color: 'white', fontWeight: viewMode === 'tech' ? '600' : '400' }}>
            TECH
          </span>
        </div>
      </nav>
    </header>
  );
}

function Home({ setPage }) {
  return (
    <div style={styles.containerNarrow}>
      <div style={styles.card}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Salon Goals</h1>
        <p style={{ fontSize: '1rem', marginBottom: '2rem', opacity: 0.9 }}>
          Find the best nail techs. Book. Rate. Flex.
        </p>
        <button style={{ ...styles.btn, width: '100%' }} onClick={() => setPage('discover')}>
          Discover Techs
        </button>
      </div>

      <div style={styles.card}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>How It Works</h3>
        <p style={{ opacity: 0.8 }}>1. Browse top-rated techs</p>
        <p style={{ opacity: 0.8 }}>2. Book your appointment</p>
        <p style={{ opacity: 0.8 }}>3. Get amazing nails</p>
        <p style={{ opacity: 0.8 }}>4. Rate & review</p>
      </div>
    </div>
  );
}

function Discover() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [showNewUser, setShowNewUser] = useState(false);
  const [showFirstTime, setShowFirstTime] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [activeTab, setActiveTab] = useState('techs'); // 'techs' or 'feed'

  // Show new user modal on first visit only (persists across sessions)
  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenNewUserModal');
    if (!hasSeenModal) {
      setShowNewUser(true);
    }
  }, []);

  const handleCloseNewUserModal = () => {
    localStorage.setItem('hasSeenNewUserModal', 'true');
    setShowNewUser(false);
  };

  // Get top 3 techs by rating
  const topTechs = [...MOCK_TECHS].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
    setShowFirstTime(true);
  };

  const handleBookFromModal = (tech) => {
    localStorage.setItem('hasSeenNewUserModal', 'true');
    setSelectedTech(tech);
    setShowBooking(true);
  };

  const handleBook = () => {
    setShowBooking(false);
    setShowTip(true);
  };

  const handleTip = (amount) => {
    alert(`Booking confirmed with R${amount} tip!`);
    setShowTip(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Discover</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            style={{
              ...styles.btn,
              background: activeTab === 'techs' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)',
            }}
            onClick={() => setActiveTab('techs')}
          >
            Techs
          </button>
          <button
            style={{
              ...styles.btn,
              background: activeTab === 'feed' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)',
            }}
            onClick={() => setActiveTab('feed')}
          >
            Feed
          </button>
        </div>
      </div>

      {activeTab === 'techs' && (
        <div style={styles.techGrid}>
          {MOCK_TECHS.map((tech) => (
            <div key={tech.id} style={{ ...styles.card, cursor: 'pointer' }} onClick={() => handleTechClick(tech)}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{tech.name}</h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>{tech.location}</p>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', flexWrap: 'wrap' }}>
                <span>⭐ {tech.rating}</span>
                <span>📅 {tech.bookings} bookings</span>
                <span>💰 {tech.pricing}</span>
              </div>
              <button
                style={{ ...styles.btn, width: '100%', marginTop: '1rem' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTech(tech);
                  setShowBooking(true);
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'feed' && (
        <div style={styles.techGrid}>
          {FEED_POSTS.map((post) => (
            <div key={post.id} style={styles.feedPost}>
              <img src={post.image} alt="Nails" style={styles.feedImage} />
              <div style={styles.feedContent}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7, margin: '0 0 0.3rem 0' }}>
                    <strong>Tech:</strong> {post.tech}
                  </p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7, margin: '0 0 0.5rem 0' }}>
                    <strong>Client:</strong> {post.client}
                  </p>
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <p style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0', fontWeight: '500' }}>
                    {post.techComment}
                  </p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: 0, fontStyle: 'italic' }}>
                    "{post.clientComment}"
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', opacity: 0.7 }}>
                  <span>❤️ {post.likes} likes</span>
                  <span>{post.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showNewUser && (
        <NewUserModal
          topTechs={topTechs}
          onClose={handleCloseNewUserModal}
          onBook={handleBookFromModal}
        />
      )}

      {showFirstTime && selectedTech && (
        <FirstTimeModal tech={selectedTech} onClose={() => setShowFirstTime(false)} />
      )}

      {showBooking && selectedTech && (
        <div style={styles.modal} onClick={() => setShowBooking(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Book with {selectedTech.name}</h3>
            <input type="date" style={styles.input} placeholder="Date" />
            <input type="time" style={styles.input} placeholder="Time" />
            <select style={styles.input}>
              <option>Select service...</option>
              <option>Gel Manicure</option>
              <option>Acrylic Set</option>
              <option>Spa Pedicure</option>
            </select>
            <button style={{ ...styles.btn, width: '100%', marginTop: '1rem' }} onClick={handleBook}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      {showTip && selectedTech && (
        <TipModal tech={selectedTech} onTip={handleTip} onSkip={() => setShowTip(false)} />
      )}
    </div>
  );
}

function Compare() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>What I Asked vs What I Got</h2>
        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Real results from clients</p>
      </div>

      <div style={styles.techGrid}>
        {COMPARISONS.map((comp) => (
          <div key={comp.id} style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <p style={{ fontWeight: '600', margin: 0 }}>{comp.client}</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: 0 }}>
                  Tech: {comp.tech} • {comp.price}
                </p>
              </div>
              <span>{'⭐'.repeat(comp.rating)}</span>
            </div>

            <img src={comp.image} alt="Nails" style={styles.comparisonImage} />

            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.3rem' }}><strong>Client:</strong></p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.8rem' }}>{comp.clientComment}</p>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.3rem' }}><strong>Tech:</strong></p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>{comp.techComment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechAppointments({ appointments }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>My Appointments</h2>
        <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem' }}>
          {appointments.length} upcoming bookings
        </p>
      </div>

      {appointments.length === 0 ? (
        <div style={styles.card}>
          <p style={{ textAlign: 'center', opacity: 0.6 }}>No appointments yet</p>
        </div>
      ) : (
        appointments.map((appt) => (
          <div key={appt.id} style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{appt.clientName}</h3>
              <span style={{ ...styles.btn, padding: '0.3rem 0.8rem', fontSize: '0.75rem' }}>
                {appt.status}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0.3rem 0' }}>
              📅 {appt.date} at {appt.time}
            </p>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0.3rem 0' }}>
              💅 {appt.service}
            </p>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0.3rem 0' }}>
              💰 {appt.price}
            </p>
            {appt.notes && (
              <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.5rem', fontStyle: 'italic' }}>
                Note: {appt.notes}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

function TechEarnings({ earnings }) {
  const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
  const thisMonth = earnings.filter(e => e.month === 'November').reduce((sum, e) => sum + e.amount, 0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Earnings</h2>
      </div>

      <div style={{ ...styles.card, background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 237, 78, 0.2))' }}>
        <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '0.3rem' }}>Total Earnings</p>
        <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0', color: '#ffd700' }}>
          R{totalEarnings.toLocaleString()}
        </h2>
        <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>This month: R{thisMonth.toLocaleString()}</p>
      </div>

      <div style={styles.card}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Recent Transactions</h3>
        {earnings.map((earning) => (
          <div key={earning.id} style={{ ...styles.card, padding: '1rem', marginBottom: '0.5rem', background: 'rgba(255, 255, 255, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: 0, fontWeight: '500' }}>{earning.clientName}</p>
                <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', opacity: 0.7 }}>
                  {earning.date} • {earning.service}
                </p>
              </div>
              <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', color: '#ffd700' }}>
                +R{earning.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechGoals({ goals, setGoals }) {
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    label: '',
    target: '',
    current: '',
    isPublic: true,
  });

  const handleAddGoal = () => {
    if (!newGoal.label || !newGoal.target) {
      alert('Please fill in goal name and target amount');
      return;
    }

    const goal = {
      id: Date.now(),
      label: newGoal.label,
      target: parseFloat(newGoal.target),
      current: parseFloat(newGoal.current) || 0,
      isPublic: newGoal.isPublic,
    };

    setGoals([...goals, goal]);
    setNewGoal({ label: '', target: '', current: '', isPublic: true });
    setShowAddGoal(false);
  };

  const handleUpdateProgress = (goalId, amount) => {
    setGoals(goals.map(g =>
      g.id === goalId
        ? { ...g, current: Math.min(g.current + amount, g.target) }
        : g
    ));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>My Goals</h2>
          <button style={styles.giftBtn} onClick={() => setShowAddGoal(true)}>
            + New Goal
          </button>
        </div>
      </div>

      {goals.length === 0 ? (
        <div style={styles.card}>
          <p style={{ textAlign: 'center', opacity: 0.6 }}>No goals yet. Create your first goal!</p>
        </div>
      ) : (
        goals.map((goal) => {
          const percentage = ((goal.current / goal.target) * 100).toFixed(0);
          return (
            <div key={goal.id} style={styles.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.3rem 0' }}>{goal.label}</h3>
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                    {goal.isPublic ? '🌍 Public' : '🔒 Private'}
                  </span>
                </div>
                <button
                  style={{ ...styles.btn, fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}
                  onClick={() => setGoals(goals.map(g =>
                    g.id === goal.id ? { ...g, isPublic: !g.isPublic } : g
                  ))}
                >
                  {goal.isPublic ? 'Make Private' : 'Make Public'}
                </button>
              </div>

              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: `${percentage}%` }} />
              </div>

              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.8 }}>
                R{goal.current.toLocaleString()} / R{goal.target.toLocaleString()} ({percentage}%)
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                {[50, 100, 250, 500].map(amount => (
                  <button
                    key={amount}
                    style={{ ...styles.btn, flex: 1, fontSize: '0.8rem', padding: '0.5rem' }}
                    onClick={() => handleUpdateProgress(goal.id, amount)}
                    disabled={goal.current >= goal.target}
                  >
                    +R{amount}
                  </button>
                ))}
              </div>
            </div>
          );
        })
      )}

      {showAddGoal && (
        <div style={styles.modal} onClick={() => setShowAddGoal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Create New Goal</h3>

            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.9 }}>Goal Name</p>
            <input
              type="text"
              style={styles.input}
              placeholder="e.g., Saving for a car, Rent money"
              value={newGoal.label}
              onChange={(e) => setNewGoal({ ...newGoal, label: e.target.value })}
            />

            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', marginTop: '1rem', opacity: 0.9 }}>
              Target Amount (R)
            </p>
            <input
              type="number"
              style={styles.input}
              placeholder="10000"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
            />

            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', marginTop: '1rem', opacity: 0.9 }}>
              Current Amount (R)
            </p>
            <input
              type="number"
              style={styles.input}
              placeholder="0"
              value={newGoal.current}
              onChange={(e) => setNewGoal({ ...newGoal, current: e.target.value })}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              <input
                type="checkbox"
                id="isPublic"
                checked={newGoal.isPublic}
                onChange={(e) => setNewGoal({ ...newGoal, isPublic: e.target.checked })}
                style={{ cursor: 'pointer' }}
              />
              <label htmlFor="isPublic" style={{ fontSize: '0.9rem', cursor: 'pointer' }}>
                Make goal public (visible to clients)
              </label>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
              <button style={{ ...styles.btn, flex: 1 }} onClick={() => setShowAddGoal(false)}>
                Cancel
              </button>
              <button style={{ ...styles.btn, ...styles.giftBtn, flex: 1 }} onClick={handleAddGoal}>
                Create Goal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const [viewMode, setViewMode] = useState('client');
  const [showWelcome, setShowWelcome] = useState(false);
  const [showGifting, setShowGifting] = useState(false);

  // Tech data
  const [appointments, setAppointments] = useState([
    { id: 1, clientName: 'Thandi M.', date: 'Nov 20, 2024', time: '10:00 AM', service: 'Gel Manicure', price: 'R350', status: 'Confirmed', notes: 'Prefers pink shades' },
    { id: 2, clientName: 'Lerato K.', date: 'Nov 21, 2024', time: '2:00 PM', service: 'Acrylic Set', price: 'R450', status: 'Confirmed' },
    { id: 3, clientName: 'Zinhle D.', date: 'Nov 22, 2024', time: '11:30 AM', service: 'Spa Pedicure', price: 'R300', status: 'Pending' },
  ]);

  const [earnings, setEarnings] = useState([
    { id: 1, clientName: 'Bongi T.', date: 'Nov 15, 2024', service: 'Gel Manicure', amount: 350, month: 'November' },
    { id: 2, clientName: 'Mbali S.', date: 'Nov 14, 2024', service: 'Acrylic Set', amount: 450, month: 'November' },
    { id: 3, clientName: 'Precious M.', date: 'Nov 12, 2024', service: 'Spa Pedicure', amount: 300, month: 'November' },
    { id: 4, clientName: 'Khanyi L.', date: 'Nov 10, 2024', service: 'Nail Art', amount: 400, month: 'November' },
    { id: 5, clientName: 'Thandie N.', date: 'Oct 28, 2024', service: 'Gel Manicure', amount: 350, month: 'October' },
  ]);

  const [goals, setGoals] = useState([
    { id: 1, label: 'Saving for a car', target: 50000, current: 28500, isPublic: true },
    { id: 2, label: 'Rent for December', target: 8000, current: 6400, isPublic: false },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset to appropriate page when switching views
    if (viewMode === 'tech') {
      setPage('tech-appointments');
    } else {
      setPage('home');
    }
  }, [viewMode]);

  return (
    <div style={styles.app}>
      <Header
        page={page}
        setPage={setPage}
        showGift={viewMode === 'client'}
        onGiftClick={() => setShowGifting(true)}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {showWelcome && viewMode === 'client' && <WelcomeGift onClose={() => setShowWelcome(false)} />}
      {showGifting && <GiftingModal onClose={() => setShowGifting(false)} />}

      {/* Client Pages */}
      {viewMode === 'client' && page === 'home' && <Home setPage={setPage} />}
      {viewMode === 'client' && page === 'discover' && <Discover />}
      {viewMode === 'client' && page === 'compare' && <Compare />}

      {/* Tech Pages */}
      {viewMode === 'tech' && page === 'tech-appointments' && <TechAppointments appointments={appointments} />}
      {viewMode === 'tech' && page === 'tech-earnings' && <TechEarnings earnings={earnings} />}
      {viewMode === 'tech' && page === 'tech-goals' && <TechGoals goals={goals} setGoals={setGoals} />}
    </div>
  );
}

export default App;
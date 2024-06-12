import React, { useState, useRef } from 'react';
import { LuBrainCircuit } from "react-icons/lu";
import Background from "../../../Assets/bg-softskil.jpeg"

const CarouselItem = ({ title, description }) => {
  return (
    <div className={`p-4 text-white rounded-[10px]`} style={{minWidth: '400px', maxWidth: '400px', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-white text-[12px]" style={{ maxWidth: '400px' }}>{description}</p>
    </div>
  );
};

const SoftSkills = () => {
  const items = [
    {   
        title: 'Leadership', 
        description: 'In leadership roles, I demonstrate decisive decision-making, accountability, and the ability to motivate and empower team members, creating an inspirational work environment and guiding towards common goals.' 
    },

    {   
        title: 'Communication', 
        description: 'I excel in effective communication, articulating ideas clearly, and attentive listening. I believe in building positive relationships and preventing misunderstandings, crucial in a work environment.' 
    },

    {   
        title: 'Adaptation', 
        description: 'Quickly adapting to change, my flexibility and resilience enable positive responses to new situations, learning from experiences, and staying effective in challenges.' 
    },

    {   
        title: 'Team work', 
        description: 'As a strong team player, I actively collaborate, contribute based on strengths, support teammates, and adapt to diverse working styles to achieve common goals.' 
    },

    {   
        title: 'Creativity', 
        description: 'Recognized for innovative problem-solving, I enjoy thinking outside the box, generating fresh ideas, and positively contributing to team creativity.' 
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleLeave = () => {
    setIsDragging(false);
  };

  const handleUp = () => {
    setIsDragging(false);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1; // Sesuaikan kecepatan geser
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <div>
        <div className="flex gap-[5px] items-center">
          <LuBrainCircuit className="shake-animation text-[20px]" />
          <p className="text-[20px] font-medium">Soft Skills</p>
        </div>
        <p className="text-[16px] pl-[25px] text-[#525252]">Swipe or drag to see more</p>
        <div
          ref={carouselRef}
          className="w-full overflow-hidden cursor-grab gap-[20px] mt-[10px]"
          onMouseDown={handleDown}
          onMouseLeave={handleLeave}
          onMouseUp={handleUp}
          onMouseMove={handleMove}
          onTouchStart={handleDown}
          onTouchEnd={handleUp}
          onTouchMove={handleMove}
          style={{ display: 'flex' }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
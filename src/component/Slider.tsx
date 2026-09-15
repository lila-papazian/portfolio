import { useRef, useState } from 'react';
import openLibraryExampleBefore from '../assets/openlibrary-example-before.webp';
import figmaInstant from '../assets/figma-instant.webp';
import figma14Days from '../assets/figma-14-days.webp';

const Slider = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);

    const handleMove = (clientX: number) => {
    const bounds = containerRef!.current!.getBoundingClientRect();

    let x = clientX - bounds.left;
    let percentage = (x / bounds.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    setPosition(percentage);
  };

  const startDrag = () => {
    const stopDrag = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDrag);
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopDrag);
  };

  const startTouch = () => {
    const stopTouch = () => {
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopTouch);
    };

    const onTouchMove = (e: TouchEvent) => {
      handleMove(e.touches[0].clientX);
    };
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', stopTouch);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black p-4">
      <div
        ref={containerRef}
        onClick={(e) => handleMove(e.clientX)}
        className="relative w-full max-w-6xl h-100 rounded-xl shadow-2xl overflow-hidden select-none"
      >
        <Image
          src={openLibraryExampleBefore}
          alt="Before"
          class="absolute inset-0 w-full h-full object-cover filter grayscale pointer-events-none"
        />

        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src="https://images.unsplash.com/photo-1765206685652-da5e0873327e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="After"
            class="w-full h-full object-cover pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              maxWidth: 'none',
            }}
          />
        </div>
        <div
          onMouseDown={startDrag}
          onTouchStart={startTouch}
          className="absolute top-0 h-full w-1 bg-white shadow-lg"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-blue-900 border-4 border-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
          Original
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
          Grayscale
        </div>
      </div>
    </div>
  );
}

export default Slider;

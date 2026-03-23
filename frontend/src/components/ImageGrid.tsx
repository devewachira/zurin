import React from 'react';

const ImageGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-4 auto-rows-min">
        {/* Left column - tall image */}
        <div className="col-span-3 row-span-2">
          <img 
            src="/api/placeholder/300/600" 
            alt="Office meeting space" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Top middle - medium image */}
        <div className="col-span-3">
          <img 
            src="/api/placeholder/300/280" 
            alt="Team collaboration" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Top right - medium image */}
        <div className="col-span-3">
          <img 
            src="/api/placeholder/300/280" 
            alt="City skyline" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Far right - tall image */}
        <div className="col-span-3 row-span-3">
          <img 
            src="/api/placeholder/300/700" 
            alt="City aerial view" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Center large - spans 2 columns, 2 rows */}
        <div className="col-span-6 row-span-2">
          <img 
            src="/api/placeholder/600/400" 
            alt="Women working together" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Bottom right - medium image */}
        <div className="col-span-3">
          <img 
            src="/api/placeholder/300/280" 
            alt="Person working at desk" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Bottom left small images - 2x2 grid */}
        <div className="col-span-3 grid grid-cols-2 gap-2">
          <img 
            src="/api/placeholder/140/140" 
            alt="Laptop and coffee" 
            className="w-full h-full object-cover rounded-lg"
          />
          <img 
            src="/api/placeholder/140/140" 
            alt="Workspace setup" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
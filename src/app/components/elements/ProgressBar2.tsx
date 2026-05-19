import React, { useEffect, useState } from 'react';

interface ProgressBar2Props {
  title?: string;
  targetPercentage: number;
}

const ProgressBar2 = ({ title, targetPercentage }: ProgressBar2Props) => {
    const [percentage, setPercentage] = useState(0);
    const animationDuration = 3000;

    useEffect(() => {
        const increment = targetPercentage / (animationDuration / 10);
        let currentPercentage = 0;

        const interval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(interval);
            }
            setPercentage(Math.floor(currentPercentage));
        }, 10);

        return () => clearInterval(interval);
    }, [targetPercentage, animationDuration]);

    return (
            <div className="bar" aria-label={title ?? undefined}>
              <div className="bar-inner counted" style={{ width: `${percentage}%` }}>
                <div className="count-text">{percentage}%</div>
              </div>
            </div>
    );
};

export default ProgressBar2;

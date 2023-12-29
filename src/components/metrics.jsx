import React from 'react';
import './metrics.css'; // Import your CSS file
import Card from './card';

// Placeholder for Card component
// const Card = ({ title, content }) => (
//   <div className="card">
//     <h3>{title}</h3>
//     <p>{content}</p>
//   </div>
// );

const CompanyMetrics = () => {
  return (
    <div className="company-metrics-container">
      
      <Card data={{ num: '406411.29' , desc: 'Total Revenue' }}/>

      <Card title="Metric 2" content="Placeholder content for Metric 2" />
      <Card title="Metric 3" content="Placeholder content for Metric 3" />
      <Card title="Metric 4" content="Placeholder content for Metric 4" />

      {/* Row 2 */}
      <Card title="Metric 5" content="Placeholder content for Metric 5" />
      <Card title="Metric 6" content="Placeholder content for Metric 6" />
      <Card title="Metric 7" content="Placeholder content for Metric 7" />
      <Card title="Metric 8" content="Placeholder content for Metric 8" />
    </div>
  );
};

export default CompanyMetrics;

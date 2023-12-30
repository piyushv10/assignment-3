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
      
      <Card  num= {'$406411.29'}  desc= {'Total Revenue'} />
      <Card  num= {'$620'}  desc= {'Total Jobs Avg'} />
      <Card  num= {'655'}  desc= {'Tickets Created'} />
      <Card  num= {'735'}  desc= {'Tickets Scheculed'} />
      <Card  num= {'$110448.8'}  desc= {'Outstanding amount'} />
      <Card  num= {'105'}  desc= {'Memberships Sold'} />
      <Card  num= {'436'}  desc= {'Jobs Completed'} />
      <Card  num= {'65'}  desc= {'Total Canceled'} />


    </div>
  );
};

export default CompanyMetrics;

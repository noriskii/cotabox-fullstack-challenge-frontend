import React from 'react';
import Chart from 'react-google-charts';

function ContributorDashboard({ contributors, chartData }) {
 
  return (
    <main>
      <header>
        <p>DATA</p>
        <p>Lorem Ipsum dolor sit amet</p>
      </header>
      <section>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Participation</th>
            </tr>
          </thead>
          <tbody>
          {
            contributors.map(contributor => (
              <tr key={contributor._id}>
                <td>{contributor.firstName}</td>
                <td>{contributor.lastName}</td>
                <td>{contributor.contribution}%</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </section>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={
          chartData
        }
        options={{
          pieSliceText: 'none',
          pieHole: 0.5,
          colors: ['#4F9EC4','#87DCC0','#F47C7C','#F7F48B','#A1DE93','#70A1D7','#A3D6D4','#F1E9CB','#C2D5A7','#B0ABCA',
          '#E2A9BE','#E1C6AC','#FEBCC8','#FFFFD8','#EAEBFF','#E0FEFE','#D3EEFF','#58949C','#DF9881','#6CB2D1','#998AD3',
          '#E494D3','#CDF1AF','#88BBE4'],
          animation: {
            startup: true,
            easing: 'linear',
            duration: 5000,
          },
        }}
        rootProps={{ 'data-testid': '3' }}
      />

      <section>
      </section>
    </main>
  );
}

export default ContributorDashboard;
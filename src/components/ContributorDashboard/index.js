import React from 'react';
import Chart from 'react-google-charts';

import * as S from './styled'

function ContributorDashboard({ contributors, chartData }) {
 
  return (
    <main>
      <S.MainHeader>
        <h1>Contributor's Dashboard</h1>
        <p>This Dashboard shows the participation percentage for all Project Contributors</p>
      </S.MainHeader>
      <S.Section>
        <S.Table>
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
        </S.Table>
        <S.Graph>
          <Chart
            width={'500px'}
            height={'500px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={
              chartData
            }
            options={{
              pieSliceText: 'none',
              pieHole: 0.5,
              legend: 'none',
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
        </S.Graph>
      </S.Section>      
    </main>
  );
}

export default ContributorDashboard;
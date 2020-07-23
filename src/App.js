import React, {useState, useEffect} from 'react';

import api from './services/api'

import ContributorForm from './components/ContributorForm';
import ContributorDashboard from './components/ContributorDashboard';

import GlobalStyles from './styles/global'

function App() {
  const [contributors, setContributors] = useState([]);
  const [chartData, setChartData] = useState([['Name', 'Participation']]);

  useEffect(() => {
    loadContributors();
  }, []);
  
  async function handleChange() {
    loadContributors();
  }

  async function mountTableData(responseData) {
    const chartDataAux = [['Name', 'Participation']]

    await responseData.map((contributor => {
      const contributorFullName = `${contributor.firstName} ${contributor.lastName}`;
      chartDataAux.push([contributorFullName, contributor.contribution]);
    }))

    setChartData(chartDataAux);
  }

  async function loadContributors() {
    const response = await api.get('/contributors');

    mountTableData(response.data);

    setContributors(response.data);
  }
    
  return (
    <div>
      <GlobalStyles />
      <ContributorForm onSubmit={handleChange}/>
      <ContributorDashboard contributors={contributors} chartData={chartData}/>
    </div>
  );
}

export default App;

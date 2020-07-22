import React, { useState } from 'react';

import api from '../../services/api'

import './styled.css';

function ContributorForm({ onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contribution, setContribution] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit();
  }

  async function handleAddContributor(e) {
    e.preventDefault();

    const response = await api.post('/addContributor', {
      firstName: firstName,
      lastName:lastName,
      contribution: contribution,
    })

    setFirstName('');
    setLastName('');
    setContribution('');

    handleSubmit(e);

    return response.data;
  }

  async function handleRemoveContributor(e) {
    e.preventDefault();

    const response = await api.delete('/removeContributor', {
      data: {
        firstName: firstName,
        lastName: lastName,
      }
    })

    setFirstName('');
    setLastName('');
    setContribution('');

    handleSubmit(e);

    return response.data;
  }

  async function handleWipe(e) {
    e.preventDefault();

    const wipeResponse = await api.get('/reset');

    handleSubmit(e);

    return wipeResponse.data;
  }

  return (
    <header>
      <nav>
        <form onSubmit={handleSubmit}>
          <input 
            required 
            placeholder="First Name" 
            type="text" 
            name="firstName" 
            id="firstName" 
            value={firstName}
            onChange={e => setFirstName((e.target.value))}
          />
          <input 
            required 
            placeholder="Last Name" 
            type="text" 
            name="lastName" 
            id="lastName" 
            value={lastName}
            onChange={e => setLastName((e.target.value))}
          />
          <input 
            required 
            placeholder="Contribution" 
            type="number"
            name="contribution"
            id="contribution"
            value={contribution}
            onChange={e => setContribution((e.target.value))}
          />
          <button 
            type="submit"
            onClick={handleAddContributor}>
            Add Contributor
          </button>
          <button 
            type="submit"
            onClick={handleRemoveContributor}>
            Remove Contributor
          </button>
          <button 
            type="submit"
            onClick={handleWipe}>
            WIPE DATA
          </button>
        </form>
      </nav>
    </header>
  );
}

export default ContributorForm;
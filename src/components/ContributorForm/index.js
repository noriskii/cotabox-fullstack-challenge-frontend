import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import api from '../../services/api'

import * as S from './styled';

function ContributorForm({ onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contribution, setContribution] = useState('');
  const [totalContribution, setTotalContribution] = useState('');

  useEffect(() => {
    updateTotalContribution();
  }, [])

  async function updateTotalContribution() {
    const tContribution = await api.get('/totalContribution');

    setTotalContribution(tContribution.data.total);
  }

  async function handleSubmit() {
    await onSubmit();

    updateTotalContribution();
  }

  async function handleAddContributor(e) {
    e.preventDefault();

    if(firstName === '' || lastName === '' || contribution === '') {
      Swal.fire({
        icon: 'error',
        title: 'You need to fill up all fields!',
      });

      return false;
    }

    if((totalContribution + parseFloat(contribution)) > 100 || (totalContribution + parseFloat(contribution)) < 0) {
      Swal.fire({
        icon: 'error',
        title: 'The contribution exceeds 100%',
      });

      return false;
    } else if(parseFloat(contribution) <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'The contribution is less then or equal 0%',
      });

      return false;
    }

    const response = await api.post('/addContributor', {
      firstName: firstName,
      lastName: lastName,
      contribution: contribution,
    });

    if(response.data.error) {
      Swal.fire({
        icon: 'warning',
        title: `${response.data.error}`,
      });

      return false;
    }

    setFirstName('');
    setLastName('');
    setContribution('');

    handleSubmit();

    Swal.fire({
      icon: 'success',
      text: 'Contributor Added',
      showConfirmButton: false,
      timer: 1000,
    });

    return response.data;
  }

  async function handleRemoveContributor(e) {
    e.preventDefault();

    if(firstName === '' || lastName === '') {
      Swal.fire({
        icon: 'error',
        text: 'You need to fill up all fields!',
      });

      return false;
    }

    const question = await Swal.fire({
      title: 'Are your sure?',
      text: `This action will remove ${firstName} ${lastName} from database!`,
      icon: 'warning',
      showCancelButton: true, 
      confirmButtonText: 'Yes!',
      confirmButtonColor: '#779ECB',   
      cancelButtonColor: '#FE6B64'    
    });

    if(question.value) {
      const response = await api.delete('/removeContributor', {
        data: {
          firstName: firstName,
          lastName: lastName,
        }
      });
  
      console.log(response);

      if(response.data.error) {
        Swal.fire({
          icon: 'warning',
          title: `${response.data.error}`,
        });
  
        return false;
      }
  
      setFirstName('');
      setLastName('');
      setContribution('');
  
      handleSubmit();

      Swal.fire({
        icon: 'success',
        text: 'Contributor Removed',
        showConfirmButton: false,
        timer: 1000,
      });
  
      return response.data;
      
    }

  }

  async function handleWipe(e) {
    e.preventDefault();

    const question = await Swal.fire({
      title: 'Are your sure?',
      text: 'This Action will WIPE all data from database!',
      icon: 'warning',
      showCancelButton: true, 
      confirmButtonText: 'Yes!',
      confirmButtonColor: '#779ECB',   
      cancelButtonColor: '#FE6B64'    
    });

    if(question.value) {
      const wipeResponse = await api.get('/reset');

      handleSubmit();

      return wipeResponse.data;
    }
    
  }

  return (
    <S.Nav>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="First Name" 
            type="text" 
            name="firstName" 
            id="firstName" 
            value={firstName}
            onChange={e => setFirstName((e.target.value))}
          />
          <input 
            placeholder="Last Name" 
            type="text" 
            name="lastName" 
            id="lastName" 
            value={lastName}
            onChange={e => setLastName((e.target.value))}
          />
          <input 
            placeholder="Contribution" 
            type="number"
            name="contribution"
            id="contribution"
            value={contribution}
            onChange={e => setContribution((e.target.value))}
          />
          <button 
            className="safe"
            type="submit"
            onClick={handleAddContributor}>
            Add Contributor
          </button>
          <button 
            className="warning"
            type="submit"
            onClick={handleRemoveContributor}>
            Remove Contributor
          </button>
          <button 
            className="danger"
            type="submit"
            onClick={handleWipe}>
            WIPE DATA
          </button>
        </form>
    </S.Nav>
  );
}

export default ContributorForm;
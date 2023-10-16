import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Grid } from './components/Grid/Grid';
import { Form } from './components/Form/Form';
import { Routes, Route } from 'react-router-dom';
import { Details } from './components/Details/Details';
import { IRepoModel } from './models/IRepoModel';
import axios from 'axios';

function App() {
  const [repositories, setRepositories] = useState([] as IRepoModel[]);

  const getRepositories = async (name: string): Promise<void> => {
    try {
      console.log('API call started');
      const response = await axios.get(`https://api.github.com/search/repositories?q=${name}`);
      console.log('API call ended with response:', response.data);

      if (response.data?.items && response.data?.items.length > 0) {
        setRepositories(response.data.items);
      } else {
        console.log('No repos found');
        setRepositories([]);
      }
    } catch (ex) {
      console.log('Exception:', ex);
      alert('Error fetching repositories. Please try again later.');
    }
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <Header />
            <div style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}><b>Search Repositories by Language, User or Name</b></div>
            <Form updateRepositories={getRepositories} />
            <h1 style={{ textAlign: 'center' }}>Github Repositories </h1>
            <Grid repos={repositories} />
          </div>
        }
      />
      <Route path='/details' element={<Details />} />
    </Routes>
  );
}

export default App;
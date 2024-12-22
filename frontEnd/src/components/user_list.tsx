import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  // Fonction pour récupérer les données depuis l'API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/get');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  // Charger les données lors du montage du composant
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Liste des utilisateurs</h2>
      {users.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr style={{ backgroundColor: '#4fb0ae', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>Technologies</th>
              <th style={{ padding: '10px' }}>Heures par semaine</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '20px' }}>{user.id}</td>
                <td style={{ padding: '10px' }}>{user.technologies.join(', ')}</td>
                <td style={{ padding: '10px' }}>{user.nb_hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>Aucun utilisateur trouvé.</p>
      )}
    </div>
  );
};

export default UsersList;

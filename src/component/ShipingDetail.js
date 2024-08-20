import React, { useEffect, useState } from 'react';

import fetchShippingDetails from './api';

const ShippingDetails = () => {
  const [shippingData, setShippingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getShippingDetails = async () => {
      try {
        const data = await fetchShippingDetails();
        setShippingData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getShippingDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Shipping Details</h1>
      <pre>{JSON.stringify(shippingData, null, 2)}</pre>
    </div>
  );
};

export default ShippingDetails;

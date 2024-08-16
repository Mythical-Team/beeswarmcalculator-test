import React, { useState } from 'react';

interface TicketPriceData {
  totalTicketsBought: number;
  priceOfNext10: number;
  priceOfNext100: number;
  priceOfNext500: number;
}

const MyComponent = () => {
  const [D3, setD3] = useState<string>('');
  const [ticketPriceData, setTicketPriceData] = useState<TicketPriceData | null>(null);

  const calculateTotalTicketsBought = (D3Value: number): number => {
    if (D3Value === 100000) {
      return 0;
    } else if (D3Value < 102000) {
      return 1;
    } else {
      const exponent = D3Value <= 1824000 ? 5 / 6 : 10 / 17;
      return Math.floor(Math.pow((D3Value / 1000 - 100), exponent)) + 1;
    }
  };

  const calculatePriceOfNext10 = (D3Value: number, totalTicketsBought: number): number => {
    // Replace with actual calculation logic
    return 0; // Placeholder
  };

  const calculatePriceOfNext100 = (D3Value: number, totalTicketsBought: number): number => {
    // Replace with actual calculation logic
    return 0; // Placeholder
  };

  const calculatePriceOfNext500 = (D3Value: number, totalTicketsBought: number): number => {
    // Replace with actual calculation logic
    return 0; // Placeholder
  };

  const handleD3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const D3Value = parseInt(event.target.value, 10);
    setD3(event.target.value);

    const totalTicketsBought = calculateTotalTicketsBought(D3Value);
    const priceOfNext10 = calculatePriceOfNext10(D3Value, totalTicketsBought);
    const priceOfNext100 = calculatePriceOfNext100(D3Value, totalTicketsBought);
    const priceOfNext500 = calculatePriceOfNext500(D3Value, totalTicketsBought);

    setTicketPriceData({ totalTicketsBought, priceOfNext10, priceOfNext100, priceOfNext500 });
  };

  return (
    <div>
      <input type="text" value={D3} onChange={handleD3Change} />
      {ticketPriceData && (
        <table>
          <tbody>
            <tr>
              <td>Total Tickets Bought:</td>
              <td>{ticketPriceData.totalTicketsBought}</td>
            </tr>
            <tr>
              <td>Price of Next 10 Tickets:</td>
              <td>{ticketPriceData.priceOfNext10}</td>
            </tr>
            <tr>
              <td>Price of Next 100 Tickets:</td>
              <td>{ticketPriceData.priceOfNext100}</td>
            </tr>
            <tr>
              <td>Price of Next 500 Tickets:</td>
              <td>{ticketPriceData.priceOfNext500}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyComponent;

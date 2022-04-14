import React from 'react'
import Table from 'rc-table';

export default function ExchangeTable({data}) {
    const column = [
        {
            title: 'Coins',
            dataIndex: '',
            key: 'name',
            align: 'start',
            // width: 100,
            className: 'text-white mb-4',
            render: (value, row, index) => <div className='flex mb-4'>{<><img src={row.image} alt='coin' className='w-8 h-8 mr-4' /> <span>{row.name}</span></>}</div>,
          },
        {
            title: '',
            dataIndex: 'symbol',
            key: 'symbol',
            width: 150,
            align: 'center',
            className: 'text-white mb-4',
            render: (value, row, index) => <span className='uppercase '>{row.symbol}</span>,
          },
        {
            title: 'Price',
            dataIndex: 'current_price',
            key: 'current_price',
            width: 150,
            align: 'center',
            className: 'text-white mb-4',
            render: (value, row, index) => <span>{'$'+ Number(row.current_price).toFixed(2)}</span>,
          },
        {
            title: '1h',
            dataIndex: 'price_change_percentage_1h_in_currency',
            key: 'price_change_percentage_1h_in_currency',
            width: 100,
            align: 'center',
            className: 'text-white mb-4',
            // onCell: (row, index) => <span>{Number(row.price_change_percentage_1h_in_currency).toFixed(2)}</span>,
            render: (value, row, index) => <span>{Number(row.price_change_percentage_1h_in_currency).toFixed(2) + '%'}</span>,
          },
        {
            title: '24h',
            dataIndex: 'price_change_percentage_24h_in_currency',
            key: 'price_change_percentage_24h_in_currency',
            width: 100,
            className: 'text-white mb-4',
            align: 'center',
            // onCell: (row, index) => <span>{Number(row.price_change_percentage_24h_in_currency).toFixed(2)}</span>,
            render: (value, row, index) => <span>{Number(row.price_change_percentage_24h_in_currency).toFixed(2)+ '%'}</span>
          },
        {
            title: '7d',
            dataIndex: '',
            key: 'price_change_percentage_7d_in_currency',
            width: 100,
            align: 'center',
            className: 'text-white mb-4',
            onCell: (row, index) => <span>{Number(row.price_change_percentage_7d_in_currency).toFixed(2)}</span>,
            render: (value, row, index) => <span>{Number(row.price_change_percentage_7d_in_currency).toFixed(2)}</span>,
          },
        ]
        console.log(data);
  return (
    <div>
      <h1 className='text-white text-3xl pb-7'>Cryptocurrency Prices by Market Cap</h1>
      <div style={{ height: 500, overflow: 'scroll' }}>
        <Table columns={column} data={data} sticky  />
      </div>
    </div>
  )
}

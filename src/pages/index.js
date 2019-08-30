import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />
    <h1>Min Portfolio</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div style={{
    marginBottom: `1.45rem`,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '50px',
    
    }}>
      <Image />
    <p>Lite information om mig själv osv osv osv osv</p>
    </div>

    <Bar data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: 'Antal projekt 2019',
          backgroundColor: '#FFB596',
          borderColor: '#B37257',
          borderWidth: 1,
          hoverBackgroundColor: '#FFC7B0',
          hoverBorderColor: '#46B3A2',
          data: [3, 4, 5, 2, 1, 0, 0, 1]
        }
      ]
    }}
    width={100}
    height={50}
    options={{ maintainAspectRatio: true }}
    />

      <Line data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'Antal projekt 2019',
            backgroundColor: 'rgb(150, 255, 159,0.2)',
            borderColor: 'rgb(120, 204, 127,1)',
            borderWidth: 3,
            pointBorderColor: 'rgb(75, 128, 80,1)',
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: 'rgb(0, 133, 10,1)',
            pointHoverBorderColor: 'rgb(227, 255, 229,1)',
            lineTension: 0.7,
            data: [3, 4, 5, 2, 1, 0, 0, 1]
          }
        ]
      }}
      width={100}
      height={50}
      options={{ maintainAspectRatio: true }}
      />
      
      <Doughnut data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [
              {
                data: [3, 4, 5, 2, 1, 0, 0, 1],
                backgroundColor: [
                  '#0C96CC',
                  '#157399',
                  '#29FFC7',
                  '#FF7669',
                  '#CC0C32',
                  '#039978',
                  '#FF40B6',
                  '#C014CC'
                  ],
                  hoverBackgroundColor: [
                    '#143DCC',
                    '#032599',
                    '#00BFFF',
                    '#FF8540',
                    '#CC4C2A',
                    '#039978',
                    '#FF4083',
                    '#CC26B2'
                  ]
              }
            ]
          }}
          width={100}
          height={50}
          margin={300}
          options={{ maintainAspectRatio: true }}
        />


  </Layout>
)

export default IndexPage

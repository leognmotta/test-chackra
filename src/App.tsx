import React from 'react'
import ThemeContainer from './containers/ThemeContainer'
import Sample from './features/Sample'
import DashboardLayout from './containers/DashboardLayout/DashboardLayout'

const App: React.FC = () => (
  <ThemeContainer>
    <DashboardLayout>
      <Sample />
    </DashboardLayout>
  </ThemeContainer>
)

export default App

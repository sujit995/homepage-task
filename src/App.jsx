import './App.css'
import Banner from './components/Banner'
import Content from './components/Content'
import Headings from './components/Headings'
import QuillAuditSection from './components/QuillAuditSection'
import WrapperContainer from './components/WrapperContainer'
import EmailSec from './components/EmailSec'
import Footer from './components/Footer'

function App() {
  return (
  <>
  <Banner />
  <WrapperContainer>
    <QuillAuditSection />
  </WrapperContainer>
  <Headings />
  <WrapperContainer>
    <Content />
  </WrapperContainer>
  <EmailSec />
  <Footer />
  </>
  )
}

export default App

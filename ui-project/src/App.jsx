import Section1 from './components/Section1.jsx/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'blue',
      tag: 'Satisfied'
    },
    
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=400&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'black',
      tag: 'Underserved'
    },
    
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=400&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'seagreen',
      tag: 'Underbanked'
    },
    
    {
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'#1e3a8a',
      tag: 'Employed'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App

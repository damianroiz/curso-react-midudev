import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <div className='App'>
        <TwitterFollowCard userName='damianroiz' name='Damian Roiz'/>
        <TwitterFollowCard userName='elonmusk' name='Elon Musk'/>
    </div>
  )
}

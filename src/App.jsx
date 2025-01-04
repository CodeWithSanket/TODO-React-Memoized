import './App.css'
import TodoDisplay from './components/TodoDisplay';

// If particular todo Item exist (key exist) then that list should not re-render

/**
 * <ul>
      <li className='m-4 p-2 font-bold border-2 text-blue-500 w-2/3 hover:bg-gray-300'>{listItem}</li>
    </ul>
 */

function App() {
  return (
    <>
      <h1 className='font-bold flex justify-center align-center m-4 text-4xl text-blue-700'>TODO APP</h1>
      <TodoDisplay />
    </>
  )
}

export default App

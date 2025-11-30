import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { History, Trash2, Calculator } from 'lucide-react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      const calculation = `${previousValue} ${operation} ${inputValue} = ${newValue}`

      setHistory(prev => [...prev, {
        id: Date.now(),
        calculation,
        timestamp: new Date()
      }])

      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clearHistory = () => {
    setHistory([])
  }

  return (
    <div className="calculator">
      <div className="calculator-header">
        <Calculator size={24} className="calculator-icon" />
        <h1 className="calculator-title">Advanced Calculator</h1>
        <button
          className="history-toggle"
          onClick={() => setShowHistory(!showHistory)}
          title="Toggle History"
        >
          <History size={20} />
        </button>
      </div>
      <div className="calculator-clock">{format(currentTime, 'PPpp')}</div>
      <div className="calculator-display">{display}</div>

      {showHistory && (
        <div className="calculator-history">
          <div className="history-header">
            <span>Calculation History</span>
            <button onClick={clearHistory} className="clear-history" title="Clear History">
              <Trash2 size={16} />
            </button>
          </div>
          <div className="history-items">
            {history.length === 0 ? (
              <div className="history-empty">No calculations yet</div>
            ) : (
              history.slice().reverse().map(item => (
                <div key={item.id} className="history-item">
                  <div className="history-calculation">{item.calculation}</div>
                  <div className="history-time">{format(item.timestamp, 'HH:mm:ss')}</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="digit-keys">
            <button onClick={() => inputDigit(0)}>0</button>
            <button onClick={inputDecimal}>.</button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
              <button key={digit} onClick={() => inputDigit(digit)}>
                {digit}
              </button>
            ))}
          </div>
          <div className="operator-keys">
            <button onClick={() => performOperation('+')}>+</button>
            <button onClick={() => performOperation('-')}>-</button>
            <button onClick={() => performOperation('*')}>×</button>
            <button onClick={() => performOperation('/')}>÷</button>
          </div>
        </div>
        <div className="function-keys">
          <button className="key-clear" onClick={clear}>AC</button>
          <button className="key-equals" onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App

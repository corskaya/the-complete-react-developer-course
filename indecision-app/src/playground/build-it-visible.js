const appRoot = document.getElementById('app')

let showDetails = false

const onShowDetails = () => {
  showDetails = !showDetails
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetails}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      {showDetails ? <p>This paragraph is now visible.</p> : null}
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()
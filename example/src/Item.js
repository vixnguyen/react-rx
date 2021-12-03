import React from 'react';


const ReduxContent = () => {
  return (
    <ul className="list-unstyled mt-3 mb-4">
      <li>
        <h5>Initialize global state</h5>
        <div>
          {/* <p>Master Store</p> */}
          <pre className="code">
            const store = createStore(reducer);
            <br />
            {
              `<Provider store={store}>...</Provider>`
            }
          </pre>
        </div>
      </li>
      <li>
        <h5>Selection</h5>
        <div>
          {/* <p>Root state</p> */}
          <pre className="code">
            useSelector()
          </pre>
        {/* </div>
        <div> */}
          <p>For child</p>
          <pre className="code">
            useSelector(() => rootState.dependence?.child)
          </pre>
        </div>
      </li>
      <li>
        <h5>Action</h5>
        <div>
          <pre className="code">
            useDispatch(data)
          </pre>
          <p>Others (Service, Util)</p>
          <pre className="code">
            N/A
          </pre>
        </div>
      </li>
    </ul>
  )
}

const ReactRxContent = () => {
  return (
    <ul className="list-unstyled mt-3 mb-4">
      <li>
        <h5>Initialize global state</h5>
        <div>
          {/* <p>Master Store</p> */}
          <pre className="code">
            new MasterStore(state)
          </pre>
        </div>
      </li>
      <li>
        <h5>Selection</h5>
        <div>
          {/* <p>Master Store</p> */}
          <pre className="code">
            useSubscriber()
          </pre>
        {/* </div>
        <div> */}
          <p>For Child</p>
          <pre className="code">
          useSubscriber('dependence.child')
          </pre>
        </div>
      </li>
      <li>
        <h5>Action</h5>
        <div>
          <pre className="code">
            useEmitter(data)
          </pre>
          <p>Others (Service, Util)</p>
          <pre className="code">
            useEmitter(data)
          </pre>
        </div>
      </li>
    </ul>
  )
}

const Item = ({ data }) => {

  const additionalClassName = data.isFeatured ? 'border-primary' : '';

  return (
    <div className="col">
      <div className={ `card mb-4 rounded-3 shadow-sm ${additionalClassName}` }>
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{data.name}</h4>
        </div>
        <div className="card-body">
          {/* <h1 className="card-title">$29<small className="text-muted fw-light">/mo</small></h1> */}
          { data.isFeatured ? <ReactRxContent /> : <ReduxContent /> }
          {/* <button className="w-100 btn btn-lg btn-light">Like</button> */}
        </div>
      </div>
    </div>
  )
}

export { Item };

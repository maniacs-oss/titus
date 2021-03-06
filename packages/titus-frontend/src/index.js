/*
  Required for `runWithAdal` below:*/

// import { runWithAdal } from 'react-adal'
// import config from 'lib/config'
// import { getAuthContext } from 'components/auth-providers/azure-ad/adalConfig'
import React from 'react'
import { render } from 'react-dom'
import 'lib/i18n'
import App from 'app'
import { register as registerServiceWorker } from 'serviceWorker'

render(<App />, document.getElementById('root'))
/*
  Replace above `render` with the below, to enabled Azure AD authentication*/
// runWithAdal(
//   getAuthContext(config),
//   () => {
//     render(<App />, document.getElementById('root'))
//   },
//   false
// )

registerServiceWorker()

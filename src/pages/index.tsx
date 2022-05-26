import React from 'react'
import reportWebVitals from '../reportWebVitals'
import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports'
import { UserContextProvider } from '../contexts/UserContext'
import Login from './auth/login';

//Check if you are in localhost or production
let isLocalhost: boolean
if (typeof window !== 'undefined') {
   isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  )
  const signInURI = awsExports.oauth.redirectSignIn.split(',')
  const signOutURI = awsExports.oauth.redirectSignOut.split(',')

  if (isLocalhost) {
    awsExports.oauth.redirectSignIn = signInURI[0]
    awsExports.oauth.redirectSignOut = signOutURI[0]
  } else if (window.location.hostname === 'main.d3qaayycjr6jup.amplifyapp.com') {
    awsExports.oauth.redirectSignIn = signInURI[1]
    awsExports.oauth.redirectSignOut = signOutURI[1]
  } else {
    console.log('This is not possible')
  }
}

Amplify.configure(awsExports)

export default function HomePage() {
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
}

reportWebVitals()

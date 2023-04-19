import './App.css';
import othent from 'othent';
import { useState } from 'react';


function App() {

  const [output, setOutput] = useState('*** Output Response ***');


  const handlePingClick = async () => {
    const ping = await othent.ping();
    const message = 'Ping button clicked: ' + JSON.stringify(ping);
    console.log(message);
    setOutput(message);
  };

  const handleLogInClick = async () => {
    const logIn = await othent.logIn()
    const message = 'Log In button clicked: ' + JSON.stringify(logIn);
    console.log(message);
    setOutput(message);
  };

  const handleLogOutClick = async () => {
    const logOut = await othent.logOut()
    const message = 'Log Out button clicked: ' + JSON.stringify(logOut);
    console.log(message);
    setOutput(message);
  };

  const handleUserDetailsClick = async () => {
    const userDetails = await othent.userDetails()
    const message = 'User Details button clicked: ' + JSON.stringify(userDetails);
    console.log(message);
    setOutput(message);
  };

  const handleReadContractClick = async () => {
    const readContract = await othent.readContract()
    const message = 'Read Contract button clicked: ' + JSON.stringify(readContract);
    console.log(message);
    setOutput(message);
  };


  const handleSignTransactionWarp = async () => {
    try {
      const response = await othent.signTransactionWarp({
        othentFunction: 'sendTransaction', 
        data: {
          toContractId: '2W9NoIJM1SuaFUaSOJsui_5lD_NvCHTjez5HKe2SjYU', 
          toContractFunction: 'createPost', 
          txnData: { blog_entry_18: 'Hello World!'} 
        }, 
        tags: [ {name: 'Test', value: 'Tag'} ]
      });
      const message = 'Sign transaction Warp button clicked: ' + JSON.stringify(response)
      setOutput(JSON.stringify(message));
      console.log(message)
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };




  const handleSendTransactionWarp = async () => {
    try {
      const signedTransaction = await othent.signTransactionWarp({
        othentFunction: 'sendTransaction', 
        data: {
          toContractId: '2W9NoIJM1SuaFUaSOJsui_5lD_NvCHTjez5HKe2SjYU', 
          toContractFunction: 'createPost', 
          txnData: { blog_entry_18: 'Hello World!'} 
        }, 
        tags: [ {name: 'Test', value: 'Tag'} ]
      });

      const response = await othent.sendTransactionWarp(signedTransaction);
      const message = 'Send transaction Warp button clicked: ' + JSON.stringify(response)
      console.log(message)
      setOutput(JSON.stringify(message));
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };




  const handleSignTransactionArweave = async (file) => {
    try {
      const response = await othent.signTransactionArweave({
        othentFunction: 'uploadData', 
        data: file,
        tags: [
          {name: 'Test', value: 'Tag'},
        ]
      });
      const message = 'Sign transaction Arweave button clicked: ' + JSON.stringify(response)
      setOutput(JSON.stringify(message));
      console.log(message)
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };
  const handleFileUploadSign = async (event) => {
    const file = event.target.files[0];
    await handleSignTransactionArweave(file);
  };
  



  const handleSendTransactionArweave = async (file) => {
    try {
      const signedTransaction = await othent.signTransactionArweave({
        othentFunction: 'uploadData', 
        data: file,
        tags: [ {name: 'Test', value: 'Tag'} ]
      });

      const response = await othent.sendTransactionArweave(signedTransaction);
      const message = 'Send transaction Arweave button clicked: ' + JSON.stringify(response)
      console.log(response)
      setOutput(message);
    } catch (error) {
      setOutput(JSON.stringify(error));
    }
  };
  const handleFileUploadSend = async (event) => {
    const file = event.target.files[0];
    await handleSendTransactionArweave(file);
  };




  const handleInitializeJWKClick = async () => {
    const JWK_public_key = `-----BEGIN PUBLIC KEY-----
    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAiSGYBVYjH2jHL2ZfI3ym
    VWq+bqkPJUP3Zh8NzYrppU77RI+W/Gucg0ZMFHelgeY4xw2axhXWGJqLLFcp1Mr7
    xAZ3wIGLfiwvJNejFOwtJFcPbPoRKkTVLP0wWAZmbeKhnu1wFhfHrn2CYZEsVn2Z
    6BBUnXSo9CIG/Db55tfdcTM6gu6i9z/D3BUOhAeBeSKwqsc+G5KFG/r43I2tvVDp
    zWK8iUqTatRix0tvX1Mf1SLlovtEVBlNglmanTZdosZQyIxCS600ylCAaogWwYmh
    15PMz4Fw/pnkXpvTIGquOfVUoILxh7vbESsNknNKcrcD7uzrPyk7mBZeTDkjS+8a
    vsTIDvibQGHznX/knAP2qiIHxjOmzp4jNRt7DphiIuXJZx5tm6kR7xOUcSiIxH4r
    0tiwWMiP95K1k7d9D8171CEn7YZmNJGYr4a+I8XML5vCq99SowksSoydi+UUN+hU
    NuiMLZKxi2EA/cI/DzX8WqzkLMHix6m8TQDRhUZ7otXiOXhloFWXV2KPiQD9Wiio
    CcGUsGzUlRXxcpite5a3zLG8PoEaLSjZcFZrEd2CvMs44aCmb4JQyP54VE76ojo+
    Opy/0Yb8RMNKoX0QvUeD7NOK+hXBwIDBgm+QrDjgHQ6+RXs72cMiHjl2aib/YRwb
    wW68pg9G6C+iSM9MMwlbBv0CAwEAAQ==
    -----END PUBLIC KEY-----`
    const initializeJWK = await othent.initializeJWK({JWK_public_key: JWK_public_key})
    const message = 'Backup Keyfile button clicked: ' + JSON.stringify(initializeJWK);
    console.log(message);
    setOutput(message);
  };



  const handleJWKBackupTxnClick = async () => {
    const JWK_signed_JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnb29nbGUtb2F1dGgyfDExMzM3ODIxNjg3NjIxNjM0NjAxNiIsImNvbnRyYWN0X2lkIjoiVGIzM0l0UGx0dE5ZdEFCak1vMDNnSzQyNXZDY1lZTVg0YzdpOFdfSTJYMCIsInRhZ3MiOlt7Im5hbWUiOiJUZXN0IiwidmFsdWUiOiJIZWxsbyBXb3JsZCJ9XSwiY29udHJhY3RfaW5wdXQiOnsiZGF0YSI6eyJ0b0NvbnRyYWN0RnVuY3Rpb24iOiJjcmVhdGVQb3N0IiwidG9Db250cmFjdElkIjoiWExfQXRrY2NVeEQ0NV9CZTc2UWVfbFN0OHE5YW1nRU85T1FuaElvLTJ4SSIsInR4bkRhdGEiOnsiYmxvZ19wb3N0XzEiOiJKV0sgVFhOISJ9fSwib3RoZW50RnVuY3Rpb24iOiJKV0tCYWNrdXBUeG4ifSwiaWF0IjoxNjgxODQyMDY2LCJleHAiOjIwNDE4NDIwNjYsImlzcyI6Imh0dHBzOi8vT3RoZW50LmlvIn0.QLnDkr4qrNhCjWt9se08IiLE0lESQaM31DJ5udXTvX7cKc6pQiVDo-5lLX9GDE3aK0Q1TGAiCm7koqViADZXrgj1SoNI6DBqo5eBoZdqdDp5-BjVcfaJHy_PM9x3gUcCwMiq271ExItLk4f4rx_Rt_xzMxHAJ6cMWe1D-eEERmrQ_itdM6Wo10u0bf0pbLIBbbe_6-2mdaCnS2nNHoCAncaOyrDy4EwaiOeZRnfeBbNNFE839ky-CgTrxft2y_nrl9B0S-bBHUpOU28Gw8YGDsRn2FfRF8ds1SxA3mDYRxBH2MgexXy0VupXnWuvEtug2HDMDWrkXhmP2JzWzckAjQAVXYSgGaQXGNtOzoodgPC1bGuGKLIuVb9M9uBkthLNSzjFQNXODaXW6wumcFKH32jiOpOY3V-eb-3sTpljDjaOuq_RZaG0auncf65aQYkYTsKB3XbgYzJ5MA8DCoZmqYtIRNvlrEMGCgxqDZagxvCM2HesI86evfVfhrIsqW7JJ0f9VGVsLV6eCIq2cIVIBXN_7JvxXitVC_Zs-5ZzhEbeZnOWhU46bMBjtVKarQdDrYdJBZdfHvB5vXQmTIi61m4pLPGFCxYx_33GNE2cZ5-ml9cy0GKYIR1VyFi_4RF7YQM_DH0WkqOm7hOOdP4FiBxrxvR4wSRvvoulcZG4kG4'
    const JWKBackupTxn = await othent.JWKBackupTxn({JWK_signed_JWT})
    const message = 'JWK backup transaction button clicked: ' + JSON.stringify(JWKBackupTxn);
    console.log(message);
    setOutput(message);
  };



  
  const handleReadCustomContract = async () => {
    const contract_id = '2W9NoIJM1SuaFUaSOJsui_5lD_NvCHTjez5HKe2SjYU'
    const readCustomContract = await othent.readCustomContract({contract_id})
    const message = 'Read custom contract button clicked: ' + JSON.stringify(readCustomContract);
    console.log(message);
    setOutput(message);
  };



  




  return (
    <div className="App">
      
      <div className='output-container'>
        <img alt='othent-logo' src='https://avatars.githubusercontent.com/u/118553412?s=200&v=4' className='img' />
        <div className="title">Othent SDK testing</div>
        <div className="title-small">Using LIVE Othent package: <a rel="noreferrer" href='https://github.com/Othent/SDK-site' target='_blank'>https://github.com/Othent/SDK-site</a></div>
        <div className="output">{output}</div>
      </div>

      <div className="buttons">
        
        <button className='button' onClick={handlePingClick}>Ping</button>
        <button className='button' onClick={handleLogInClick}>Log In</button>
        <button className='button' onClick={handleLogOutClick}>Log Out</button>
        <button className='button' onClick={handleUserDetailsClick}>User Details</button>
        <button className='button' onClick={handleReadContractClick}>Read Contract</button>
        <button className='button' onClick={handleSignTransactionWarp}>Sign Transaction Warp</button>
        <button className='button' onClick={handleSendTransactionWarp}>Send Transaction Warp</button>
        <input id="file-input" className='file-input' type="file" onChange={handleFileUploadSign} />
        <input id="file-input" className='file-input' type="file" onChange={handleFileUploadSend} />
        <button className='button' onClick={handleInitializeJWKClick}>Initialize JWK</button>
        <button className='button' onClick={handleJWKBackupTxnClick}>JWK Backup Txn</button>
        <button className='button' onClick={handleReadCustomContract}>Read Custom Contract</button>
        
      </div>

    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import jsPDF from "jspdf"
import ClientDetails from './components/ClientDetails';
import Dates from './components/Dates';
import Footer from './components/Footer';
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import Notes from './components/Notes';
import Table from './components/Table';
import TableForm from './components/TableForm';

function App() {

  const [showInvoice,setShowInvoice] = useState(false);
  const [name,setName] = useState("")
  const [address,setAddress] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [bankName,setBankName] = useState("")
  const [bankAccount,setBankAccount] = useState("")
  const [website,setWebsite] = useState("")
  const [clientName,setClientName] = useState("")
  const [clientAddress,setClientAddress] = useState("")
  const [invoiceNumber,setInvoiceNumber] = useState("")
  const [invoiceDate,setInvoiceDate] = useState("")
  const [dueDate,setDueDate] = useState("")
  const [notes,setNotes] = useState("")
  const [description,setDescription] = useState("")
  const [quantity,setQuantity] = useState("")
  const [price,setPrice] = useState("")
  const [amount,setAmount] = useState("")
  const [list,setList] = useState([])
  const [total,setTotal] = useState(0)
  

  const handlePrint = () =>{
    window.print()
  }
  const generatePDF = () =>{
    var doc = new jsPDF("p","pt","a4");
    doc.html(document.querySelector("#pdfpage"),{
      callback:function(pdf){
        pdf.save("invoicer.pdf");
      }
    });
};
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl  bg-white rounded shadow">
        {showInvoice ?
        <div id="pdfpage">
          <Header handlePrint={handlePrint} generatePDF={generatePDF}/>
  
          <MainDetails name={name} address={address}/>

          <ClientDetails clientName={clientName} clientAddress={clientAddress} />

          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
  
          <Table 
          description={description}
          quantity={quantity}
          price={price}
          amount={amount}
          list={list}
          setList={setList}
          total={total}
          setTotal={setTotal}
          />
          <Notes notes={notes}/>
          <Footer name={name} address={address} email={email} website={website}/>
          <button
          onClick={()=> setShowInvoice(false)}
          className="mt-5 bg-blue-500 py-2 px-8 rounded shadow text-white
              font-bold border-2 border-blue-500 
              hover:bg-transparent hover:text-blue-500
              transition-all duration-300" >
        Edit Info</button>
        </div> :(
          <>
          {/*name,address,email,phone,bankname,bankaccount number,website,
          clientname,client address,invoice number,invoice date,due date,notes*/}

            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your Full Name</label>
                  <input
                  type="text" 
                  name="text"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="off"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Enter Your Address</label>
                  <input
                  type="text" 
                  name="address"
                  id="address"
                  placeholder="Enter Your Address"
                  autoComplete="off"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10">
                <div  className="flex flex-col">
                  <label htmlFor="email">Enter Your Email</label>
                  <input
                  type="email" 
                  name="email"
                  id="email"
                  placeholder="Enter Your email"
                  autoComplete="off"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div  className="flex flex-col">
                  <label htmlFor="website">Enter Your Website</label>
                  <input
                  type="url" 
                  name="website"
                  id="website"
                  placeholder="Enter Your website"
                  autoComplete="off"
                  value={website}
                  onChange={(e)=>setWebsite(e.target.value)}
                  />
                </div>
                <div  className="flex flex-col">
                  <label htmlFor="phone">Enter Your phone</label>
                  <input
                  type="text" 
                  name="phone"
                  id="phone"
                  placeholder="Enter Your phone"
                  autoComplete="off"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter Your Bank Name</label>
                  <input
                  type="text" 
                  name="bankName"
                  id="bankName"
                  placeholder="Enter Your bankName"
                  autoComplete="off"
                  value={bankName}
                  onChange={(e)=>setBankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankAccount">Enter Your bankAccount</label>
                  <input
                  type="text" 
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Enter Your bankAccount"
                  autoComplete="off"
                  value={bankAccount}
                  onChange={(e)=>setBankAccount(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10 md:mt-20" >
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter Your clientName</label>
                  <input
                  type="text" 
                  name="clientName"
                  id="clientName"
                  placeholder="Enter Your clientName"
                  autoComplete="off"
                  value={clientName}
                  onChange={(e)=>setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter Your clientAddress</label>
                  <input
                  type="text" 
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Enter Your clientAddress"
                  autoComplete="off"
                  value={clientAddress}
                  onChange={(e)=>setClientAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Enter Your invoiceNumber</label>
                  <input
                  type="text" 
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Enter Your invoiceNumber"
                  autoComplete="off"
                  value={invoiceNumber}
                  onChange={(e)=>setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Enter Your invoiceDate</label>
                  <input
                  type="date" 
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Enter Your invoiceDate"
                  autoComplete="off"
                  value={invoiceDate}
                  onChange={(e)=>setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Enter Your dueDate</label>
                  <input
                  type="date" 
                  name="dueDate"
                  id="dueDate"
                  placeholder="Enter Your dueDate"
                  autoComplete="off"
                  value={dueDate}
                  onChange={(e)=>setDueDate(e.target.value)}
                  />
                </div>
              </article>
              {/* This is Table Form */}
              <article>
                <TableForm 
                  description={description} 
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount} 
                  list={list}
                  setList={setList }
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              <label htmlFor="notes">Additional Notes</label>
              <textarea
               name="notes" 
               id="notes" 
               cols="30" 
               rows="10" 
               placeholder="Additional Notes"
               value={notes} 
               onChange={(e)=>setNotes(e.target.value)}></textarea>
              
              <button onClick={()=>setShowInvoice(true)}
              className="bg-blue-500 py-2 px-8 rounded shadow text-white
              font-bold border-2 border-blue-500 
              hover:bg-transparent hover:text-blue-500
              transition-all duration-300">
              Preview Invoice</button>
            </div>
          </>

        ) }
          
      
      </main>
    </>
  );
}

export default App;

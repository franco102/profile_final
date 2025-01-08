export default function ErrorMessage({children} : {children: React.ReactNode}) {
    return (
      <div 
      className="text-center my-4 bg-red-100 text-red-600 font-bold p-3 uppercase text-sm"
      style={{color: '#dc2626', backgroundColor: '#fee2e2',textAlign: 'center',fontWeight: 700,padding: '0.75rem',marginBottom: '2rem' ,marginTop: '0rem' }}
      >
          {children}
      </div>
    )
  }
  
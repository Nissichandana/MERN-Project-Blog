const React = require('react');
export default function update({myComments}) {

    const styles = {
        HeroNav: {
          height: '500px',
          width: 'auto',
          backgroundImage: 'url("https://images.unsplash.com/photo-1599421498111-ad70bebb536f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        },
        HeaderNav: {
          display: 'flex',
          flexDirection: 'row-reverse',
        },
        Navul: {
          height: '30%',
          width: '100%',
          padding: '50px',
          display: 'flex',
          justifyContent: 'space-around',
          listStyle: 'none',
          fontSize:'xx-large',
          fontFamily:'Arial',
          color:'white',
        },
        sectionContainer: {
          marginTop: '50px',
        },
        section: {
          marginTop: '1px',
          height: 'auto',
          border: '2px solid red',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '80px',
          boxSizing: 'border-box',
        },
        textContent: {
          flex: '1',
          padding: '0 20px',
        },
        sectionContainerintro: {
          flex: '1',
          paddingRight: '1px',
        },
        imageAndButtonContainer: {
          position: 'relative',
          padding: '20px',
        },
        myButton: {
          position: 'absolute',
          top: '-10px',
          right: '-30px',
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '30px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        },
        subContainerDiv: {
          display: 'grid',
          backgroundColor: '#390c0c',
          color: 'white',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'auto',
          gap: '5px',
          margin: '10px 0',
        },
        subContainerCard: {
          maxWidth: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        subContainerImage: {
          maxWidth: 'auto',
          height: '100px',
          paddingTop: '20px',
          borderRadius: '50px',
          marginBottom: '20px',
        },
        subContainerParagraph: {
          textAlign: 'center',
          margin: '0',
          padding: '10px',
          fontFamily: 'OldStandardTT, sans-serif',
          fontFize: 'small',
        },
        subContainerButton: {
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '10px 10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        },
        subconched: {
          color: '#fff',
          textAlign: 'center',
          backgroundColor: '#390c0c',
          padding: '20px',
        },
        Footer: {
          backgroundColor: '#390c0c',
          color: '#fff',
          padding: '20px',
        },
        FooterA: {
          color: 'red',
          textDecoration: 'none',
          ':hover': {
            color: '#fff',
            textDecoration: 'underline',
          },
        },
    
        form:{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'coral',
            padding:'40px',
            border:'2px white solid',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
        
        }
      };
      
      
    
      const mediaQuerystylesMobile = {
        '@media only screen and (max-width: 768px)': {
          HeroNav: {
            height: '200px',
          },
          Navul: {
            padding: '10px',
            display: 'flex',
          },
          section: {
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            alignItems: 'center', // Align items to the center in column layout
          },
          myButton: {
            top: '10px', // Adjusted top value
            right: '0', // Adjusted right value
            padding: '10px',
            position: 'static', // Adjusted position to static
          },
        },
      };

return (
<div>

    <header style={{...styles.HeroNav,...mediaQuerystylesMobile.HeroNav}} className="hero-nav">
      <nav style={styles.HeaderNav}>
        <ul style={{...styles.Navul,...mediaQuerystylesMobile.Navul}}>
          <li><img src="" alt="none" /> dericol flowers</li>
          <li>about us</li>
          <li>what we stand for</li>
          <li style={{color:'black'}}>Drop a comment</li>
        </ul>
      </nav>
    </header>
    
  <div style={{...styles.sectionContainer}}>
    <section style={{...styles.section,...mediaQuerystylesMobile.section}} >
    <section>
        <div>
        <div>
<h1>Contributions</h1>
<ul>
  {myComments.map((comment) => (
    <li key={comment._id}>
      <div>
       <p>{comment.opinion}</p> 
      <button> <a style={{textDecoration:'none'}}  href={`/Nissi/edit/${comment._id}`}>update</a></button>
     <button> <a style={{textDecoration:'none'}}  href={`/Nissi/delete/${comment._id}`}>delete</a></button>
      </div>
    </li>
    
  ))}
</ul>
        </div>
         </div>
         </section>
         
         </section>

         </div>
  </div>
)
}
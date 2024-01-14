const React =require('react');

// Define your styled components with media queries

export default function BlogHomePage() {
const styles = {
HeroNav: {
height: '500px',
width: 'auto',
backgroundImage: 'url("https://images.pexels.com/photos/46231/water-lilies-pink-water-lake-46231.jpeg?auto=compress&cs=tinysrgb&w=600")',
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
},
sectionContainer: {
marginTop: '50px',
},

section: {
marginTop: '1px',
height: 'auto',
border: '2px solid red',
display: 'flex',
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
myImage: {
textAlign: 'center',
},
Image: {
maxWidth: '500px',
height: 'auto',
borderRadius: '8px',
marginBottom: '20px',
boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
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
                    Image: {
                    height: 'auto',
                    width: '10%', // Set the width to 100% for full responsiveness
                    marginBottom: '40px', // Fix the typo here
                    },
                    imageAndButtonContainer: {
                    padding: '5px',
                    display: 'flex',
                    // Align items to the center in column layout
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
                    <li><a href='/'><img src="" alt="none" /> dericol flowers</a></li>
                    <li><a href='/about'>About Us</a></li>
                    <li><a href='/signup'>Sign Up</a></li>
                    <li><a href='/comment'>Drop a comment</a></li>
                    </ul>
                    </nav>
                    </header>
                    <div style={{...styles.sectionContainer}}>
<section style={{...styles.section,...mediaQuerystylesMobile.section}} >
<div style={{...styles.textContent,...styles.sectionContainerintro}}>
<h2> Have your own flower garden</h2>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!

    </p>
</div>
<div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
    <div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
        <img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="2"/>
        
         <button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}> view post</button>
     </div>
     </div>
</section>
<div style={{...styles.sectionContainer}}>
<section style={{...styles.section,...mediaQuerystylesMobile.section}} >
<div style={{...styles.textContent,...styles.sectionContainerintro}}>
<h2> Places you want to visit</h2>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi  quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!

    </p>
</div>
<div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
    <div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
        <img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="2"/>
        
         <button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}> view post</button>
     </div>
</div>
</section>
<div style={{...styles.sectionContainer}}>
<section style={{...styles.section,...mediaQuerystylesMobile.section}} >
<div style={{...styles.textContent,...styles.sectionContainerintro}}>
<h2> Have you tried these recipies?</h2>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates  esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
tempora, assumenda dolorum explicabo totam optio asperiores dolorem voluptates
esse ducimus quos possimus qui ullam, voluptatum eligendi
quo quia? Consectetur, obcaecati!

    </p>
</div> 
<div style={{...styles.imageAndButtonContainer,...mediaQuerystylesMobile.imageAndButtonContainer}}>
<div style={{ ...styles.myImage,...mediaQuerystylesMobile.Image}}>
<img style={{...styles.Image ,...mediaQuerystylesMobile.Image}} src="https://media.istockphoto.com/id/628097352/photo/fresh-vegetables.jpg?b=1&s=612x612&w=0&k=20&c=AKU-JuegVpLJuK5KTHkuI41op3bO-Q1cRtw2I3D0wjA=" alt="2"/>
         <button style={{...styles.myButton,...mediaQuerystylesMobile.myButton}}> view post</button>
     </div>
</div>
</section>
</div>
<div style={{...styles.Footer}}>
<h2 style={{...styles.subconched}}>your home grown flowers</h2>
<div style={{...styles.subContainerDiv}}>
<div style={{...styles.subContainerCard}}>
<img style={{...styles.subContainerImage}} src="https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=600" alt="1"/>
<p style={{...styles.subContainerParagraph}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat nobis ea maiores repellat quos aperiam quo dignissimos veniam vero iste debitis magni fuga, expedita obcaecati corporis adipisci. Asperiores, id.</p>
<button style={{...styles.subContainerButton}}> View post </button>
</div>
<div style={{...styles.subContainerCard}}>
<img style={{...styles.subContainerImage}} src="https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&w=600" alt="1"/>
<p style={{...styles.subContainerParagraph}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat nobis ea maiores repellat quos aperiam quo dignissimos veniam vero iste debitis magni fuga, expedita obcaecati corporis adipisci. Asperiores, id.</p>
<button style={{...styles.subContainerButton}}> View post </button>
</div>
   <div style={{...styles.subContainerCard}}>
    <img style={{...styles.subContainerImage}} src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=600" alt="1"/>
    <p style={{...styles.subContainerParagraph}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat nobis ea maiores repellat quos aperiam quo dignissimos veniam vero iste debitis magni fuga, expedita obcaecati corporis a
        dipisci. Asperiores, id.
    </p>
    <button style={{...styles.subContainerButton}}> View post </button>
</div>
</div>

</div>
<div style={{...styles.Footer}}>
<h2 style={{...styles.subconched,...styles.Footer}}>your home grown flowers</h2>
<div style={{...styles.subContainerDiv,...styles.Footer}}>
<div style={{...styles.subContainerCard}}>
<img style={{...styles.subContainerImage}} src="https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=600" alt="1"/>
<p style={{...styles.subContainerParagraph}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat nobis ea maiores repellat quos aperiam quo dignissimos veniam vero iste debitis magni fuga, expedita obcaecati corporis adipisci. Asperiores, id.</p>
<button style={{...styles.subContainerButton}}> View post </button>
</div>
<div style={{...styles.subContainerCard}}>
<img style={{...styles.subContainerImage}} src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600" alt="1"/>
<p style={{...styles.subContainerParagraph}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat nobis ea maiores repellat quos aperiam quo dignissimos veniam vero iste debitis magni fuga, expedita obcaecati corporis adipisci. Asperiores, id.</p>
<button style={{...styles.subContainerButton}}> View post </button>
</div>
<div style={{...styles.subContainerCard}}>
<img style={{...styles.subContainerImage}} src="https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=600" alt="1"/>
<p style={{...styles.subContainerParagraph}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat nobis ea maiores repellat quos aperiam quo dignissimos veniam vero iste debitis magni fuga, expedita obcaecati corporis a
dipisci. Asperiores, id.
</p>
<button style={{...styles.subContainerButton}}> View post </button>
</div>
</div>
</div>
<div >
<footer style={{...styles.Footer}}>
<p style={{...styles.FooterCopyRight}}>&copy; 2024 Your Company</p>
<a style={{...styles.FooterA}} href="#" className="icon">Icon 1</a>
<a style={{...styles.Footer}}href="#" className="icon">Icon 2</a> </footer> </div>
</div>
</div>
</div>
);

}

const React = require("react");

export default function update({ myOutput, messages }) {
  const styles = {
    HeroNav: {
      height: "500px",
      width: "auto",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1599421498111-ad70bebb536f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    HeaderNav: {
      display: "flex",
      flexDirection: "row-reverse",
    },
    Navul: {
      height: "30%",
      width: "100%",
      padding: "50px",
      display: "flex",
      justifyContent: "space-around",
      listStyle: "none",
      fontSize: "xx-large",
      fontFamily: "Arial",
      color: "white",
    },

    sectionContainer: {
      marginTop: "50px",
    },
    section: {
      marginTop: "1px",
      height: "auto",
      border: "2px solid red",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "80px",
      boxSizing: "border-box",
    },
    textContent: {
      flex: "1",
      padding: "0 20px",
    },
    sectionContainerintro: {
      flex: "1",
      paddingRight: "1px",
    },
    imageAndButtonContainer: {
      position: "relative",
      padding: "20px",
    },
    myButton: {
      position: "absolute",
      top: "-10px",
      right: "-30px",
      backgroundColor: "#3498db",
      color: "#fff",
      padding: "30px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    subContainerDiv: {
      display: "grid",
      backgroundColor: "#390c0c",
      color: "white",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "auto",
      gap: "5px",
      margin: "10px 0",
    },
    subContainerCard: {
      maxWidth: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    subContainerImage: {
      maxWidth: "auto",
      height: "100px",
      paddingTop: "20px",
      borderRadius: "50px",
      marginBottom: "20px",
    },
    subContainerParagraph: {
      textAlign: "center",
      margin: "0",
      padding: "10px",
      fontFamily: "OldStandardTT, sans-serif",
      fontFize: "small",
    },
    subContainerButton: {
      backgroundColor: "#3498db",
      color: "#fff",
      padding: "10px 10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    subconched: {
      color: "#fff",
      textAlign: "center",
      backgroundColor: "#390c0c",
      padding: "20px",
    },
    Footer: {
      backgroundColor: "#390c0c",
      color: "#fff",
      padding: "20px",
    },
    FooterA: {
      color: "red",
      textDecoration: "none",
      ":hover": {
        color: "#fff",
        textDecoration: "underline",
      },
    },

    form: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "coral",
      padding: "40px",
      border: "2px white solid",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
    },
  };
  const mediaQuerystylesMobile = {
    "@media only screen and (max-width: 768px)": {
      HeroNav: {
        height: "200px",
      },
      Navul: {
        padding: "10px",
        display: "flex",
      },
      section: {
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        alignItems: "center", // Align items to the center in column layout
      },
      myButton: {
        top: "10px", // Adjusted top value
        right: "0", // Adjusted right value
        padding: "10px",
        position: "static", // Adjusted position to static
      },
    },
  };
  return (
    <div>
      <header
        style={{ ...styles.HeroNav, ...mediaQuerystylesMobile.HeroNav }}
        className="hero-nav"
      >
        <nav style={styles.HeaderNav}>
          <ul style={{ ...styles.Navul, ...mediaQuerystylesMobile.Navul }}>
            <li>
              <img src="" alt="none" /> dericol flowers
            </li>
            <li>about us</li>
            <li>what we stand for</li>
            <li style={{ color: "black" }}>Drop a comment</li>
          </ul>
        </nav>
      </header>
      <div style={{ ...styles.sectionContainer }}>
        <section
          style={{ ...styles.section, ...mediaQuerystylesMobile.section }}
        >
          <section>
            <div>
              <h2>Your comments are important to us!</h2>
              <h3 style={{ color: messages ? "green" : "red" }}>
                {messages || "Cannot send an empty message"}
              </h3>
              <div class="form-container">
                <form
                  style={{ ...styles.form }}
                  action={`/Nissi/update/${myOutput.id}`}
                  method="post"
                >
                  <label htmlfor="name">name:</label>
                  <input type="text" name="name" defaultValue={myOutput.name} />
                  <label htmlfor="email">email:</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={myOutput.email}
                  />
                  <textarea
                    name="opinion"
                    defaultValue={myOutput.opinion}
                    id=""
                    cols="100"
                    rows="10"
                  ></textarea>
                  <button type="submit">
                    <a style={{ textDecoration: "none" }} href="">
                      {" "}
                      Update
                    </a>{" "}
                  </button>{" "}
                  {/* the id of the user must be present */}
                </form>
              </div>
            </div>
          </section>
        </section>
      </div>
      <div style={{ ...styles.Footer }}>
        <h2 style={{ ...styles.subconched }}>your home grown flowers</h2>
        <div style={{ ...styles.subContainerDiv }}>
          <div style={{ ...styles.subContainerCard }}>
            <img
              style={{ ...styles.subContainerImage }}
              src="https://images.unsplash.com/photo-1599421498111-ad70bebb536f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="1"
            />
            <p style={{ ...styles.subContainerParagraph }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              placeat nobis ea maiores repellat quos aperiam quo dignissimos
              veniam vero iste debitis magni fuga, expedita obcaecati corporis
              adipisci. Asperiores, id.
            </p>
            <button style={{ ...styles.subContainerButton }}>
              {" "}
              View post{" "}
            </button>
          </div>
          <div style={{ ...styles.subContainerCard }}>
            <img
              style={{ ...styles.subContainerImage }}
              src="https://images.unsplash.com/photo-1599421498111-ad70bebb536f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="1"
            />
            <p style={{ ...styles.subContainerParagraph }}>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              placeat nobis ea maiores repellat quos aperiam quo dignissimos
              veniam vero iste debitis magni fuga, expedita obcaecati corporis
              adipisci. Asperiores, id.
            </p>
            <a href="/">
              {" "}
              <button style={{ ...styles.subContainerButton }}>View </button>
            </a>
          </div>
          <div style={{ ...styles.subContainerCard }}>
            <img
              style={{ ...styles.subContainerImage }}
              src="https://images.unsplash.com/photo-1599421498111-ad70bebb536f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="1"
            />
            <p style={{ ...styles.subContainerParagraph }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              placeat nobis ea maiores repellat quos aperiam quo dignissimos
              veniam vero iste debitis magni fuga, expedita obcaecati corporis a
              dipisci. Asperiores, id.
            </p>
            <a href="/">
              {" "}
              <button style={{ ...styles.subContainerButton }}>
                View post
              </button>
            </a>
          </div>
        </div>
      </div>

      <div style={{ ...styles.Footer }}>
        <h2 style={{ ...styles.subconched, ...styles.Footer }}>
          your home grown flowers
        </h2>
        <div style={{ ...styles.subContainerDiv, ...styles.Footer }}>
          <div style={{ ...styles.subContainerCard }}>
            <img
              style={{ ...styles.subContainerImage }}
              src="https://images.unsplash.com/photo-1599421498111-ad70bebb536f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="1"
            />
            <p style={{ ...styles.subContainerParagraph }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              placeat nobis ea maiores repellat quos aperiam quo dignissimos
              veniam vero iste debitis magni fuga, expedita obcaecati corporis
              adipisci. Asperiores, id.
            </p>
            <button style={{ ...styles.subContainerButton }}>
              {" "}
              View post{" "}
            </button>
          </div>
          <div style={{ ...styles.subContainerCard }}>
            <img
              style={{ ...styles.subContainerImage }}
              src="https://images.unsplash.com/photo-1599421498111-ad70bebb536f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="1"
            />
            <p style={{ ...styles.subContainerParagraph }}>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              placeat nobis ea maiores repellat quos aperiam quo dignissimos
              veniam vero iste debitis magni fuga, expedita obcaecati corporis
              adipisci. Asperiores, id.
            </p>
            <button style={{ ...styles.subContainerButton }}>
              {" "}
              View post{" "}
            </button>
          </div>
          <div style={{ ...styles.subContainerCard }}>
            <img
              style={{ ...styles.subContainerImage }}
              src="https://images.unsplash.com/photo-1599421498111-ad70bebb536f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="1"
            />
            <p style={{ ...styles.subContainerParagraph }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              placeat nobis ea maiores repellat quos aperiam quo dignissimos
              veniam vero iste debitis magni fuga, expedita obcaecati corporis a
              dipisci. Asperiores, id.
            </p>
            <button style={{ ...styles.subContainerButton }}>
              {" "}
              View post{" "}
            </button>
          </div>
        </div>
      </div>

      <div>
        <footer style={{ ...styles.Footer }}>
          <p style={{ ...styles.FooterCopyRight }}>&copy; 2024 Your Company</p>
          <a style={{ ...styles.FooterA }} href="#" className="icon">
            Icon 1
          </a>
          <a style={{ ...styles.Footer }} href="#" className="icon">
            Icon 2
          </a>
        </footer>
      </div>
    </div>
  );
}

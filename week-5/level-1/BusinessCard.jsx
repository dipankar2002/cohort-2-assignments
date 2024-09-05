
const details = {
  name: "Dipankar",
  description: "Lorem ipsum dolor sit, amet consectetur",
  intrests: ["Coding", "Gaming", "Music"],
  linkedInLink: "https://www.linkedin.com/in/dipankar-ganguly-15d11m2002y/",
  twitterLink: "https://x.com/dipganguly_15",
};

export default function App() {
  return (
    <div className="App">
      <BusinessCard
        name={details.name}
        desc={details.description}
        intrests={details.intrests}
        linkedIn={details.linkedInLink}
        twitter={details.twitterLink}
      />
    </div>
  );
}

function BusinessCard(props) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.desc}>{props.desc}</p>
      <h3 style={styles.listHeading}>Intrest</h3>
      <ul style={styles.list}>
        {props.intrests.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
      <div>
        <a href={props.linkedIn} target="_blank">
          <button style={styles.socialBtn}>LinkedIn</button>
        </a>
        <a href={props.twitter} target="_blank">
          <button style={styles.socialBtn}>Twitter</button>
        </a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    // height: "100px", #e3e3e3
    backgroundColor: "#f8f9fa",
    width: "600px",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  name: {
    margin: 0,
  },
  desc: {
    color: "gray",
  },
  listHeading: {
    marginBottom: 0,
  },
  list: {
    color: "gray",
    padding: 0,
    marginTop: "10px",
    marginBottom: "10px",
    listStyleType: "none",
  },
  socialBtn: {
    color: "white",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    margin: "10px",
    padding: "7px 14px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

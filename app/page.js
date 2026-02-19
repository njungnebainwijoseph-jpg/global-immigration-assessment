export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: "40px",
      backgroundColor: "#f4f8fb",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#0a3d62" }}>
        Global Immigration and Consultancy
      </h1>

      <h2>Canada Immigration Eligibility Assessment</h2>

      <p>
        Welcome to our professional self-assessment platform.
        Check if you qualify for:
      </p>

      <ul>
        <li>Express Entry (Skilled Workers)</li>
        <li>Study Visa Applicants</li>
      </ul>

      <div style={{
        marginTop: "30px",
        padding: "20px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <h3>Start Your Free Assessment</h3>
        <p>
          This tool will calculate your eligibility based on:
        </p>
        <ul>
          <li>Age</li>
          <li>Education</li>
          <p>Language Test (IELTS)</p>
          <li>Work Experience</li>
          <li>Marital Status</li>
        </ul>

        <button style={{
          backgroundColor: "#0a3d62",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Begin Assessment
        </button>
      </div>

      <p style={{ marginTop: "40px" }}>
        Contact us on WhatsApp: 673837259 <br/>
        Email: njungnebainwijoseph@gmail.com
      </p>
    </main>
  );
}

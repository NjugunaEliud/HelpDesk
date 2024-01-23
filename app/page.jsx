import Link from 'next/link'

export default function Home() {
  return (
    <main>
    <h2>Dashboard</h2>
    <p>AquaEmp Help Desk is a robust support and ticketing system designed to streamline customer service operations for organizations. With an intuitive interface and powerful features, AquaEmp Help Desk enables efficient management of customer inquiries, incidents, and service requests. It incorporates a centralized ticketing system that tracks and organizes customer queries from various channels, including email and web forms. The platform offers automation and workflows to expedite routine tasks, a knowledge base for self-service options, and collaboration tools for effective communication among support teams.</p>

    <div className="flex justify-center my-8">
      <Link href="/tickets">
        <button className="btn-primary">View Tickets</button>
      </Link>
    </div>

    <h2>Company Updates</h2>

    <div className="card">
      <h3>New member of the web dev team...</h3>
      <p>Exciting news! We've welcomed [New Member's Name] to our web development team. Bringing expertise in [mention relevant skills], [he/she/they] join us with a passion for innovation and collaboration. As we embark on new web projects, [New Member's Name] is a valuable addition, poised to contribute to our team's success. Welcome aboard!</p>
    </div>
    <div className="card">
      <h3>New website live!</h3>
      <p>Thrilled to announce our new website is live! 🚀 Explore an enhanced user experience, sleek design, and intuitive navigation. Discover our latest offerings, stay updated on news, and connect with us effortlessly. Dive into a seamless online journey as we bring you a refreshed digital presence. Visit now!





</p>
    </div>
  </main>
  )
}

import Navbar from "@/components/Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    { name: "Sakshi Kiran Darkunde", role: "", image: "/placeholder.svg?height=100&width=100" },
    { name: "Dashmeet Singh Suri", role: "", image: "/placeholder.svg?height=100&width=100" },
    { name: "Fahad Hajji Devnikar", role: "", image: "/placeholder.svg?height=100&width=100" },
    { name: "Swapnil Devkar", role: "", image: "/placeholder.svg?height=100&width=100" },
    { name: "Omkar Deshmukh", role: "", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen mt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">About Our Team</h1>

          <p className="text-lg text-center mb-12">
            At PCCoE, we are dedicated to bringing hope and support to those who need it the most—elderly residents in old age homes and orphaned students.
            Our mission is to connect them with government schemes that provide care, security, and opportunities for a brighter future. By simplifying access to these benefits, we aim to ensure that no one feels forgotten or left behind.
            Together, let’s create a world where every life is valued, cherished, and uplifted.
          </p>

          <Card className="mb-12 bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Our Mentor</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/Abhijeet Kore.jpg" alt="Mentor" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold">Dr. Abhijeet Narayan Kore</h2>
                <p className="text-gray-300">
                  With over 15 years of experience in education and research,
                  Dr. Abhijeet Narayan Kore guides our team with expertise and passion.
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-center mb-8">Team Members</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 text-white">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="h-28 w-28 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


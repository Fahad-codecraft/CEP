'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Footer from './Footer'

// Define structure for each scheme
type Scheme = {
	id: number
	name: string
	description: string
	paperwork: string[]
	documents: string[]
	link?: string // Optional link for additional resources
	type: "OldAge" | "Orphan" // Add scheme type
}

// Sample data for government schemes
const schemes: Scheme[] = [
	{
		id: 1,
		name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
		description: "Monthly pension for elderly citizens below the poverty line.",
		paperwork: ["Application form", "Bank account details"],
		documents: ["Aadhaar card", "Age proof", "BPL certificate"],
		link: "https://www.myscheme.gov.in/schemes/nsap-ignoaps",
		type: "OldAge",
	},
	{
		id: 6,
		name: "National Programme for Health Care of the Elderly (NPHCE)",
		description: "Provides comprehensive health care services tailored for senior citizens.",
		paperwork: ["Application form", "Health records"],
		documents: ["Aadhaar card", "Age proof"],
		link: "https://mohfw.gov.in/major-programmes/Non-Communicable-Diseases/Non-Communicable-Diseases-1",
		type: "OldAge",
	},
	{
		id: 7,
		name: "Senior Citizens Savings Scheme (SCSS)",
		description: "A government-backed savings scheme offering attractive interest rates for seniors.",
		paperwork: ["Account opening form"],
		documents: ["Aadhaar card", "Age proof", "Bank account details"],
		link: "https://www.nsiindia.gov.in/(S(p4hehzm01vhsjhzbcz2rvv55))/InternalPage.aspx?Id_Pk=62",
		type: "OldAge",
	},
	{
		id: 8,
		name: "Atal Vayo Abhyudaya Yojana (AVYAY)",
		description: "A comprehensive scheme aimed at improving the quality of life for the elderly.",
		paperwork: ["Project proposal for organizations"],
		documents: ["Registration certificate", "Financial statements"],
		link: "https://socialjustice.gov.in/schemes/43",
		type: "OldAge",
	},
	{
		id: 2,
		name: "Pradhan Mantri Vaya Vandana Yojana",
		description: "Pension scheme for senior citizens providing assured returns on deposits.",
		paperwork: ["Application form", "Premium payment receipt"],
		documents: ["Aadhaar card", "PAN card", "Age proof"],
		link: "https://web.umang.gov.in/landing/department/pmvvy.html",
		type: "OldAge",
	},
	{
		id: 3,
		name: "Rashtriya Vayoshri Yojana",
		description: "Provides physical aids and assisted living devices to senior citizens.",
		paperwork: ["Application form", "Medical certificate"],
		documents: ["Aadhaar card", "Age proof", "BPL certificate"],
		link: "https://www.india.gov.in/spotlight/rashtriya-vayoshri-yojana",
		type: "OldAge",
	},
	{
		id: 4,
		name: "Varishtha Pension Bima Yojana",
		description: "A pension scheme providing financial security to senior citizens.",
		paperwork: ["Application form", "Premium payment receipt"],
		documents: ["Aadhaar card", "Age proof"],
		link: "https://web.umang.gov.in/landing/department/vpby.html",
		type: "OldAge",
	},
	{
		id: 5,
		name: "Integrated Programme for Senior Citizens (IPSrC)",
		description: "Supports the establishment and maintenance of old age homes and care facilities.",
		paperwork: ["Project proposal", "Utilization certificate"],
		documents: ["Registration certificate of the organization", "Financial statements"],
		link: "https://socialjustice.gov.in/writereaddata/UploadFile/IPSrC%20English%20version.pdf",
		type: "OldAge",
	},

	{
		id: 11,
		name: "Central Adoption Resource Authority (CARA)",
		description: "Facilitates adoption processes for orphans and abandoned children.",
		paperwork: ["Adoption application form"],
		documents: ["Identity proof", "Income proof", "Medical certificate"],
		link: "https://cara.wcd.gov.in/",
		type: "Orphan",
	},
	{
		id: 12,
		name: "Integrated Child Protection Scheme (ICPS)",
		description: "Provides support services for children in need of care and protection, including orphans.",
		paperwork: ["Application form for assistance"],
		documents: ["Identity proof", "Proof of orphan status"],
		link: "https://wcdhry.gov.in/schemes-for-children/icps/#:~:text=The%20Integrated%20Child%20Protection%20Scheme,providing%20facilities%20to%20the%20juveniles.",
		type: "Orphan",
	},
	{
		id: 13,
		name: "Anju Kanya Scheme",
		description: "Offers financial assistance to orphaned girls for education and marriage.",
		paperwork: ["Application form"],
		documents: ["Aadhaar card", "Proof of orphan status", "Educational documents"],
		link: "https://www.myscheme.gov.in/schemes/kvsy",
		type: "Orphan",
	},
	{
		id: 14,
		name: "Sponsorship Scheme for Education of Orphans",
		description: "Provides financial support for the education of orphan children.",
		paperwork: ["Sponsorship application form"],
		documents: ["Identity proof", "School admission proof"],
		link: "https://pmcaresforchildren.in/",
		type: "Orphan",
	},
	{
		id: 15,
		name: "National Family Benefit Scheme (NFBS)",
		description: "Provides financial assistance to families in case of the death of the breadwinner, benefiting orphans indirectly.",
		paperwork: ["Application form for benefits"],
		documents: ["Death certificate", "BPL certificate"],
		link: "https://pmcaresforchildren.in/",
		type: "Orphan",
	},
	{
		id: 16,
		name: "Child Welfare Committee (CWC) Initiatives",
		description: "Local bodies that ensure care, protection, and rehabilitation of orphans through various programs.",
		paperwork: ["None"],
		documents: ["None"],
		link: "https://prachicp.com/tarunya/sharelink/Child_Protection_Smart_kit/CHILDPROTECTIONMATERIALS/ENGLISH/1.%20Final%20English%20Modules/Module%205_CWC.pdf",
		type: "Orphan",
	},
]


export default function Schemes() {
	const [expandedScheme, setExpandedScheme] = useState<number | null>(null)
	const [selectedTab, setSelectedTab] = useState<"OldAge" | "Orphan">("OldAge")

	const toggleScheme = (id: number) => {
		setExpandedScheme(expandedScheme === id ? null : id)
	}

	// Filter schemes by selected tab
	const filteredSchemes = schemes.filter(scheme => scheme.type === selectedTab)

	// Function to open Google Maps with a query based on the selected tab
	const handleOpenMaps = () => {
		const query = selectedTab === "OldAge" ? "old age homes near me" : "orphanages near me"
		window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, "_blank")
	}

	return (
		<>
			<div className="min-h-screen bg-black rounded-lg p-4 sm:p-6 lg:p-8 mt-20">
				<div className="max-w-4xl mx-auto">
					<header className="text-center mb-8 px-4">
						<h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Indian Government Schemes for Old Age and Orphanages</h1>
						<p className="text-md sm:text-lg text-gray-600">Access information about benefits and required documents</p>
					</header>

					<div className="flex flex-col md:flex-row md:hidden justify-center gap-4 mb-6">
						<Button
							className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600"
							onClick={() => {
								setSelectedTab("OldAge")
								handleOpenMaps()
							}}
						>
							Find Nearby Old Age Homes
						</Button>
						<Button
							className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600"
							onClick={() => {
								setSelectedTab("Orphan")
								handleOpenMaps()
							}}
						>
							Find Nearby Orphanages
						</Button>
					</div>

					<Tabs value={selectedTab} onValueChange={(value) => setSelectedTab(value as "OldAge" | "Orphan")} >
						<TabsList className="flex justify-center mb-6 px-2">
							<TabsTrigger value="OldAge" className="text-white text-sm sm:text-base px-2">Old Age Schemes</TabsTrigger>
							<TabsTrigger value="Orphan" className="text-white text-sm sm:text-base px-2">Orphan Schemes</TabsTrigger>
						</TabsList>

						<TabsContent value="OldAge">
							<main className="px-2 sm:px-0">
								{filteredSchemes.map((scheme) => (
									<Card key={scheme.id} className="mb-4">
										<CardHeader>
											<CardTitle className="flex justify-between items-center">
												<span className="text-md sm:text-xl">{scheme.name}</span>
												<Button
													variant="ghost"
													size="sm"
													onClick={() => toggleScheme(scheme.id)}
													aria-expanded={expandedScheme === scheme.id}
													aria-controls={`scheme-${scheme.id}-content`}
												>
													{expandedScheme === scheme.id ? (
														<ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
													) : (
														<ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
													)}
													<span className="sr-only">
														{expandedScheme === scheme.id ? "Collapse" : "Expand"}
													</span>
												</Button>
											</CardTitle>
											<CardDescription className="text-sm sm:text-base">{scheme.description}</CardDescription>
										</CardHeader>
										{expandedScheme === scheme.id && (
											<CardContent id={`scheme-${scheme.id}-content`} className="text-sm sm:text-base">
												<div className="mt-2 sm:mt-4">
													<h3 className="font-semibold mb-1 sm:mb-2">Required Paperwork:</h3>
													<ul className="list-disc pl-4 sm:pl-5 mb-2 sm:mb-4">
														{scheme.paperwork.map((item, index) => (
															<li key={index}>{item}</li>
														))}
													</ul>
													<h3 className="font-semibold mb-1 sm:mb-2">Required Documents:</h3>
													<ul className="list-disc pl-4 sm:pl-5">
														{scheme.documents.map((item, index) => (
															<li key={index}>{item}</li>
														))}
													</ul>
													{scheme.link && (
														<div className="mt-3 sm:mt-4">
															<a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
																Learn more about this scheme
															</a>
														</div>
													)}
												</div>
											</CardContent>
										)}
									</Card>
								))}
							</main>
							{/* <Button className="mt-4 w-full sm:w-auto" onClick={handleOpenMaps}>Find Nearby Old Age Homes</Button> */}
						</TabsContent>

						<TabsContent value="Orphan">
							<main className="px-2 sm:px-0">
								{filteredSchemes.map((scheme) => (
									<Card key={scheme.id} className="mb-4">
										<CardHeader>
											<CardTitle className="flex justify-between items-center">
												<span className="text-md sm:text-xl">{scheme.name}</span>
												<Button
													variant="ghost"
													size="sm"
													onClick={() => toggleScheme(scheme.id)}
													aria-expanded={expandedScheme === scheme.id}
													aria-controls={`scheme-${scheme.id}-content`}
												>
													{expandedScheme === scheme.id ? (
														<ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
													) : (
														<ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
													)}
													<span className="sr-only">
														{expandedScheme === scheme.id ? "Collapse" : "Expand"}
													</span>
												</Button>
											</CardTitle>
											<CardDescription className="text-sm sm:text-base">{scheme.description}</CardDescription>
										</CardHeader>
										{expandedScheme === scheme.id && (
											<CardContent id={`scheme-${scheme.id}-content`} className="text-sm sm:text-base">
												<div className="mt-2 sm:mt-4">
													<h3 className="font-semibold mb-1 sm:mb-2">Required Paperwork:</h3>
													<ul className="list-disc pl-4 sm:pl-5 mb-2 sm:mb-4">
														{scheme.paperwork.map((item, index) => (
															<li key={index}>{item}</li>
														))}
													</ul>
													<h3 className="font-semibold mb-1 sm:mb-2">Required Documents:</h3>
													<ul className="list-disc pl-4 sm:pl-5">
														{scheme.documents.map((item, index) => (
															<li key={index}>{item}</li>
														))}
													</ul>
													{scheme.link && (
														<div className="mt-3 sm:mt-4">
															<a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
																Learn more about this scheme
															</a>
														</div>
													)}
												</div>
											</CardContent>
										)}
									</Card>
								))}
							</main>
							{/* <Button className="mt-4 w-full sm:w-auto" onClick={handleOpenMaps}>Find Nearby Orphanages</Button> */}
						</TabsContent>
					</Tabs>
				</div>
			</div>
			<Footer />
		</>
	)
}

"use client"

import { useState } from "react"
import { MessageSquare, Plus, Search, Clock, User, Eye, ThumbsUp, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for questions
const mockQuestions = [
    {
        id: 1,
        title: "What are the key requirements for GDPR compliance in small businesses?",
        content:
            "I'm running a small e-commerce business and need to understand the essential GDPR requirements. What are the most critical steps I should take?",
        author: {
            name: "Sarah Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
            isAnonymous: false,
        },
        tags: ["GDPR", "Compliance", "Small Business"],
        votes: 15,
        answers: 3,
        views: 127,
        createdAt: "2 hours ago",
        category: "Compliance",
    },
    {
        id: 2,
        title: "How often should we conduct penetration testing?",
        content:
            "Our company handles sensitive customer data. What's the recommended frequency for penetration testing to ensure adequate security?",
        author: {
            name: "Anonymous",
            avatar: null,
            isAnonymous: true,
        },
        tags: ["Penetration Testing", "Security", "Best Practices"],
        votes: 23,
        answers: 7,
        views: 245,
        createdAt: "5 hours ago",
        category: "Security Testing",
    },
    {
        id: 3,
        title: "ISO 27001 certification process timeline",
        content:
            "We're planning to get ISO 27001 certified. What's a realistic timeline for the entire process, and what are the major milestones?",
        author: {
            name: "Mike Chen",
            avatar: "/placeholder.svg?height=40&width=40",
            isAnonymous: false,
        },
        tags: ["ISO 27001", "Certification", "Timeline"],
        votes: 8,
        answers: 2,
        views: 89,
        createdAt: "1 day ago",
        category: "Compliance",
    },
    {
        id: 4,
        title: "Best practices for employee background verification",
        content:
            "What are the industry best practices for conducting thorough background checks while respecting privacy laws?",
        author: {
            name: "Anonymous",
            avatar: null,
            isAnonymous: true,
        },
        tags: ["Background Verification", "HR", "Privacy"],
        votes: 12,
        answers: 5,
        views: 156,
        createdAt: "2 days ago",
        category: "Background Verification",
    },
]

const categories = [
    "All Categories",
    "Compliance",
    "Security Testing",
    "Background Verification",
    "Data Protection",
    "Risk Management",
]

const popularTags = [
    "GDPR",
    "ISO 27001",
    "Penetration Testing",
    "Background Verification",
    "Compliance",
    "Security",
    "Privacy",
    "Risk Assessment",
]

export default function CommunityPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All Categories")
    const [sortBy, setSortBy] = useState("recent")

    const filteredQuestions = mockQuestions.filter((question) => {
        const matchesSearch =
            question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            question.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            question.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesCategory = selectedCategory === "All Categories" || question.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Digital Rakshak Community</h1>
                        <p className="text-xl mb-8 text-blue-100">
                            Connect with security experts, ask questions, and share knowledge about cybersecurity, compliance, and
                            verification services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/community/ask">
                                    <Plus className="mr-2 h-5 w-5" />
                                    Ask a Question
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Browse Questions
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Search and Filters */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        placeholder="Search questions, tags, or topics..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger className="w-full md:w-32">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="recent">Recent</SelectItem>
                                        <SelectItem value="popular">Popular</SelectItem>
                                        <SelectItem value="unanswered">Unanswered</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Tabs defaultValue="all" className="w-full">
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="all">All Questions</TabsTrigger>
                                    <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                                    <TabsTrigger value="trending">Trending</TabsTrigger>
                                    <TabsTrigger value="following">Following</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        {/* Questions List */}
                        <div className="space-y-4">
                            {filteredQuestions.map((question) => (
                                <Card key={question.id} className="hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <Link href={`/community/question/${question.id}`}>
                                                    <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                                                        {question.title}
                                                    </CardTitle>
                                                </Link>
                                                <CardDescription className="mt-2 line-clamp-2">{question.content}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {question.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Question Stats and Author */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                <div className="flex items-center space-x-1">
                                                    <ThumbsUp className="h-4 w-4" />
                                                    <span>{question.votes}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <MessageCircle className="h-4 w-4" />
                                                    <span>{question.answers} answers</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="h-4 w-4" />
                                                    <span>{question.views} views</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <div className="flex items-center space-x-2">
                                                    {question.author.isAnonymous ? (
                                                        <>
                                                            <Avatar className="h-6 w-6">
                                                                <AvatarFallback className="bg-gray-300">
                                                                    <User className="h-3 w-3" />
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-sm text-gray-500">Anonymous</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Avatar className="h-6 w-6">
                                                                <AvatarImage src={question.author.avatar || "/placeholder.svg"} />
                                                                <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                                                            </Avatar>
                                                            <span className="text-sm text-gray-700">{question.author.name}</span>
                                                        </>
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-500">{question.createdAt}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="text-center mt-8">
                            <Button variant="outline">Load More Questions</Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Ask Question CTA */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Have a Question?</CardTitle>
                                <CardDescription>Get expert answers from our community of security professionals.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <Link href="/community/ask">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Ask a Question
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Popular Tags */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Popular Tags</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {popularTags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Community Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Community Stats</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Total Questions</span>
                                    <span className="font-semibold">1,247</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Total Answers</span>
                                    <span className="font-semibold">3,891</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Active Members</span>
                                    <span className="font-semibold">892</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Expert Contributors</span>
                                    <span className="font-semibold">47</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="text-sm">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Clock className="h-3 w-3 text-gray-400" />
                                        <span className="text-gray-500">2 minutes ago</span>
                                    </div>
                                    <p className="text-gray-700">New answer posted on "GDPR compliance requirements"</p>
                                </div>
                                <div className="text-sm">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Clock className="h-3 w-3 text-gray-400" />
                                        <span className="text-gray-500">15 minutes ago</span>
                                    </div>
                                    <p className="text-gray-700">Question about ISO 27001 certification received 5 votes</p>
                                </div>
                                <div className="text-sm">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Clock className="h-3 w-3 text-gray-400" />
                                        <span className="text-gray-500">1 hour ago</span>
                                    </div>
                                    <p className="text-gray-700">New question posted about penetration testing</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

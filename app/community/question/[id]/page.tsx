"use client"

import type React from "react"

import { useState } from "react"
import {
    ArrowLeft,
    ThumbsUp,
    ThumbsDown,
    MessageCircle,
    Share2,
    Flag,
    User,
    Award,
    Eye,
    Bookmark,
    BookmarkCheck,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Mock data for a specific question
const questionData = {
    id: 1,
    title: "What are the key requirements for GDPR compliance in small businesses?",
    content: `I'm running a small e-commerce business with about 50 employees and we handle customer data from EU residents. We're trying to understand what the essential GDPR requirements are that we need to implement.

So far, I've read about:
- Data Protection Officer requirements
- Privacy policies
- Consent mechanisms
- Data breach notifications

But I'm not sure which ones apply to small businesses like ours, and what the priorities should be. We have a limited budget and want to focus on the most critical requirements first.

Any guidance on where to start and what the must-have implementations are would be greatly appreciated!`,
    author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        isAnonymous: false,
        reputation: 245,
        badges: ["Verified Business Owner"],
    },
    tags: ["GDPR", "Compliance", "Small Business", "Data Protection"],
    votes: 15,
    views: 127,
    createdAt: "2 hours ago",
    category: "Compliance",
    isBookmarked: false,
}

const answers = [
    {
        id: 1,
        content: `Great question! For small businesses, you don't need to appoint a DPO unless you're processing large amounts of personal data or special categories of data as your core business activity.

Here are the key priorities for a small e-commerce business:

**Immediate priorities:**
1. **Privacy Policy** - Must be clear, accessible, and compliant
2. **Lawful basis for processing** - Identify and document why you process personal data
3. **Consent mechanisms** - Ensure you have proper consent for marketing emails, cookies, etc.
4. **Data subject rights** - Set up processes to handle access, deletion, and portability requests

**Medium-term priorities:**
1. **Data breach procedures** - You have 72 hours to report breaches to authorities
2. **Data retention policies** - Don't keep data longer than necessary
3. **Vendor agreements** - Ensure your payment processors, email providers, etc. are GDPR compliant

**Documentation:**
- Keep records of your processing activities
- Document your compliance measures

The fines can be significant (up to 4% of annual turnover), but regulators often work with small businesses that show good faith efforts to comply.

Would you like me to elaborate on any of these points?`,
        author: {
            name: "Michael Rodriguez",
            avatar: "/placeholder.svg?height=40&width=40",
            isAnonymous: false,
            reputation: 1250,
            badges: ["GDPR Expert", "Top Contributor"],
        },
        votes: 23,
        createdAt: "1 hour ago",
        isAccepted: true,
    },
    {
        id: 2,
        content: `I'd add to Michael's excellent answer that you should also consider:

**Technical measures:**
- Implement proper data encryption (both in transit and at rest)
- Regular security updates and patches
- Access controls - not everyone needs access to all customer data
- Backup and recovery procedures

**Staff training:**
- Your employees need to understand GDPR basics
- Create simple procedures they can follow
- Regular refresher training

**Quick wins:**
- Audit what data you actually collect - you might be collecting more than you need
- Review your website cookies and implement a proper cookie banner
- Check your email marketing - make sure you have proper consent

For a business your size, I'd recommend starting with a GDPR compliance checklist and working through it systematically. Don't try to do everything at once!`,
        author: {
            name: "Anonymous",
            avatar: null,
            isAnonymous: true,
            reputation: 0,
            badges: [],
        },
        votes: 8,
        createdAt: "45 minutes ago",
        isAccepted: false,
    },
]

export default function QuestionDetailPage({ params }: { params: { id: string } }) {
    const [newAnswer, setNewAnswer] = useState("")
    const [isBookmarked, setIsBookmarked] = useState(questionData.isBookmarked)
    const [questionVotes, setQuestionVotes] = useState(questionData.votes)
    const [userVote, setUserVote] = useState<"up" | "down" | null>(null)

    const handleVote = (type: "up" | "down") => {
        if (userVote === type) {
            // Remove vote
            setUserVote(null)
            setQuestionVotes((prev) => (type === "up" ? prev - 1 : prev + 1))
        } else {
            // Add or change vote
            const prevVote = userVote
            setUserVote(type)
            if (prevVote === null) {
                setQuestionVotes((prev) => (type === "up" ? prev + 1 : prev - 1))
            } else {
                setQuestionVotes((prev) => (type === "up" ? prev + 2 : prev - 2))
            }
        }
    }

    const handleSubmitAnswer = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle answer submission
        console.log("New answer:", newAnswer)
        setNewAnswer("")
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/community">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Community
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Question */}
                        <Card className="mb-6">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="text-2xl mb-2">{questionData.title}</CardTitle>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                                            <span>Asked {questionData.createdAt}</span>
                                            <span className="flex items-center">
                                                <Eye className="h-4 w-4 mr-1" />
                                                {questionData.views} views
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="ghost" size="sm" onClick={() => setIsBookmarked(!isBookmarked)}>
                                            {isBookmarked ? (
                                                <BookmarkCheck className="h-4 w-4 text-blue-600" />
                                            ) : (
                                                <Bookmark className="h-4 w-4" />
                                            )}
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <Flag className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex space-x-4">
                                    {/* Voting */}
                                    <div className="flex flex-col items-center space-y-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleVote("up")}
                                            className={userVote === "up" ? "text-blue-600" : ""}
                                        >
                                            <ThumbsUp className="h-5 w-5" />
                                        </Button>
                                        <span className="font-semibold text-lg">{questionVotes}</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleVote("down")}
                                            className={userVote === "down" ? "text-red-600" : ""}
                                        >
                                            <ThumbsDown className="h-5 w-5" />
                                        </Button>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="prose max-w-none mb-6">
                                            <p className="whitespace-pre-wrap">{questionData.content}</p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {questionData.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Author Info */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                {questionData.author.isAnonymous ? (
                                                    <>
                                                        <Avatar>
                                                            <AvatarFallback className="bg-gray-300">
                                                                <User className="h-4 w-4" />
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <span className="text-sm text-gray-500">Anonymous</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Avatar>
                                                            <AvatarImage src={questionData.author.avatar || "/placeholder.svg"} />
                                                            <AvatarFallback>{questionData.author.name.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <div className="font-medium">{questionData.author.name}</div>
                                                            <div className="text-sm text-gray-500">{questionData.author.reputation} reputation</div>
                                                        </div>
                                                        <div className="flex space-x-1">
                                                            {questionData.author.badges.map((badge) => (
                                                                <Badge key={badge} variant="outline" className="text-xs">
                                                                    {badge}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Answers */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">{answers.length} Answers</h2>
                            </div>

                            {answers.map((answer) => (
                                <Card key={answer.id} className={answer.isAccepted ? "border-green-200 bg-green-50" : ""}>
                                    {answer.isAccepted && (
                                        <div className="bg-green-100 px-4 py-2 border-b border-green-200">
                                            <div className="flex items-center text-green-800 text-sm">
                                                <Award className="h-4 w-4 mr-2" />
                                                Accepted Answer
                                            </div>
                                        </div>
                                    )}
                                    <CardContent className="pt-6">
                                        <div className="flex space-x-4">
                                            {/* Voting */}
                                            <div className="flex flex-col items-center space-y-2">
                                                <Button variant="ghost" size="sm">
                                                    <ThumbsUp className="h-4 w-4" />
                                                </Button>
                                                <span className="font-semibold">{answer.votes}</span>
                                                <Button variant="ghost" size="sm">
                                                    <ThumbsDown className="h-4 w-4" />
                                                </Button>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="prose max-w-none mb-6">
                                                    <p className="whitespace-pre-wrap">{answer.content}</p>
                                                </div>

                                                {/* Author Info */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        {answer.author.isAnonymous ? (
                                                            <>
                                                                <Avatar>
                                                                    <AvatarFallback className="bg-gray-300">
                                                                        <User className="h-4 w-4" />
                                                                    </AvatarFallback>
                                                                </Avatar>
                                                                <span className="text-sm text-gray-500">Anonymous</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Avatar>
                                                                    <AvatarImage src={answer.author.avatar || "/placeholder.svg"} />
                                                                    <AvatarFallback>{answer.author.name.charAt(0)}</AvatarFallback>
                                                                </Avatar>
                                                                <div>
                                                                    <div className="font-medium">{answer.author.name}</div>
                                                                    <div className="text-sm text-gray-500">{answer.author.reputation} reputation</div>
                                                                </div>
                                                                <div className="flex space-x-1">
                                                                    {answer.author.badges.map((badge) => (
                                                                        <Badge key={badge} variant="outline" className="text-xs">
                                                                            {badge}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                    <span className="text-sm text-gray-500">answered {answer.createdAt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Add Answer */}
                        <Card className="mt-8">
                            <CardHeader>
                                <CardTitle>Your Answer</CardTitle>
                                <CardDescription>
                                    Share your knowledge and help the community by providing a detailed answer.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmitAnswer} className="space-y-4">
                                    <Textarea
                                        placeholder="Write your answer here. Be specific and provide examples where possible."
                                        value={newAnswer}
                                        onChange={(e) => setNewAnswer(e.target.value)}
                                        rows={8}
                                        required
                                    />
                                    <div className="flex justify-end space-x-4">
                                        <Button type="button" variant="outline">
                                            Preview
                                        </Button>
                                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                            Post Answer
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Question Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Question Stats</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Asked</span>
                                    <span className="text-sm font-medium">{questionData.createdAt}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Views</span>
                                    <span className="text-sm font-medium">{questionData.views}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Votes</span>
                                    <span className="text-sm font-medium">{questionVotes}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Answers</span>
                                    <span className="text-sm font-medium">{answers.length}</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Related Questions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Related Questions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Link href="/community/question/2" className="block text-sm text-blue-600 hover:underline">
                                    How to implement GDPR consent management?
                                </Link>
                                <Link href="/community/question/3" className="block text-sm text-blue-600 hover:underline">
                                    GDPR fines for small businesses - what to expect?
                                </Link>
                                <Link href="/community/question/4" className="block text-sm text-blue-600 hover:underline">
                                    Data Protection Officer requirements for SMEs
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Community Guidelines */}
                        <Alert>
                            <MessageCircle className="h-4 w-4" />
                            <AlertDescription>
                                <strong>Community Guidelines:</strong> Be respectful, provide helpful answers, and cite sources when
                                possible. Avoid sharing sensitive business information.
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </div>
        </div>
    )
}

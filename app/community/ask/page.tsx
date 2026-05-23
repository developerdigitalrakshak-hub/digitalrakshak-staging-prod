"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Eye, UserCheck, AlertCircle, Tag, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
    "Compliance",
    "Security Testing",
    "Background Verification",
    "Data Protection",
    "Risk Management",
    "General",
]

const suggestedTags = [
    "GDPR",
    "ISO 27001",
    "Penetration Testing",
    "Background Verification",
    "Compliance",
    "Security",
    "Privacy",
    "Risk Assessment",
    "VAPT",
    "Audit",
]

export default function AskQuestionPage() {
    const [isAnonymous, setIsAnonymous] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context
    const [showLoginPrompt, setShowLoginPrompt] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const [newTag, setNewTag] = useState("")

    const addTag = (tag: string) => {
        if (tag && !tags.includes(tag) && tags.length < 5) {
            setTags([...tags, tag])
            setNewTag("")
        }
    }

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!isLoggedIn && !isAnonymous) {
            setShowLoginPrompt(true)
            return
        }
        // Handle form submission
        console.log({ title, content, category, tags, isAnonymous })
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
                        <h1 className="text-2xl font-bold text-gray-900">Ask a Question</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Share Your Question</CardTitle>
                                <CardDescription>
                                    Get expert answers from our community of security professionals and compliance experts.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Authentication Options */}
                                    {!isLoggedIn && (
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                            <div className="flex items-start space-x-3">
                                                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-blue-900 mb-2">Choose how to post</h3>
                                                    <Tabs defaultValue="anonymous" className="w-full">
                                                        <TabsList className="grid w-full grid-cols-2">
                                                            <TabsTrigger value="anonymous" onClick={() => setIsAnonymous(true)}>
                                                                <Eye className="h-4 w-4 mr-2" />
                                                                Post Anonymously
                                                            </TabsTrigger>
                                                            <TabsTrigger value="account" onClick={() => setIsAnonymous(false)}>
                                                                <UserCheck className="h-4 w-4 mr-2" />
                                                                Use My Account
                                                            </TabsTrigger>
                                                        </TabsList>
                                                        <TabsContent value="anonymous" className="mt-3">
                                                            <p className="text-sm text-blue-700">
                                                                Your question will be posted anonymously. You won't receive notifications about answers.
                                                            </p>
                                                        </TabsContent>
                                                        <TabsContent value="account" className="mt-3">
                                                            <div className="space-y-3">
                                                                <p className="text-sm text-blue-700">
                                                                    Sign in or create an account to get notifications and build your reputation.
                                                                </p>
                                                                <div className="flex space-x-2">
                                                                    <Button size="sm" variant="outline">
                                                                        Sign In
                                                                    </Button>
                                                                    <Button size="sm">Create Account</Button>
                                                                </div>
                                                            </div>
                                                        </TabsContent>
                                                    </Tabs>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Question Title */}
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Question Title *</Label>
                                        <Input
                                            id="title"
                                            placeholder="What's your question? Be specific and clear."
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                        <p className="text-sm text-gray-500">
                                            Make your title descriptive and specific to get better answers.
                                        </p>
                                    </div>

                                    {/* Category */}
                                    <div className="space-y-2">
                                        <Label htmlFor="category">Category *</Label>
                                        <Select value={category} onValueChange={setCategory} required>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((cat) => (
                                                    <SelectItem key={cat} value={cat}>
                                                        {cat}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Question Content */}
                                    <div className="space-y-2">
                                        <Label htmlFor="content">Question Details *</Label>
                                        <Textarea
                                            id="content"
                                            placeholder="Provide more details about your question. Include any relevant context, what you've tried, and what specific help you need."
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            rows={8}
                                            required
                                        />
                                        <p className="text-sm text-gray-500">
                                            The more details you provide, the better answers you'll receive.
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="space-y-2">
                                        <Label>Tags (up to 5)</Label>
                                        <div className="space-y-3">
                                            {/* Current Tags */}
                                            {tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {tags.map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="secondary"
                                                            className="cursor-pointer"
                                                            onClick={() => removeTag(tag)}
                                                        >
                                                            {tag} ×
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Add New Tag */}
                                            {tags.length < 5 && (
                                                <div className="flex space-x-2">
                                                    <Input
                                                        placeholder="Add a tag"
                                                        value={newTag}
                                                        onChange={(e) => setNewTag(e.target.value)}
                                                        onKeyPress={(e) => {
                                                            if (e.key === "Enter") {
                                                                e.preventDefault()
                                                                addTag(newTag)
                                                            }
                                                        }}
                                                    />
                                                    <Button type="button" variant="outline" onClick={() => addTag(newTag)}>
                                                        <Tag className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            )}

                                            {/* Suggested Tags */}
                                            <div>
                                                <p className="text-sm text-gray-600 mb-2">Suggested tags:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {suggestedTags
                                                        .filter((tag) => !tags.includes(tag))
                                                        .slice(0, 8)
                                                        .map((tag) => (
                                                            <Badge
                                                                key={tag}
                                                                variant="outline"
                                                                className="cursor-pointer hover:bg-blue-50"
                                                                onClick={() => addTag(tag)}
                                                            >
                                                                + {tag}
                                                            </Badge>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end space-x-4">
                                        <Button type="button" variant="outline" asChild>
                                            <Link href="/community">Cancel</Link>
                                        </Button>
                                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                            Post Question
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Tips for Good Questions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center">
                                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                                    Tips for Good Questions
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="text-sm">
                                    <h4 className="font-medium text-gray-900 mb-1">Be specific</h4>
                                    <p className="text-gray-600">
                                        Include details about your situation, industry, and specific challenges.
                                    </p>
                                </div>
                                <div className="text-sm">
                                    <h4 className="font-medium text-gray-900 mb-1">Show research</h4>
                                    <p className="text-gray-600">Mention what you've already tried or researched.</p>
                                </div>
                                <div className="text-sm">
                                    <h4 className="font-medium text-gray-900 mb-1">Use clear language</h4>
                                    <p className="text-gray-600">Avoid jargon and explain technical terms when necessary.</p>
                                </div>
                                <div className="text-sm">
                                    <h4 className="font-medium text-gray-900 mb-1">Add relevant tags</h4>
                                    <p className="text-gray-600">Tags help experts find and answer your question.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Community Guidelines */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Community Guidelines</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-gray-600">
                                <p>• Be respectful and professional</p>
                                <p>• Don't share sensitive company information</p>
                                <p>• Search existing questions before posting</p>
                                <p>• Accept helpful answers to build community trust</p>
                                <p>• Follow up with additional context if needed</p>
                            </CardContent>
                        </Card>

                        {/* Anonymous Posting Info */}
                        {isAnonymous && (
                            <Alert>
                                <Eye className="h-4 w-4" />
                                <AlertDescription>
                                    <strong>Anonymous posting:</strong> Your question will be posted without revealing your identity. You
                                    won't receive email notifications about answers, so remember to check back.
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

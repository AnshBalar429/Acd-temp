"use client"

import { useState, useEffect } from "react"
import { Search, Code2, Sun, Moon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { codeSnippets, categories } from "@/lib/data"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredSnippets = codeSnippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || snippet.tags.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-background transition-colors">
      {/* Header */}
      {/* <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="text-xl font-semibold">CodeSnippets</span>
          </div>
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Code Snippets
              </h1>
              <p className="text-muted-foreground text-lg">A collection of useful code snippets for your reference.</p>
            </div>
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search snippets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Code Snippets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSnippets.map((snippet) => (
            <Link key={snippet.id} href={`/snippets/${snippet.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group bg-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {snippet.language}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                        {snippet.title}
                      </CardTitle>
                    </div>
                    <Code2 className="h-5 w-5 text-muted-foreground group-hover:text-purple-600 transition-colors" />
                  </div>
                  <CardDescription className="text-sm">{snippet.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1">
                    {snippet.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {snippet.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{snippet.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredSnippets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No snippets found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  )
}

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Zenn content repository for writing and publishing technical articles and books on Zenn.dev (Japanese technical content platform). Content is written in Markdown format with YAML frontmatter.

## Essential Commands

### Content Management
- `npx zenn preview` - Preview articles/books locally in browser
- `npx zenn new:article` - Create a new article with generated slug
- `npx zenn new:book` - Create a new book
- `npx zenn list:articles` - List all articles with their metadata

### Article Structure
Articles must include YAML frontmatter:
```yaml
---
title: "Article Title"
emoji: "⛳"
type: "tech" # tech: technical article / idea: idea article  
topics: [topic1, topic2] # up to 5 topics
published: true # or false for drafts
---
```

## Project Structure

- `/articles/` - Individual article Markdown files (named with unique slugs)
- `/books/` - Book content directories
- Articles are written in Japanese
- No testing, linting, or build processes configured

## Important Notes

- The only dependency is `zenn-cli` - all content management happens through this CLI
- Articles use generated slugs as filenames (e.g., `2beb67e5afd5e7.md`)
- Content is synced with Zenn.dev platform
- Git commits typically use Japanese commit messages
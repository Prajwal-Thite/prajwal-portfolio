# Graph Report - ./src  (2026-04-22)

## Corpus Check
- Corpus is ~24,081 words - fits in a single context window. You may not need a graph.

## Summary
- 121 nodes · 53 edges · 75 communities detected
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Toast State Management|Toast State Management]]
- [[_COMMUNITY_AI Chatbot Engine|AI Chatbot Engine]]
- [[_COMMUNITY_Pagination Controls|Pagination Controls]]
- [[_COMMUNITY_Contact Form Handler|Contact Form Handler]]
- [[_COMMUNITY_Sidebar Navigation|Sidebar Navigation]]
- [[_COMMUNITY_App Entry Point|App Entry Point]]
- [[_COMMUNITY_Tech Badge Display|Tech Badge Display]]
- [[_COMMUNITY_Chart Visualization|Chart Visualization]]
- [[_COMMUNITY_Certification Badge|Certification Badge]]
- [[_COMMUNITY_Chat Message Component|Chat Message Component]]
- [[_COMMUNITY_Hero Section|Hero Section]]
- [[_COMMUNITY_Hire Me Button|Hire Me Button]]
- [[_COMMUNITY_Project Card|Project Card]]
- [[_COMMUNITY_Projects Section|Projects Section]]
- [[_COMMUNITY_Skill Card|Skill Card]]
- [[_COMMUNITY_UI Badge|UI Badge]]
- [[_COMMUNITY_Carousel Widget|Carousel Widget]]
- [[_COMMUNITY_Skeleton Loader|Skeleton Loader]]
- [[_COMMUNITY_Toast Notification|Toast Notification]]
- [[_COMMUNITY_Mobile Detection Hook|Mobile Detection Hook]]
- [[_COMMUNITY_Parallax Effect Hook|Parallax Effect Hook]]
- [[_COMMUNITY_Typewriter Effect Hook|Typewriter Effect Hook]]
- [[_COMMUNITY_Utility Functions|Utility Functions]]
- [[_COMMUNITY_Home Page|Home Page]]
- [[_COMMUNITY_404 Not Found Page|404 Not Found Page]]
- [[_COMMUNITY_Vite Type Declarations|Vite Type Declarations]]
- [[_COMMUNITY_About Me Section|About Me Section]]
- [[_COMMUNITY_Circular Progress UI|Circular Progress UI]]
- [[_COMMUNITY_Education Section|Education Section]]
- [[_COMMUNITY_Experience Section|Experience Section]]
- [[_COMMUNITY_Flip Card Animation|Flip Card Animation]]
- [[_COMMUNITY_Floating Tech Logos|Floating Tech Logos]]
- [[_COMMUNITY_Portfolio Knowledge Base|Portfolio Knowledge Base]]
- [[_COMMUNITY_Skills Section|Skills Section]]
- [[_COMMUNITY_UI Accordion|UI Accordion]]
- [[_COMMUNITY_UI Alert Dialog|UI Alert Dialog]]
- [[_COMMUNITY_UI Alert|UI Alert]]
- [[_COMMUNITY_UI Aspect Ratio|UI Aspect Ratio]]
- [[_COMMUNITY_UI Avatar|UI Avatar]]
- [[_COMMUNITY_UI Breadcrumb|UI Breadcrumb]]
- [[_COMMUNITY_UI Button|UI Button]]
- [[_COMMUNITY_UI Calendar|UI Calendar]]
- [[_COMMUNITY_UI Card|UI Card]]
- [[_COMMUNITY_UI Checkbox|UI Checkbox]]
- [[_COMMUNITY_UI Collapsible|UI Collapsible]]
- [[_COMMUNITY_UI Command|UI Command]]
- [[_COMMUNITY_UI Context Menu|UI Context Menu]]
- [[_COMMUNITY_UI Dialog|UI Dialog]]
- [[_COMMUNITY_UI Drawer|UI Drawer]]
- [[_COMMUNITY_UI Dropdown Menu|UI Dropdown Menu]]
- [[_COMMUNITY_UI Form|UI Form]]
- [[_COMMUNITY_UI Hover Card|UI Hover Card]]
- [[_COMMUNITY_UI Input OTP|UI Input OTP]]
- [[_COMMUNITY_UI Input|UI Input]]
- [[_COMMUNITY_UI Label|UI Label]]
- [[_COMMUNITY_UI Menubar|UI Menubar]]
- [[_COMMUNITY_UI Navigation Menu|UI Navigation Menu]]
- [[_COMMUNITY_UI Popover|UI Popover]]
- [[_COMMUNITY_UI Progress|UI Progress]]
- [[_COMMUNITY_UI Radio Group|UI Radio Group]]
- [[_COMMUNITY_UI Resizable|UI Resizable]]
- [[_COMMUNITY_UI Scroll Area|UI Scroll Area]]
- [[_COMMUNITY_UI Select|UI Select]]
- [[_COMMUNITY_UI Separator|UI Separator]]
- [[_COMMUNITY_UI Sheet|UI Sheet]]
- [[_COMMUNITY_UI Slider|UI Slider]]
- [[_COMMUNITY_UI Switch|UI Switch]]
- [[_COMMUNITY_UI Table|UI Table]]
- [[_COMMUNITY_UI Tabs|UI Tabs]]
- [[_COMMUNITY_UI Textarea|UI Textarea]]
- [[_COMMUNITY_UI Toast|UI Toast]]
- [[_COMMUNITY_UI Toaster|UI Toaster]]
- [[_COMMUNITY_UI Toggle Group|UI Toggle Group]]
- [[_COMMUNITY_UI Toggle|UI Toggle]]
- [[_COMMUNITY_UI Tooltip|UI Tooltip]]

## God Nodes (most connected - your core abstractions)
1. `toast()` - 4 edges
2. `handleSubmit()` - 3 edges
3. `handleSendMessage()` - 3 edges
4. `reducer()` - 3 edges
5. `dispatch()` - 3 edges
6. `validateForm()` - 2 edges
7. `handleKeyPress()` - 2 edges
8. `genId()` - 2 edges
9. `addToRemoveQueue()` - 2 edges
10. `generateResponse_ai()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `handleSubmit()` --calls--> `toast()`  [INFERRED]
  src\components\ContactSection.tsx → src\hooks\use-toast.ts
- `handleSendMessage()` --calls--> `generateResponse_ai()`  [INFERRED]
  src\components\PortfolioChatBot.tsx → src\lib\groqConfig.ts

## Communities

### Community 0 - "Toast State Management"
Cohesion: 0.48
Nodes (5): addToRemoveQueue(), dispatch(), genId(), reducer(), toast()

### Community 1 - "AI Chatbot Engine"
Cohesion: 0.33
Nodes (3): generateResponse_ai(), handleKeyPress(), handleSendMessage()

### Community 2 - "Pagination Controls"
Cohesion: 0.33
Nodes (0): 

### Community 3 - "Contact Form Handler"
Cohesion: 0.67
Nodes (2): handleSubmit(), validateForm()

### Community 4 - "Sidebar Navigation"
Cohesion: 0.5
Nodes (0): 

### Community 5 - "App Entry Point"
Cohesion: 0.67
Nodes (0): 

### Community 6 - "Tech Badge Display"
Cohesion: 0.67
Nodes (0): 

### Community 7 - "Chart Visualization"
Cohesion: 0.67
Nodes (0): 

### Community 8 - "Certification Badge"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Chat Message Component"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Hero Section"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Hire Me Button"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Project Card"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Projects Section"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Skill Card"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "UI Badge"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Carousel Widget"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Skeleton Loader"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Toast Notification"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Mobile Detection Hook"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Parallax Effect Hook"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Typewriter Effect Hook"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Utility Functions"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Home Page"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "404 Not Found Page"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Vite Type Declarations"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "About Me Section"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "Circular Progress UI"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "Education Section"
Cohesion: 1.0
Nodes (0): 

### Community 29 - "Experience Section"
Cohesion: 1.0
Nodes (0): 

### Community 30 - "Flip Card Animation"
Cohesion: 1.0
Nodes (0): 

### Community 31 - "Floating Tech Logos"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Portfolio Knowledge Base"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "Skills Section"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "UI Accordion"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "UI Alert Dialog"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "UI Alert"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "UI Aspect Ratio"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "UI Avatar"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "UI Breadcrumb"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "UI Button"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "UI Calendar"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "UI Card"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "UI Checkbox"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "UI Collapsible"
Cohesion: 1.0
Nodes (0): 

### Community 45 - "UI Command"
Cohesion: 1.0
Nodes (0): 

### Community 46 - "UI Context Menu"
Cohesion: 1.0
Nodes (0): 

### Community 47 - "UI Dialog"
Cohesion: 1.0
Nodes (0): 

### Community 48 - "UI Drawer"
Cohesion: 1.0
Nodes (0): 

### Community 49 - "UI Dropdown Menu"
Cohesion: 1.0
Nodes (0): 

### Community 50 - "UI Form"
Cohesion: 1.0
Nodes (0): 

### Community 51 - "UI Hover Card"
Cohesion: 1.0
Nodes (0): 

### Community 52 - "UI Input OTP"
Cohesion: 1.0
Nodes (0): 

### Community 53 - "UI Input"
Cohesion: 1.0
Nodes (0): 

### Community 54 - "UI Label"
Cohesion: 1.0
Nodes (0): 

### Community 55 - "UI Menubar"
Cohesion: 1.0
Nodes (0): 

### Community 56 - "UI Navigation Menu"
Cohesion: 1.0
Nodes (0): 

### Community 57 - "UI Popover"
Cohesion: 1.0
Nodes (0): 

### Community 58 - "UI Progress"
Cohesion: 1.0
Nodes (0): 

### Community 59 - "UI Radio Group"
Cohesion: 1.0
Nodes (0): 

### Community 60 - "UI Resizable"
Cohesion: 1.0
Nodes (0): 

### Community 61 - "UI Scroll Area"
Cohesion: 1.0
Nodes (0): 

### Community 62 - "UI Select"
Cohesion: 1.0
Nodes (0): 

### Community 63 - "UI Separator"
Cohesion: 1.0
Nodes (0): 

### Community 64 - "UI Sheet"
Cohesion: 1.0
Nodes (0): 

### Community 65 - "UI Slider"
Cohesion: 1.0
Nodes (0): 

### Community 66 - "UI Switch"
Cohesion: 1.0
Nodes (0): 

### Community 67 - "UI Table"
Cohesion: 1.0
Nodes (0): 

### Community 68 - "UI Tabs"
Cohesion: 1.0
Nodes (0): 

### Community 69 - "UI Textarea"
Cohesion: 1.0
Nodes (0): 

### Community 70 - "UI Toast"
Cohesion: 1.0
Nodes (0): 

### Community 71 - "UI Toaster"
Cohesion: 1.0
Nodes (0): 

### Community 72 - "UI Toggle Group"
Cohesion: 1.0
Nodes (0): 

### Community 73 - "UI Toggle"
Cohesion: 1.0
Nodes (0): 

### Community 74 - "UI Tooltip"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Certification Badge`** (2 nodes): `handleClick()`, `CertificationBadge.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Chat Message Component`** (2 nodes): `ChatMessage()`, `ChatMessage.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Section`** (2 nodes): `handleDownloadCV()`, `HeroSection.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hire Me Button`** (2 nodes): `HireMeButton()`, `HireMeButton.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Project Card`** (2 nodes): `getCategoryColor()`, `ProjectCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Projects Section`** (2 nodes): `ProjectsSection()`, `ProjectsSection.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skill Card`** (2 nodes): `SkillCard()`, `SkillCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Badge`** (2 nodes): `Badge()`, `badge.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Carousel Widget`** (2 nodes): `useCarousel()`, `carousel.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skeleton Loader`** (2 nodes): `Skeleton()`, `skeleton.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Toast Notification`** (2 nodes): `Toaster()`, `sonner.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Mobile Detection Hook`** (2 nodes): `use-mobile.tsx`, `useIsMobile()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Parallax Effect Hook`** (2 nodes): `use-mouse-parallax.ts`, `useMouseParallax()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Typewriter Effect Hook`** (2 nodes): `use-typewriter.ts`, `useTypewriter()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Utility Functions`** (2 nodes): `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Home Page`** (2 nodes): `HomePage()`, `HomePage.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `404 Not Found Page`** (2 nodes): `NotFound()`, `NotFound.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Type Declarations`** (1 nodes): `vite-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `About Me Section`** (1 nodes): `AboutMe.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Circular Progress UI`** (1 nodes): `CircularProgress.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Education Section`** (1 nodes): `EducationSection.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Experience Section`** (1 nodes): `ExperienceSection.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Flip Card Animation`** (1 nodes): `FlipCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Floating Tech Logos`** (1 nodes): `FloatingTechLogos.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Portfolio Knowledge Base`** (1 nodes): `Portfolio_knowledge_base.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skills Section`** (1 nodes): `Skills.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Accordion`** (1 nodes): `accordion.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Alert Dialog`** (1 nodes): `alert-dialog.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Alert`** (1 nodes): `alert.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Aspect Ratio`** (1 nodes): `aspect-ratio.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Avatar`** (1 nodes): `avatar.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Breadcrumb`** (1 nodes): `breadcrumb.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Button`** (1 nodes): `button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Calendar`** (1 nodes): `calendar.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Card`** (1 nodes): `card.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Checkbox`** (1 nodes): `checkbox.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Collapsible`** (1 nodes): `collapsible.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Command`** (1 nodes): `command.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Context Menu`** (1 nodes): `context-menu.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Dialog`** (1 nodes): `dialog.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Drawer`** (1 nodes): `drawer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Dropdown Menu`** (1 nodes): `dropdown-menu.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Form`** (1 nodes): `form.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Hover Card`** (1 nodes): `hover-card.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Input OTP`** (1 nodes): `input-otp.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Input`** (1 nodes): `input.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Label`** (1 nodes): `label.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Menubar`** (1 nodes): `menubar.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Navigation Menu`** (1 nodes): `navigation-menu.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Popover`** (1 nodes): `popover.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Progress`** (1 nodes): `progress.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Radio Group`** (1 nodes): `radio-group.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Resizable`** (1 nodes): `resizable.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Scroll Area`** (1 nodes): `scroll-area.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Select`** (1 nodes): `select.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Separator`** (1 nodes): `separator.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Sheet`** (1 nodes): `sheet.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Slider`** (1 nodes): `slider.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Switch`** (1 nodes): `switch.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Table`** (1 nodes): `table.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Tabs`** (1 nodes): `tabs.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Textarea`** (1 nodes): `textarea.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Toast`** (1 nodes): `toast.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Toaster`** (1 nodes): `toaster.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Toggle Group`** (1 nodes): `toggle-group.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Toggle`** (1 nodes): `toggle.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Tooltip`** (1 nodes): `tooltip.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `toast()` connect `Toast State Management` to `Contact Form Handler`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `handleSubmit()` connect `Contact Form Handler` to `Toast State Management`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
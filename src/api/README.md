# Projects API Simulation

This directory contains the simulated WordPress API for the Micaiah Douglas portfolio website. The API simulation provides realistic data structures and timing to prepare for eventual WordPress integration.

## Files Structure

- **`projectsApi.ts`** - Main API simulation with data and functions
- **`README.md`** - This documentation file

## API Simulation Features

### Data Structure
The API simulates a WordPress REST API with the following endpoints:
- `GET /wp-json/wp/v2/projects` - Get all projects
- `GET /wp-json/wp/v2/projects/{id}` - Get single project
- `GET /wp-json/wp/v2/projects?category={category}` - Filter by category
- `GET /wp-json/wp/v2/projects?year={year}` - Filter by year
- `GET /wp-json/wp/v2/projects?search={query}` - Search projects

### Simulated Network Delays
- `getAllProjects()`: 300ms delay
- `getProjectById()`: 200ms delay  
- `getProjectsByCategory()`: 250ms delay
- `getProjectsByYear()`: 250ms delay
- `searchProjects()`: 400ms delay

### Project Data Schema

```typescript
interface WordPressProject {
  id: number;
  name: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  caseStudy?: {
    overview: {
      role: string;
      context: string;
      duration: string;
      tools: string[];
      deliverables: string[];
    };
    brief: {
      ask: string;
      goals: string[];
      requirements: string[];
    };
    research: {
      moodboards: string;
      styleExploration: string;
      competitorBenchmarks: string[];
      visualDirections: string[];
      accessibility: string;
    };
    exploration: {
      wireframes?: string;
      styleDirection: {
        colors: string;
        typography: string;
        grid: string;
        iconography: string;
        branding: string;
      };
      optionsTested: Array<{
        title: string;
        description: string;
      }>;
    };
    highFidelityUI: {
      finalScreens: string[];
      keyFlows: string[];
      microinteractions: string;
      beforeAfter?: string;
    };
    designSystem: {
      components: string[];
      responsiveConsiderations: string;
      accessibilityFeatures: string;
      scalingApproach: string;
    };
    finalOutcome: {
      heroVisuals: string;
      mockupsInContext: string;
      prototypeLink?: string;
      demoVideo?: string;
    };
    reflection: {
      learnings: string;
      collaboration: string;
      constraints: string;
    };
  };
}
```

## Usage Examples

### Using the ProjectsAPI Class

```typescript
import { ProjectsAPI } from '../api/projectsApi';

// Get all projects
const projects = await ProjectsAPI.getAllProjects();

// Get single project
const project = await ProjectsAPI.getProjectById(1);

// Search projects
const searchResults = await ProjectsAPI.searchProjects('wellness');

// Filter by category
const mobileProjects = await ProjectsAPI.getProjectsByCategory('Mobile Application');

// Filter by year
const recentProjects = await ProjectsAPI.getProjectsByYear('2024');
```

### Using React Hooks

```typescript
import { useProjects, useProject, useProjectSearch } from '../hooks/useProjects';

// Get all projects with loading state
const { projects, loading, error } = useProjects();

// Get single project
const { project, loading, error } = useProject(projectId);

// Search functionality
const { projects, loading, search, clearSearch } = useProjectSearch();
```

## Migration to WordPress

When migrating to actual WordPress:

1. **Replace API calls**: Update `ProjectsAPI` methods to use real WordPress REST API endpoints
2. **Update authentication**: Add WordPress authentication if needed
3. **Handle real errors**: Replace simulated error handling with real API error handling
4. **Remove delays**: Remove artificial `delay()` calls
5. **Update data mapping**: Ensure WordPress response matches expected data structure

### WordPress Integration Checklist

- [ ] Set up WordPress REST API endpoints
- [ ] Configure CORS for frontend access
- [ ] Implement authentication if needed
- [ ] Map WordPress custom fields to project schema
- [ ] Test all API endpoints
- [ ] Update error handling
- [ ] Remove simulation delays
- [ ] Update image handling for WordPress media

## Configuration Constants

The API also exports configuration constants:

- **`ANIMATION_CONFIG`** - Animation timings and easing functions
- **`LAYOUT_CONFIG`** - Grid layouts and responsive breakpoints

These remain unchanged during WordPress migration.

## Error Handling

The simulation includes basic error handling patterns that should be expanded for production:

```typescript
// Current simulation
catch (err) {
  setError(err instanceof Error ? err.message : 'Failed to fetch projects');
}

// Production WordPress integration
catch (err) {
  if (err.response?.status === 404) {
    setError('Projects not found');
  } else if (err.response?.status === 500) {
    setError('Server error. Please try again later.');
  } else {
    setError('Network error. Please check your connection.');
  }
}
```

## Performance Considerations

The simulation is designed to mimic real API performance:
- Loading states for all operations
- Realistic network delays
- Error state handling
- Optimistic updates where appropriate

This ensures the frontend experience will be smooth when transitioning to real WordPress API calls.
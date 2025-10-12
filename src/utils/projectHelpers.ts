import { Project } from "../api/projectsApi";

/**
 * Filter projects by category
 */
export const filterProjectsByCategory = (
  projects: Project[],
  category: string
): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => 
    project.category.toLowerCase().includes(category.toLowerCase())
  );
};

/**
 * Filter projects by year
 */
export const filterProjectsByYear = (
  projects: Project[],
  year: string
): Project[] => {
  if (year === "all") return projects;
  return projects.filter((project) => project.year === year);
};

/**
 * Get unique categories from projects
 */
export const getProjectCategories = (projects: Project[]): string[] => {
  const categories = projects.map((project) => project.category);
  return Array.from(new Set(categories));
};

/**
 * Get unique years from projects
 */
export const getProjectYears = (projects: Project[]): string[] => {
  const years = projects.map((project) => project.year);
  return Array.from(new Set(years)).sort((a, b) => parseInt(b) - parseInt(a));
};

/**
 * Search projects by title, name, or tags
 */
export const searchProjects = (
  projects: Project[],
  query: string
): Project[] => {
  if (!query.trim()) return projects;
  
  const lowercaseQuery = query.toLowerCase();
  return projects.filter((project) =>
    project.name.toLowerCase().includes(lowercaseQuery) ||
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.category.toLowerCase().includes(lowercaseQuery) ||
    project.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

/**
 * Get project by ID
 */
export const getProjectById = (
  projects: Project[],
  id: number
): Project | undefined => {
  return projects.find((project) => project.id === id);
};

/**
 * Get next project in sequence
 */
export const getNextProject = (
  projects: Project[],
  currentProject: Project
): Project => {
  const currentIndex = projects.findIndex((p) => p.id === currentProject.id);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

/**
 * Get previous project in sequence
 */
export const getPreviousProject = (
  projects: Project[],
  currentProject: Project
): Project => {
  const currentIndex = projects.findIndex((p) => p.id === currentProject.id);
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  return projects[prevIndex];
};
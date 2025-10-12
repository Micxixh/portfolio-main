"use client";

import { useState, useEffect, useRef } from "react";
import { OptimizedProjectsAPI, Project } from "../api/optimizedProjectsApi";

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// ─── 1. Fetch all projects ────────────────────────────────────────────────
export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchProjects = async () => {
    try {
      // Cancel existing request
      abortControllerRef.current?.abort();
      const controller = new AbortController();
      abortControllerRef.current = controller;

      setLoading(true);
      setError(null);

      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const data = await OptimizedProjectsAPI.getAllProjects();
      clearTimeout(timeoutId);

      if (!controller.signal.aborted) setProjects(data);
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setError("Request timed out. Please try again.");
      } else {
        setError(err instanceof Error ? err.message : "Failed to fetch projects");
      }
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    return () => abortControllerRef.current?.abort();
  }, []);

  return { projects, loading, error, refetch: fetchProjects };
}

// ─── 2. Fetch single project ──────────────────────────────────────────────
interface UseProjectReturn {
  project: Project | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProject(id: string | null): UseProjectReturn {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProject = async () => {
    if (!id) {
      setProject(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await OptimizedProjectsAPI.getProjectById(id); // id is string
      setProject(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch project");
      console.error("Error fetching project:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  return { project, loading, error, refetch: fetchProject };
}



// ─── 3. Search projects ───────────────────────────────────────────────────
interface UseProjectSearchReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  search: (query: string) => Promise<void>;
  clearSearch: () => void;
}

export function useProjectSearch(): UseProjectSearchReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string) => {
    if (!query.trim()) {
      setProjects([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await OptimizedProjectsAPI.searchProjects(query);
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to search projects");
      console.error("Error searching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setProjects([]);
    setError(null);
    setLoading(false);
  };

  return { projects, loading, error, search, clearSearch };
}

// ─── 4. Fetch by category ─────────────────────────────────────────────────
export function useProjectsByCategory(category: string | null): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectsByCategory = async () => {
    if (!category) {
      setProjects([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await OptimizedProjectsAPI.getProjectsByCategory(category);
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects by category");
      console.error("Error fetching projects by category:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectsByCategory();
  }, [category]);

  return { projects, loading, error, refetch: fetchProjectsByCategory };
}

// ─── 5. Fetch by year ─────────────────────────────────────────────────────
export function useProjectsByYear(year: string | null): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectsByYear = async () => {
    if (!year) {
      setProjects([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await OptimizedProjectsAPI.getProjectsByYear(year);
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects by year");
      console.error("Error fetching projects by year:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectsByYear();
  }, [year]);

  return { projects, loading, error, refetch: fetchProjectsByYear };
}

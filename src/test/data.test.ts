import { describe, it, expect } from 'vitest';
import {
  projectsData,
  skillsData,
  experienceData,
  educationData,
  certificationsData,
  profileInfo,
} from '../data/portfolioData';

describe('portfolioData', () => {
  describe('projectsData', () => {
    it('should have projects', () => {
      expect(projectsData.length).toBeGreaterThan(0);
    });

    it('each project should have required fields', () => {
      projectsData.forEach((project) => {
        expect(project.id).toBeTruthy();
        expect(project.title).toBeTruthy();
        expect(project.tagline).toBeTruthy();
        expect(project.description).toBeTruthy();
        expect(project.category).toBeTruthy();
        expect(project.tags.length).toBeGreaterThan(0);
        expect(project.githubUrl).toBeTruthy();
        expect(project.year).toBeTruthy();
      });
    });

    it('featured projects should exist', () => {
      const featured = projectsData.filter((p) => p.featured);
      expect(featured.length).toBeGreaterThan(0);
    });
  });

  describe('skillsData', () => {
    it('should have skills', () => {
      expect(skillsData.length).toBeGreaterThan(0);
    });

    it('each skill should have required fields', () => {
      skillsData.forEach((skill) => {
        expect(skill.name).toBeTruthy();
        expect(skill.category).toBeTruthy();
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
        expect(skill.experienceYears).toBeGreaterThan(0);
      });
    });
  });

  describe('experienceData', () => {
    it('should have experience entries', () => {
      expect(experienceData.length).toBeGreaterThan(0);
    });

    it('each entry should have required fields', () => {
      experienceData.forEach((exp) => {
        expect(exp.id).toBeTruthy();
        expect(exp.company).toBeTruthy();
        expect(exp.role).toBeTruthy();
        expect(exp.period).toBeTruthy();
        expect(exp.techStack.length).toBeGreaterThan(0);
      });
    });
  });

  describe('educationData', () => {
    it('should have education entries', () => {
      expect(educationData.length).toBeGreaterThan(0);
    });
  });

  describe('certificationsData', () => {
    it('should have certifications', () => {
      expect(certificationsData.length).toBeGreaterThan(0);
    });
  });

  describe('profileInfo', () => {
    it('should have required profile fields', () => {
      expect(profileInfo.name).toBeTruthy();
      expect(profileInfo.role).toBeTruthy();
      expect(profileInfo.email).toBeTruthy();
      expect(profileInfo.githubUrl).toBeTruthy();
      expect(profileInfo.linkedinUrl).toBeTruthy();
    });
  });
});

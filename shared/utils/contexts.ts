'use client'

import { createContext } from 'react';
import { Company, PersonalDetails, Project } from './types';
import { personalDetails, projectDetails } from './consts';

export const PersonalDetailsContext = createContext(personalDetails);
// export const ProjectDetailsContext = createContext<Project[] | undefined>(undefined);
// export const CompanyDetailsContext = createContext<Company[] | undefined>(undefined);

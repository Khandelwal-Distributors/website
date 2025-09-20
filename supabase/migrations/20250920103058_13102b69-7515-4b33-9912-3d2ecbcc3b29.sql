-- Add project_url field to projects table
ALTER TABLE public.projects 
ADD COLUMN project_url text;

-- Add comment for the new column
COMMENT ON COLUMN public.projects.project_url IS 'URL link to view more details about the project';
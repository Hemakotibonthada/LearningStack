import os

# Define the Delta folder path
delta_folder = r'\Users\v-hbonthada\Documents\WorkSpace\TeachingPlatform'

# Output file to store folder and file structure
output_file = 'folders_and_files.txt'

def list_folders_and_files(base_path, output_file):
    with open(output_file, 'w') as file:
        for root, dirs, files in os.walk(base_path):
            # Write the folder path
            file.write(f"Folder: {root}\n")
            # Write the files in the folder
            for f in files:
                file.write(f"  File: {f}\n")
            file.write("\n")

list_folders_and_files(delta_folder, output_file)
print(f"Folder structure saved to {output_file}")

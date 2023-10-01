import os
import json


def update_json_with_image_type(json_file_path, image_folder_path):
    # Read the JSON file
    with open(json_file_path, 'r') as f:
        data = json.load(f)

    # Loop through each field and individual in the JSON
    for field in data:
        for individual in data[field]:
            name = individual['name']

            # Search for the individual's image in the 'images' folder
            for file_name in os.listdir(image_folder_path):
                if name in file_name:
                    # Extract the file extension
                    file_extension = os.path.splitext(file_name)[1]

                    # Update the JSON data
                    individual['picture'] = f"{image_folder_path}/{name}{file_extension}"
                    break

    # Write the updated JSON data back to the file
    with open(json_file_path, 'w') as f:
        json.dump(data, f, indent=4)


if __name__ == "__main__":
    json_file_path = 'resumesinductee.json'
    image_folder_path = 'images'

    update_json_with_image_type(json_file_path, image_folder_path)

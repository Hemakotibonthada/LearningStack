from flask import Flask, render_template, send_from_directory, url_for
import os

app = Flask(__name__)

# Path to your Delta folder
VIDEO_FOLDER = '/Users/hema/Desktop/Delta'  # Replace with the full path to your Delta folder

@app.route("/")
def index():
    folder_structure = {}
    # List all subfolders, sorted numerically if possible
    subfolders = sorted(
        [f for f in os.listdir(VIDEO_FOLDER) if os.path.isdir(os.path.join(VIDEO_FOLDER, f))],
        key=lambda x: int(x) if x.isdigit() else x
    )

    # Loop through subfolders and list video files
    for folder in subfolders:
        folder_path = os.path.join(VIDEO_FOLDER, folder)
        video_files = [
            file for file in os.listdir(folder_path) if file.endswith(('.mp4', '.mkv'))
        ]
        folder_structure[folder] = video_files

    return render_template("index.html", folder_structure=folder_structure)

@app.route("/videos/<path:filename>")
def serve_video(filename):
    # Serve video files
    full_path = os.path.join(VIDEO_FOLDER, filename)
    directory = os.path.dirname(full_path)
    file_name = os.path.basename(full_path)
    return send_from_directory(directory, file_name)

@app.route("/play/<path:filename>")
def play_video(filename):
    # Play video within the webpage
    return render_template("video_player.html", video_path=url_for('serve_video', filename=filename))

if __name__ == "__main__":
    app.run(debug=True, port=5002, use_reloader=False)

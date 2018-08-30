#!/bin/bash

# @blame R. Matt McCann <mccann.matt@gmail.com>
# @brief Sets up the ulimits and launchs watchman - this script needs to be run once at the beginning of a dev container

# Configure the ulimits
echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches

# Launch watchman
watchman watch .
